import { Route, Routes } from 'react-router-dom'
// import { Routes } from 'react-router'
import AddPet from "./components/AddPet" 
import AddPhoto from "./components/AddPhoto"
import ChoosePet from "./components/ChoosePet"  
import Dashboard from "./components/Dashboard"
import DisplayProfile from "./components/DisplayProfile" 
import Login from "./components/Login" 
import Events from './components/Events';

import Nav from "./components/Nav" 
import PhotoGallery from "./components/PhotoGallery" 
import RegisterUser from './components/RegisterUser'


export default function ReactRoutes(){
    return(
    
      <Routes>
        
      <Route path ="/" exact element={<Login />}></Route>
 
      <Route path ="/AddPet" component={AddPet} >
          {/* <AddPet /> */}
        </Route>
 
      <Route path ="/AddPhoto" component={AddPhoto}>
          {/* <AddPhoto /> */}
        </Route>
 
      <Route path ="/ChoosePet" component={ChoosePet}> 
        {/* <ChoosePet /> */}
      </Route>
     
      <Route path ="/Dashboard" component={Dashboard}  >
          {/* <Dashboard element={<Events />}/> */}
      </Route>
 
      <Route path ="/DisplayProfile" component={DisplayProfile} >
          {/* <DisplayProfile /> */}
      </Route>
 
      <Route path ="/register" component={RegisterUser} > 
        {/* <Login />  */}
      </Route>
     
 
      <Route path ="/Nav" >
          {/* <Nav /> */}
      </Route>
 
      <Route path ="/PhotoGallery" > 
        {/* <PhotoGallery /> */}
    </Route>
        
      </Routes>
        
    )
};