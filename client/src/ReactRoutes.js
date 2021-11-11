import { Link, Route, Routes } from 'react-router-dom'
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


export default function ReactRoutes(){
    return(
    
      <Routes>
        <Route path ="/" exact element={<Login />}/>
     
        <Route path ="/AddPet" element={AddPet} />

        <Route path ="/AddPhoto" element={<AddPhoto />} />

        <Route path ="/ChoosePet" component={ChoosePet} />
      
        <Route path ="/Dashboard" element={<Dashboard />} />
          
        <Route path ="/DisplayProfile" element={DisplayProfile} />

        <Route path ="/PhotoGallery" element={<PhotoGallery />} />

        <Route path ="/registeruser" element={<RegisterUser />} />

        <Route path ="/Vets" element={<Vets />} />
        
      </Routes>
    )
};