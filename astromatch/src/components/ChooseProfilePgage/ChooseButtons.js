import React from 'react'
import styled from 'styled-components'

const Botoes = styled.div`
display:flex;
justify-content: space-around;
`
export default function ChooseButtons() {
  return (
    <Botoes>
        <button>Não</button>
        <button>Sim</button>
    </Botoes>
  )
}
