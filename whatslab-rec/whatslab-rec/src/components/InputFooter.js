import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'


const FooterInputs = styled.div`
display:flex;
height: 40px;

`
const InputUsuario = styled.input`

:hover{
    border: 2px solid green;
}

`
const InputMensagem = styled.input`

:hover{
    border: 2px solid green;
}

`
const BotaoEnviar = styled.button`

:hover{
    background-color:green;
}

`

const InputFooter = () => {

    const [form, setForm] = useState({ mensagem: "", usuario: "" })


    const enviarMensagem = (event) => {
        event.preventDefault()
    }
    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    console.log(form)
    return (
        <FooterInputs>

            <form onSubmit={enviarMensagem}>

                <InputUsuario
                    name={"usuario"}
                    style={{ width: '50%' }}
                    placeholder={"Usuario"}
                    onChange={onChange}
                    value={form.usuario}
                />
                <InputMensagem
                    name={"mensagem"}
                    style={{ width: '100%' }}
                    placeholder={"Mensagem"}
                    onChange={onChange}
                    value={form.mensagem}

                />
                <BotaoEnviar>Enviar</BotaoEnviar>

            </form>

        </FooterInputs>
    )
}
export default InputFooter;