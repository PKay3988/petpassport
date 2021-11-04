import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Icon from '../assets/icon-1.svg';
import './Vets.css';

const MapView = () => {
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