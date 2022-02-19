import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Cards =styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Roboto', sans-serif;
    color: white;
    `

const ButtonCreate = styled.button`
  margin-top:5px;
  width:150px;
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:10px;
  top: 110px;
  left: 200px;
  background-color: #8f3eec;
  border-radius: 10px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;
const Logout = styled.button`
  margin-top:5px;
  width:90px;
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:10px;
  top: 110px;
  left: 400px;
  background-color: #8f3eec;
  border-radius: 10px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;
const ButtonBack = styled.button`
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

 const ListTravel = ()=> {

  const [nametravel, setNameTravel] = useState([]);

  useEffect(()=> {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:adriano-bri-moreira/trips"
      axios.get(url)
      .then(res => {
        setNameTravel(res.data.trips)
      })
      .catch(error => {
          console.log(error.data);
      })
  })

  const navigate = useNavigate() 
      const buttonBack = ()=> {
          navigate("/")
      } 
      const createTravel=()=> {
          navigate("/CreateTripPage")
      }
      const logout =()=> {
        navigate("/")
    }


      const listTravel = nametravel.map((itens)=>{
          return  <div>
                      <h4>{itens.id}</h4>
                      <h1>{itens.name}</h1>
                      <h2>{itens.description}</h2>
                      <h3>{itens.planet}</h3>
                      <h3>{itens.durationInDays}</h3>
                      <h3>{itens.date}</h3>
                  </div>
      })

  return(
      <div>
          <ButtonBack  onClick={buttonBack}>Back</ButtonBack >
          <ButtonCreate onClick={createTravel}>Create travel</ButtonCreate>
          <Logout onClick={logout}>Loguot</Logout>
          <p>Suas Viagens</p>
          <Cards>{listTravel}</Cards>
      </div>

  )
}
export default ListTravel;