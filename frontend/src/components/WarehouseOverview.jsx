import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import InfoCard from './InfoCard'
import GraphCard from './GraphCard'
import InventoryIssuesCard from './InventoryIssuesCard'

export default function WarehouseOverview(props) {
    const { combinedInventory, warehouseList } = props

    // Grab current warehouse id from the url
    let { warehouseId } = useParams()
    warehouseId = Number(warehouseId)


    let warehouseName
    let address
    let maxCapacity

    // Use warehouseId to get the warehouse name, address, and maxCapacity
    warehouseList.forEach(warehouse => {
        if(warehouse.warehouseId === warehouseId) {
            warehouseName = warehouse.warehouseName
            address = warehouse.address
            maxCapacity = warehouse.maxCapacity
        }
    });

    // Create a new array with only the items of the currently selected warehouse
    const currentWarehouseInventory = combinedInventory.filter((item) => item.warehouseId === warehouseId)

    let fruitCount = 0
    let fruitValue = 0

    if (combinedInventory.length > 0) {
        // Reduce function to sum up the count of all fruit in the inventory
        fruitCount = currentWarehouseInventory.reduce((accumulator, item) => {
            return accumulator + item.quantity
        }, 0)

        // Reduce function to sum up the value of all fruit in the inventory
        fruitValue = currentWarehouseInventory.reduce((accumulator, item) => {
            return accumulator + (item.quantity * item.price)
        }, 0)
    }

    // Data to pass to pie charts
    const valueGraphData = currentWarehouseInventory.map((item) => {
        return {
            id: item.inventoryId,
            value: item.price * item.quantity,
            label: item.fruitName,
            color: item.graphColor
        }
    })

    const quantityGraphData = currentWarehouseInventory.map((item) => {
        return {
            id: item.inventoryId,
            value: item.quantity,
            label: item.fruitName,
            color: item.graphColor
        }
    })

    return(
        <StyledOverview>
            <h1>{warehouseName}</h1>
            <div>{address}</div>
            <InfoContainer>
                <InfoCard category='Warehouse Capacity' data={`${fruitCount}/${maxCapacity} Fruit`} />
                {/*<InfoCard category='Count of Fruit' data={`${fruitCount} Fruit`} />*/}
                <InfoCard category='Value of Fruit' data={`$${fruitValue}`} />
                <InventoryIssuesCard inventory={currentWarehouseInventory}/>
            </InfoContainer>
            <GraphContainer>
                <GraphCard title='product value by fruit' graphData={valueGraphData}/>
                <GraphCard title='product quantity by fruit' graphData={quantityGraphData}/>
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