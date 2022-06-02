import React from 'react'
import styled from 'styled-components'


const ContainerWhatsf4 = styled.div`
background-color:red;
display:flex;
`


class Whatsf4 extends React.Component {
	state = {

		mensagens: [],
		valorUsuario: "",
		valorMensagem: "",
		
	}

	render() {
		return (
			<ContainerWhatsf4>
				<input
					style={{ width: '50%' }}
					type="text"
					placeholder="Usuario"
				/>
				<input
					style={{ width: '100%' }}
					type="text"
					placeholder="Mensagem"

				/>
				<button>Enviar</button>
			</ContainerWhatsf4>
		)
	}
}

export default Whatsf4