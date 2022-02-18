import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



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
      const buttonSignup =()=> {
          navigate("/Signup")
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
          <button onClick={buttonBack}>Back</button>
          <button onClick={buttonSignup}>SignUp</button>
          <p>Suas Viagens</p>
          <div>{listTravel}</div>
      </div>

  )
}
export default ListTravel;