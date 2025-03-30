import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { storiesData } from '@/data/stories';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// Fix for default icon issue in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  return (
    <MapContainer center={[37.8715, -122.273]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      {storiesData.map(story => (
        <Marker key={story.id} position={[story.latitude, story.longitude]}>
          <Popup>
            <div>
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
              <AudioPlayer
                src={story.songUrl}
                onPlay={e => console.log("onPlay")}
                // other props here
              />
              <a href={`/stories/${story.id}`}>Read more</a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent; 