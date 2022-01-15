import React from 'react'

import styled from 'styled-components'


const ContainerHeader = styled.div`
background-color: green;
color: white;
text-align: center;
padding: 5px;

`

class Header extends React.Component {
	render() {
		return (
			<ContainerHeader>
            <h1>Whatsf4</h1>
            </ContainerHeader>
				
			
		)
	}
}

export default Header