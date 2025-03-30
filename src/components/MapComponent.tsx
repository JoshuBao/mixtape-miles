import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { storiesData } from '@/data/stories';
import { StoryData } from '@/types/story';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// Define pin colors based on journey
const journeyColors: { [key: string]: string } = {
  'Berkeley-Oregon Road Trip': '#FF5A5F', // mixtape-secondary color
  // Add more journeys with different colors as needed
};

// Create custom icons for different journeys
const createCustomIcon = (journey: string) => {
  const color = journeyColors[journey] || '#48A6A7'; // Default to mixtape-primary if journey not found
  
  return L.divIcon({
    className: 'custom-pin',
    html: `
      <div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 3px 10px rgba(0,0,0,0.3); transform-origin: center bottom; transition: transform 0.3s;">
        <span style="color: white; font-size: 16px; font-weight: bold;">🎵</span>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

// Group stories by journey
const groupStoriesByJourney = () => {
  const journeys: { [key: string]: StoryData[] } = {};
  storiesData.forEach(story => {
    if (!journeys[story.journey]) {
      journeys[story.journey] = [];
    }
    journeys[story.journey].push(story);
  });
  return journeys;
};

const MapComponent = () => {
  const journeys = groupStoriesByJourney();

  // Create polylines for each journey to connect the dots
  const createJourneyPath = (stories: StoryData[]) => {
    // Sort stories by story ID or date if available
    const sortedStories = [...stories].sort((a, b) => parseInt(a.id) - parseInt(b.id));
    return sortedStories.map(story => 
      story.latitude && story.longitude ? [story.latitude, story.longitude] as [number, number] : null
    ).filter(coord => coord !== null);
  };
  
  // Get center position based on available coordinates
  const getCenterPosition = (): [number, number] => {
    if (storiesData.length > 0) {
      // Find the middle story in the Berkeley-Oregon journey
      const berkeleyOregonStories = storiesData.filter(
        story => story.journey === 'Berkeley-Oregon Road Trip'
      );
      
      if (berkeleyOregonStories.length > 0) {
        const middleIndex = Math.floor(berkeleyOregonStories.length / 2);
        const story = berkeleyOregonStories[middleIndex];
        if (story.latitude && story.longitude) {
          return [story.latitude, story.longitude];
        }
      }
      
      // Fallback to first story with coordinates
      for (const story of storiesData) {
        if (story.latitude && story.longitude) {
          return [story.latitude, story.longitude];
        }
      }
    }
    
    // Default center (Berkeley, CA)
    return [37.8715, -122.273];
  };

  return (
    <div className="map-container relative">
      <div className="journey-legend absolute top-4 right-4 z-10 bg-white p-3 rounded-lg shadow-md">
        <h3 className="text-sm font-bold mb-2 text-mixtape-dark">Journey Legend</h3>
        {Object.keys(journeyColors).map(journey => (
          <div key={journey} className="flex items-center mb-1">
            <div 
              className="w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: journeyColors[journey] }}
            ></div>
            <span className="text-xs text-mixtape-dark">{journey}</span>
          </div>
        ))}
      </div>
      
      <MapContainer 
        center={getCenterPosition()} 
        zoom={6} 
        style={{ height: '600px', width: '100%', borderRadius: '12px' }}
        className="shadow-xl transition-all duration-300 hover:shadow-2xl"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
        />
        
        {/* Render polylines for each journey */}
        {Object.entries(journeys).map(([journeyName, stories]) => (
          <Polyline 
            key={journeyName}
            positions={createJourneyPath(stories)}
            color={journeyColors[journeyName] || '#48A6A7'}
            weight={3}
            opacity={0.7}
            dashArray="5, 10"
          />
        ))}
        
        {/* Render markers for each story */}
        {storiesData.filter(story => story.latitude && story.longitude).map(story => (
          <Marker 
            key={story.id} 
            position={[story.latitude!, story.longitude!]}
            icon={createCustomIcon(story.journey)}
          >
            <Popup className="custom-popup">
              <div className="p-2 max-w-sm">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-2">{story.emoji || '🎵'}</div>
                  <div>
                    <h3 className="font-bold text-lg text-mixtape-dark">{story.personName}</h3>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </div>
                
                <div className="mb-3 p-3 bg-mixtape-light rounded-lg">
                  <div className="text-sm font-medium text-mixtape-primary mb-1">Song Story</div>
                  <div className="flex items-center">
                    <div className="bg-mixtape-primary/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-mixtape-dark">{story.songTitle}</h4>
                      <p className="text-sm text-gray-600">{story.artist}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm mb-3">{story.shortStory}</p>
                
                <div className="mb-3">
                  <AudioPlayer
                    src={story.theme || '#'}
                    onPlay={() => console.log("onPlay")}
                    customAdditionalControls={[]}
                    layout="horizontal-reverse"
                    customVolumeControls={[]}
                    style={{ borderRadius: '8px', overflow: 'hidden' }}
                  />
                </div>
                
                <a 
                  href={`/stories/${story.slug || story.id}`}
                  className="block w-full text-center bg-mixtape-primary hover:bg-mixtape-primary/90 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Read Full Story
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent; 