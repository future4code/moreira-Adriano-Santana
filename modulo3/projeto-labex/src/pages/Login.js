import React, { useState } from "react";
import styled from "styled-components";

const StyleInput =styled.div`
background-color: #8f3eec;
border-radius:10px;
width:300px;
display:flex;
justify-content:center;
flex-direction:column;
position: absolute;
padding:5px;
top:90%;
left:625px;
transform:translate3d(-50%,-50%,0)

`

  const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const  onChangeEmail= (event)=>{
    setEmail(event.target.value);

  };
  const onChangePassword = (event) =>{
    setPassword(event.target.value);

  };
  const submitLogin =(event)=>{
    

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
    <button onClick={submitLogin}>send</button>
    </StyleInput>)
};
export default Login;