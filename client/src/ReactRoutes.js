import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import AddPhoto from "./components/AddPhoto"
import ChoosePet from "./components/ChoosePet" 
// import AddPet from './components/AddPet' 
import Dashboard from "./components/Dashboard"
import DisplayProfile from "./components/DisplayProfile" 
import Login from "./components/Login" 
import Vets from './components/Vets'
import PhotoGallery from "./components/PhotoGallery" 
import Wellness from "./components/Wellness" 
import RegisterUser from './components/RegisterUser'
import countryList from 'react-select-country-list'
import ProfPic from './components/DisplayProfile'

export default function ReactRoutes() {
  const [user, setUser] = useState();
  const [pet, setPet] = useState();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
      console.log("react-routes", pet)
      setCountries(countryList().getLabels());
  }, [])

  return (
    <Routes>

        {/* main address - login page  */}
        <Route path="/" exact element={<Login onLogin={user => setUser(user)}/>} />

        {/* dashboard - HOME buttons should point to it */}
        <Route path="/Dashboard" element={<Dashboard user={user} pet={pet} />} />

        {/* after login - choose pet */}
        <Route path="/ChoosePet" element={<ChoosePet user={user} sendPet={(pet) => setPet(pet)}/>} />

        <Route path="/Vets" element={<Vets user={user} pet={pet}/>} />
 
        {/* <Route path="/Wellness" element={<Wellness />} /> */}

        <Route path="/AddPhoto" element={<AddPhoto pet={pet} />} />


        <Route path="/DisplayProfile" element={<DisplayProfile pet={pet} /*onClose={handleClose}*/ />} />

        <Route path ="/PhotoGallery" element={<PhotoGallery pet={pet} />} />

        <Route path ="/registeruser" element={<RegisterUser  countries={countries}/>} />

        <Route path ="/Wellness" element={<Wellness pet={pet} />} />

    </Routes>
  );
}

