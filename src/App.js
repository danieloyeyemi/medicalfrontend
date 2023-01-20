import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom";
import PatientsDashboard from "./pages/PatientDashboard";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Canvas from "./components/Canvas";
import DashTop from "./components/DashTop";
import HealthCard from "./components/HealthCard";
import Drawer from "./components/Drawer";
import LeftBar from "./components/LeftBar";
import MuiTabs from "./components/MuiTabs";
import Navbar from "./components/Navbar";
import OnlineUsers from "./components/OnlineUsers";
import PatientsNavbar from "./components/PatientsNavbar";
import Prescription from "./components/Prescription";


function App() {
  return (
    <>
    {/* <LandingPage/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/patientsdashboard' element={<PatientsDashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/canvas' element={<Canvas/>}/>
      <Route path='/dashtop' element={<DashTop/>}/>
      <Route path='/drawer' element={<Drawer/>}/>
      <Route path='/healthcard' element={<HealthCard/>}/>
      <Route path='/leftbar' element={<LeftBar/>}/>
      <Route path='/muitab' element={<MuiTabs/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/prescription' element={<Prescription/>}/>
      <Route path='/onlineusers' element={<OnlineUsers/>}/>
      <Route path='/patientnavbar' element={<PatientsNavbar/>}/>
    </Routes>
    </>
  );
}

export default App;
