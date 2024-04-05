import React from 'react'
import styled from 'styled-components'

export default function InfoCard(props) {
    const { category, data } = props
    return(
        <StyledInfoCard>
            <div>{category}</div>
            <h1>{data}</h1>
        </StyledInfoCard>
    )
}

// Styled Components

const StyledInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 75%;
    width: 30%;
    box-shadow: 0 2px 10px gray;
`