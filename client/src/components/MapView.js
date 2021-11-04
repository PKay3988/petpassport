import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './Vets.css';

// leaflet/dist/images/marker-icon.png
import icon from '../assets/icon-2.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapView = () => {
    
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 40]
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <MapContainer  center={[ 51.53813, -0.22522 ]} zoom={13}>
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            <Marker position={[ 51.52884, -0.17272 ]}>
                <Popup>
                    A popup!
                </Popup>
            </Marker>
        </MapContainer>
    )
}


export default MapView;