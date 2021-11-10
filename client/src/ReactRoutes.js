import { Route, Routes } from 'react-router-dom'
// import { Routes } from 'react-router'
import AddPet from "./components/AddPet" 
import AddPhoto from "./components/AddPhoto"
import ChoosePet from "./components/ChoosePet"  
import Dashboard from "./components/Dashboard"
import DisplayProfile from "./components/DisplayProfile" 
import Login from "./components/Login" 
import Nav from "./components/Nav" 
import PhotoGallery from "./components/PhotoGallery" 


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