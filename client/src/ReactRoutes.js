import { Route, Routes } from 'react-router-dom'
// import { Routes } from 'react-router'
import AddPet from "./components/AddPet" 
import AddPhoto from "./components/AddPhoto"
import ChoosePet from "./components/ChoosePet"  
import Dashboard from "./components/Dashboard"
import DisplayProfile from "./components/DisplayProfile" 
// import Login from "./components/Login" 
import Nav from "./components/Nav" 
import PhotoGallery from "./components/PhotoGallery" 
import RegisterUser from './components/RegisterUser'


export default function ReactRoutes(){
    return(
    
        <Routes>
        <div>
      <Route path ="/" exact></Route>
 
      <Route path ="/AddPet" >
          <AddPet />
        </Route>
 
      <Route path ="/AddPhoto" >
          {/* <AddPhoto /> */}
        </Route>
 
      <Route path ="/ChoosePet" > 
        {/* <ChoosePet /> */}
      </Route>
     
      <Route path ="/Dashboard" >
          {/* <Dashboard /> */}
      </Route>
 
      <Route path ="/DisplayProfile" >
          {/* <DisplayProfile /> */}
      </Route>
 
      <Route path ="/register" element={<RegisterUser /*user={(user)}*/ />} > 
        {/* <Login />  */}
      </Route>
     
 
      <Route path ="/Nav" >
          {/* <Nav /> */}
      </Route>
 
      <Route path ="/PhotoGallery" > 
        {/* <PhotoGallery /> */}
    </Route>
        </div>
      </Routes>
        
    )
};