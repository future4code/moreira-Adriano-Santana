import React, { useState } from 'react'
import styled from 'styled-components'



const FooterInputs = styled.div`
display:flex;


`

const InputUsuario = styled.input`


:hover{
    border: 2px solid green;
}

`
const InputMensagem = styled.input`
width: 200px;

:hover{
    border: 2px solid green;
}

`
const BotaoEnviar = styled.button`

:hover{
    background-color:green;
}

`
 const DivInput = styled.div`
 position:absolute;
 width:660px;
 background-color:black;
 `

const InputFooter = (props) => {
    
    return (
        <FooterInputs>

            <form onSubmit={props.enviarMensagem}>
             <DivInput>
                <InputUsuario
                    name="usuario" 
                    style={{ width: '50%' }}
                    placeholder="Usuario"
                    onChange={props.onChange}
                    value={props.form.usuario}
                /> 
                <InputMensagem
                    name="mensagem"
                    style={{ width: '100%' }}
                    placeholder="Mensagem"
                    onChange={props.onChange}
                    value={props.form.mensagem}

                />  
                <BotaoEnviar>Enviar</BotaoEnviar>
                </DivInput>
            </form>
        
        </FooterInputs>
    )
}
export default InputFooter;