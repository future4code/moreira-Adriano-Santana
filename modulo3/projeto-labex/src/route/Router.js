import React from "react";
import { BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import ListTravel from "../pages/ListTravel";
import Home from "../pages/Home";
import  Login  from "../pages/Login";
import  Signup  from "../pages/SignUp";
import AdminArea from "../pages/AdminArea";
import CreateTripPage from "../pages/CreateTripPage";





const RouterDirection =()=> {
  return (
    <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/ListTravel" element={<ListTravel/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/Signup" element={<Signup/>}/>
      <Route  path="/Back" element={<Home/>}/>
      <Route  path="/AdminArea" element={<AdminArea/>}/>
      <Route  path="/CreateTriPage" element={<CreateTripPage/>}/>
     </Routes>
    </Router>


    
  );
}

export default RouterDirection;