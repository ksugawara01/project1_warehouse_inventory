import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'
import GraphCard from './GraphCard'

export default function AllWarehouseOverview() {
    return(
        <StyledOverview>
            <h1>Overview</h1>
            <InfoContainer>
                <InfoCard category='Count of all fruit' data='1300 fruit' />
                <InfoCard category='value of fruit' data='$12035' />
                <InfoCard category='# of Warehouses' data='6 warehouses' />
            </InfoContainer>
            <GraphContainer>
                <GraphCard title='product value by category'/>
                <GraphCard title='product value by warehouse'/>
            </GraphContainer>
        </StyledOverview>
    )
}

// Styled Components

const StyledOverview = styled.div`
    border: 10px solid red;
    height: 100%;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20%;
    border: 2px solid red;
`

const GraphContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;
    border: 2px solid red;
`