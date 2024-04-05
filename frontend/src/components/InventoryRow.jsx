import React from 'react'
import styled from 'styled-components'

import inventoryService from '../services/inventory'
import EditItemModal from './EditItemModal'

// Displays the information for one row in the inventory tables
export default function InventoryRow(props) {
    const { item, inventory, setInventory, fruitsList, warehouseId, warehouseList, combinedInventory } = props

    // Event handler used to delete an item
    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this item?')
        if (confirmed) {
            const updatedInventory = inventory.filter((i) => i.inventoryId !== item.inventoryId)
            inventoryService.deleteItem(item)
                .then(
                    setInventory(updatedInventory)
                )
                .catch((e) => {
                    console.log('e', e)
                })
        }
    }
    return (
        <tr>
            <StyledTD >{item.fruitName}</StyledTD>
            <StyledTD >{item.quantity}</StyledTD>
            <StyledTD >${item.quantity * item.price}</StyledTD>
            <StyledTD >
                <EditItemModal item={item}
                    inventory={inventory}
                    setInventory={setInventory}
                    fruitsList={fruitsList}
                    warehouseId={warehouseId}
                    warehouseList={warehouseList}
                    combinedInventory={combinedInventory}
                />
            </StyledTD>
            <StyledTD ><StyledButton onClick={handleDelete}>Delete</StyledButton></StyledTD>
        </tr>
    )

}

// Styled Components

const StyledButton = styled.button`
    background-color: #8a0b0b;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 15px 20px;
    margin: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b81212;
        cursor: pointer;
    }
`

const StyledTD = styled.td`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-collapse: collapse;
`