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
      <div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 3px 10px rgba(0,0,0,0.2); transform-origin: center bottom; transition: transform 0.3s; animation: pulse 2s infinite;">
        <span style="color: white; font-size: 16px; font-weight: bold;">🎵</span>
      </div>
      <style>
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      </style>
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
    <div className="map-container relative bg-mixtape-paper">
      <div className="journey-legend absolute top-4 right-4 z-10 bg-mixtape-paper p-3 rounded-lg shadow-md border-l-4 border-mixtape-tertiary">
        <h3 className="text-sm font-bold mb-2 text-mixtape-text">Journey Legend</h3>
        {Object.keys(journeyColors).map(journey => (
          <div key={journey} className="flex items-center mb-1 group">
            <div 
              className="w-4 h-4 rounded-full mr-2 transition-transform duration-300 group-hover:scale-110" 
              style={{ backgroundColor: journeyColors[journey] }}
            ></div>
            <span className="text-xs text-mixtape-text group-hover:text-mixtape-secondary transition-colors duration-300">{journey}</span>
          </div>
        ))}
      </div>
      
      <MapContainer 
        center={getCenterPosition()} 
        zoom={6} 
        style={{ 
          height: '600px', 
          width: '100%', 
          borderRadius: '12px',
          backgroundColor: '#FEFEFE' // mixtape-paper
        }}
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
            weight={4}
            opacity={0.7}
            dashArray="5, 8"
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
              <div className="p-3 max-w-sm bg-gradient-to-br from-mixtape-paper to-mixtape-cream rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-2 bg-mixtape-primary/10 w-10 h-10 rounded-full flex items-center justify-center">{story.emoji || '🎵'}</div>
                  <div>
                    <h3 className="font-bold text-lg text-mixtape-text">{story.personName}</h3>
                    <p className="text-sm text-mixtape-subtitle flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {story.location}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4 p-3 bg-mixtape-mint rounded-lg shadow-sm">
                  <div className="text-sm font-medium text-mixtape-primary mb-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    Song Story
                  </div>
                  <div className="flex items-center">
                    <div className="bg-mixtape-primary/20 p-2 rounded-full mr-3 transform transition-transform hover:scale-110 duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-mixtape-text">&quot;{story.songTitle}&quot;</h4>
                      <p className="text-sm text-mixtape-subtitle">by {story.artist}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-mixtape-sunlight/50 p-3 rounded-lg mb-4">
                  <p className="text-sm mb-3 text-mixtape-subtitle italic">&quot;{story.shortStory}&quot;</p>
                </div>
                
                <div className="mb-4">
                  <AudioPlayer
                    src={story.theme || '#'}
                    onPlay={() => console.log("onPlay")}
                    customAdditionalControls={[]}
                    layout="horizontal-reverse"
                    customVolumeControls={[]}
                    style={{ 
                      borderRadius: '8px', 
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
                
                <a 
                  href={`/stories/${story.slug || story.id}`}
                  className="block w-full text-center bg-gradient-to-r from-mixtape-primary to-mixtape-secondary text-mixtape-paper font-medium py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-md"
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