import React from "react";
import { BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import ListTravel from "../pages/ListTravel";
import Home from "../pages/Home";
import  Login  from "../pages/Login";
import  Signup  from "../pages/SignUp";





const RouterDirection =()=> {
  return (
    <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/ListTravel" element={<ListTravel/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/Signup" element={<Signup/>}/>
     </Routes>
    </Router>


    
  );
}

export default RouterDirection;