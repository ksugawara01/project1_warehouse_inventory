import React from 'react'
import styled from 'styled-components'

export default function InfoCard(props) {
    const { category, data } = props
    return(
        <StyledInfoCard>
            <div>{category}</div>
            <div>{data}</div>
        </StyledInfoCard>
    )
}

// Styled Components

const StyledInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 75%;
    width: 30%;
    border: 2px solid red;
`