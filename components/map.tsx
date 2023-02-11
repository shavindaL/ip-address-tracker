import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const Map = () => {

    function getIP(ip :string) {
        console.log(ip);
        
    }

    return (
            <MapContainer center={[6.93548,  79.84868]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[6.93548,  79.84868]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    );
}

export default Map;