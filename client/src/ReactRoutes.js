import { Link, Route, Routes } from 'react-router-dom'
import React, {useState} from 'react'
// import { Routes } from 'react-router'
import AddPet from "./components/AddPet" 
import AddPhoto from "./components/AddPhoto"
import ChoosePet from "./components/ChoosePet"  
import Dashboard from "./components/Dashboard"
import DisplayProfile from "./components/DisplayProfile" 
import Login from "./components/Login" 
import Events from './components/Events';
import Vets from './components/Vets'
import Nav from "./components/Nav" 
import PhotoGallery from "./components/PhotoGallery" 
import RegisterUser from './components/RegisterUser'

export default function ReactRoutes() {
  const [user, setUser] = useState();
  const [petId, setPetId] = useState();


  return (
    <Routes>

        {/* main address - login page  */}
        <Route path="/" exact element={<Login onLogin={user => setUser(user)}/>} />

        {/* dashboard - HOME buttons should point to it */}
        <Route path="/Dashboard" element={<Dashboard user={user} petId={petId} />} />

        {/* after login - choose pet */}
        <Route path="/ChoosePet" element={<ChoosePet user={user} sendPet={(pet) => setPetId(pet)} sendUser={user => setUser(user)}/>} />

        {/* if no pets or want to add one - add pet */}
        <Route path="/AddPet" element={<AddPet />} />

        <Route path="/Vets" element={<Vets user={user}/>} />

        {/* <Route path="/Wellness" element={<Wellness />} /> */}

        <Route path="/AddPhoto" element={<AddPhoto />} />

        <Route path ="/PhotoGallery" element={<PhotoGallery />} />

        <Route path ="/registeruser" element={<RegisterUser />} />

        {/* <Route path="/Login" element={<Login />} /> */}
    </Routes>
  );
}
