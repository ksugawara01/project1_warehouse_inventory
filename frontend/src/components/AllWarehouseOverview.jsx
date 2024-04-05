import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'
import GraphCard from './GraphCard'

export default function AllWarehouseOverview(props) {
    const { warehouseCount, combinedInventory } = props;

    let fruitCount = 0;
    let fruitValue = 0;

    if (combinedInventory.length > 0) {
        // Reduce function to sum up the count of all fruit in the inventory
        fruitCount = combinedInventory.reduce((accumulator, item) => {
            return accumulator + item.quantity;
        }, 0)

        // Reduce function to sum up the value of all fruit in the inventory
        fruitValue = combinedInventory.reduce((accumulator, item) => {
            return accumulator + (item.quantity * item.price);
        }, 0)
    }

    // Data to pass to pie charts
    const valueGraphData = combinedInventory.map((item) => {
        return {
            id: item.inventoryId,
            value: item.price * item.quantity,
            label: item.fruitName,
            color: item.graphColor
        }
    })

    return(
        <StyledOverview>
            <h1>Overview</h1>
            <InfoContainer>
                <InfoCard category='Count of all fruit' data={`${fruitCount} Fruit`} />
                <InfoCard category='value of fruit' data={`$${fruitValue}`} />
                <InfoCard category='# of Warehouses' data={`${warehouseCount} Warehouses`} />
            </InfoContainer>
            <GraphContainer>
                <GraphCard title='product value by category' graphData={valueGraphData}/>
                <GraphCard title='product value by warehouse' graphData={valueGraphData}/>
            </GraphContainer>
        </StyledOverview>
    )
}

// Styled Components

const StyledOverview = styled.div`
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