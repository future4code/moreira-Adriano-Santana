import React from 'react';
import styled from 'styled-components';

const DivCardGrande = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius:10px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `
const DivCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const DivCard = styled.h4`
    margin:0px;
`
const DivCarddescricao = styled.div`
    margin:0px;
`
function CardGrande(props) {
    return (
        <DivCardGrande>
            <DivCardImg src={ props.logo } />
            <DivCardImg src={ props.imagem } />
            
            <div>
                <DivCard>{ props.nome }</DivCard>
                <DivCarddescricao>{ props.descricao }</DivCarddescricao>
                
            </div>
        </DivCardGrande>
    )
}

export default CardGrande;