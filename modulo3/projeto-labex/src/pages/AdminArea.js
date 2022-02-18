import React from "react";
import { useNavigate } from "react-router-dom";


const AdminArea = () => {
  const navigate = useNavigate()
  
  const onChangeList = () =>{
    navigate("/ListTravel")
  };
  const onChangeAdmin = () =>{
    navigate("/Login")
  };
  return (
    <div>
    <div>
        <button onClick={onChangeList}>Create travel</button>
      </div>
      <div>
        <button onClick={onChangeAdmin}>Back</button >
      </div>
    </div>
  );
};

export default AdminArea;