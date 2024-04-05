import React from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'

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
            <h1>Fruit Warehouse Inventory System</h1>
            <InfoContainer>
                <InfoCard category='Count of all fruit' data={`${fruitCount} Fruit`} />
                <InfoCard category='value of fruit' data={`$${fruitValue}`} />
                <InfoCard category='# of Warehouses' data={`${warehouseCount} Warehouses`} />
            </InfoContainer>
        </StyledOverview>
    )
}

// Styled Components

const StyledOverview = styled.div`
    height: 100%;
    width: 100%;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20%;

`

const GraphContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;
    border: 2px solid red;
`