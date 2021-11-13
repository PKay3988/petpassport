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

<<<<<<< HEAD
export default function ReactRoutes(){
    return(
  
      <Routes>
        {/* <div>  */}
{/*       
            <Route path ="/" exact></Route>
      
            <Route path ="/addPet" >
                <AddPet />
              </Route>
      
            <Route path ="/addPhoto" >
                <AddPhoto />
              </Route>
       */}
            {/* <Route path ="/choosePet" > 
              <ChoosePet />
            </Route> */}
{/*           
            <Route path ="/dashboard" >
                <Dashboard />
            </Route>
      
            <Route path ="/displayprofile" >
                <DisplayProfile />
            </Route>
      
            <Route path ="/login" > 
              <Login /> 
            </Route>
          
      
            <Route path ="/nav" >
                <Nav />
            </Route>
      
            <Route path ="/photogallery" > 
              <PhotoGallery />
          </Route> */}
    {/* </div> */}
      </Routes>
    
    )
};
=======

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

        {/* <Route path="/DisplayProfile" element={<DisplayProfile />} /> */}

        <Route path ="/PhotoGallery" element={<PhotoGallery />} />

        <Route path ="/registeruser" element={<RegisterUser />} />

        <Route path="/Login" element={<Login />} />
    </Routes>
  );
}
>>>>>>> b5e1bb5f4a8dafc11c8c30f32a933bc18b195055
