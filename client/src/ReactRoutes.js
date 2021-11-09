import { Route, Routes } from "react-router-dom";
// import { Routes } from 'react-router'
import AddPet from "./components/AddPet";
// import AddPhoto from "./components/AddPhoto";
import ChoosePet from "./components/ChoosePet";
import Dashboard from "./components/Dashboard";
// import DisplayProfile from "./components/DisplayProfile";
import Login from "./components/Login";
import Vets from "./components/Vets";

export default function ReactRoutes() {
  return (
    <Routes>
      <div>
        {/* main address - login page  */}
        <Route path="/" exact element={<Login />} />
        {/* dashboard - HOME buttons should point to it */}
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* after login - choose pet */}
        <Route path="/ChoosePet" element={<ChoosePet />} />
        {/* if no pets or want to add one - add pet */}
        <Route path="/AddPet" element={<AddPet />} />
        <Route path="/Vets" element={<Vets />} />
        {/* <Route path="/Wellness" element={<Wellness />} /> */}
        {/* <Route path="/DisplayProfile">
          <DisplayProfile />
        </Route> */}
      </div>
    </Routes>
  );
}
