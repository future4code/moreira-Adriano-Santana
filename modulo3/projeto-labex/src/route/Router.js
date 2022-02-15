import React from "react";
import { Home } from "./pages/Home";
import { ListTravel } from "./pages/ListTravel";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";

import { BrowserRouter,Routes,Route} from "react-router-dom";




function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/ListTravel" element={<ListTravel/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
     </Routes>
    </BrowserRouter>


    
  );
}

export default Router;