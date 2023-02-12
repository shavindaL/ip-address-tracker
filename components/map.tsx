import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface CustomProp {
    lat: number,
    lng: number
}

const Map = (prop :CustomProp) => { 
    
    
    return (
            <MapContainer center={[prop.lat,  prop.lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[prop.lat,  prop.lng]} />
            </MapContainer>
    );
}

export default Map;