import React from 'react';
import styled from 'styled-components';

const DivEmail = styled.div`
    width:35vw;
    display: flex;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    border-radius:10px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`
const DivIcon = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `



function CardPequeno(props) {
    return (
        <DivEmail>
            
            <DivIcon src={ props.icons } />
            
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
                
            </div>
        </DivEmail>
    )
}

export default CardPequeno;