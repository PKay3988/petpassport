<<<<<<< HEAD
import React, { useEffect, useState  } from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './Vets.css';

// leaflet/dist/images/marker-icon.png
import vetIcon from '../assets/paw2.png';
import homeIcon from '../assets/home3.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapView = (props) => {

    function getVetIcon() {
        return L.icon( {
            iconUrl: vetIcon,
            iconSize: [45, 40],
            shadowUrl: iconShadow
        })
    }

    function getHomeIcon() {
        return L.icon({
            iconUrl: homeIcon,
            iconSize: [40, 40],
            shadowUrl: iconShadow
        })
    }

    let vetCoords = null;
    if(props.userVet.length > 0) {
        vetCoords = props.userVet[0].coords
    };

    let homeCoords = null;
    if(props.user) { homeCoords = props.user.coords };

    let center = [ 55.53813 , -0.22522 ];
    if(homeCoords) { center = homeCoords.split(",").reverse() } 

    return (
        <MapContainer  center={ center } zoom={15}>
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            {vetCoords ? 
            <Marker position={vetCoords.split(",").reverse()} icon={getVetIcon()}>
                <Popup>
                    {props.userVet[0].name} <br />
                    {props.userVet[0].phone_number}
                </Popup>
            </Marker>
            : null}
            {homeCoords ? 
            <Marker position={homeCoords.split(",").reverse()} icon={getHomeIcon()}>
                <Popup>
                    HOME
                </Popup>
            </Marker>
            : null}
=======
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
>>>>>>> b7e05fa (mapview - renders map)
        </MapContainer>
    )
}


export default MapView;