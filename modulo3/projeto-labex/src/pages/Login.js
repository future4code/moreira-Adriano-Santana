import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ButtonBack = styled.button`
  margin-top:5px;
  width:90px;
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:10px;
  top: 110px;
  left: 180px;
  background-color: #8f3eec;
  border-radius: 10px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;
const Input = styled.input`
  
  display:flex;
  left:10px;
  padding:10px;
  background-color: #c8e2fa;
  border-radius: 15px;
  border:1px solid blue;
  margin-top:5px;
  
`;
const ButtonSend = styled.button`
  margin-top:5px;
  width:90px;
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:10px;
  top: 110px;
  left: 55px;
  background-color: #8f3eec;
  border-radius: 10px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;


const StyleInput =styled.div`

border-radius:20px;
width:300px;
display:flex;
justify-content:center;
flex-direction:column;
position: absolute;
padding:15px;
top:85%;
left:620px;
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
    <Input placeholder="Email"
     type="email"
    value={email}
    onChange={onChangeEmail} 
    />
    <Input placeholder="Password"
     type="Password"
    value={password}
    onChange={onChangePassword} 
    />
    <ButtonSend onClick={submitLogin}>Send</ButtonSend>
    <ButtonBack onClick={onChangeHome}>Back</ButtonBack>
    </StyleInput>)
};

export default Login;