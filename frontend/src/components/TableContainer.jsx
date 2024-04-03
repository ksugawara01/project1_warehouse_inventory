import React from 'react'
import styled from 'styled-components'

export default function TableContainer(props) {
    
    return (
        <StyledTableContainer>
            {props.children}
        </StyledTableContainer>
    ) 
}

// Styled Components

const StyledTableContainer = styled.div`
    height: 200px;
    width: 100%;
    border: 5px solid grey;
`