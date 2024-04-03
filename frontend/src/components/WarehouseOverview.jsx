import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'
import GraphCard from './GraphCard'
import InventoryIssuesCard from './InventoryIssuesCard'

export default function WarehouseOverview() {
    return(
        <StyledOverview>
            <h1>Fairborn Fruit Warehouse</h1>
            <div>123 street Faiborn, OH, 45324</div>
            <InfoContainer>
                <InfoCard category='Count of fruit' data='2593 fruit' />
                <InfoCard category='value of fruit' data='$5600' />
                <InventoryIssuesCard />
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