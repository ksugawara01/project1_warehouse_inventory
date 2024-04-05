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
            <td>{item.fruitName}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.price}</td>
            <td>
                <EditItemModal item={item}
                    inventory={inventory}
                    setInventory={setInventory}
                    fruitsList={fruitsList}
                    warehouseId={warehouseId}
                    warehouseList={warehouseList}
                    combinedInventory={combinedInventory}
                />
            </td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )

}