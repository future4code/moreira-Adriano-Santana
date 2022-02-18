import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ButtonHome = styled.button`
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:15px;
  top: 500px;
  left: 500px;
  background-color: #8f3eec;
  border-radius: 20px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;
const ButtonSend = styled.button`
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:15px;
  border:#8f3eec;
  top: 500px;
  left: 650px;
  background-color: #8f3eec;
  border-radius: 20px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;

const StyleInput =styled.div`
background-color: #8f3eec;
border-radius:20px;
width:300px;
display:flex;
justify-content:center;
flex-direction:column;
position: absolute;
padding:5px;
top:90%;
left:625px;
transform:translate3d(-50%,-50%,0)
`;


  const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

    const  onChangeEmail = (event)=>{
    setEmail(event.target.value);

  };
  const onChangePassword = (event) =>{
    setPassword(event.target.value);

  };
  const submitLogin =()=>{
    const url ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/:adriano-bri-moreira/login"
    const header ={
      
      "Content-Type":"application/json"
    }
    const body ={
      "email": email,
	"password": password,
    }
    axios.post(url,body,{header})
    .then((res)=>{localStorage.setItem("token",res.data.token)
      navigate("/AdminArea")})
    .catch((error)=>{console.log(error.response)})
  }
    

  
  
  const onChangeHome = () =>{
    navigate("/")
  };
  

    
    
  return( 
    <StyleInput>
    <input placeholder="Email"
     type="email"
    value={email}
    onChange={onChangeEmail} 
    />
    <input placeholder="Password"
     type="Password"
    value={password}
    onChange={onChangePassword} 
    />
    <button onClick={submitLogin}>Send</button>
    <button onClick={onChangeHome}>Back</button>
    </StyleInput>)
};

export default Login;