import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

// radix ui component
import * as ScrollArea from '@radix-ui/react-scroll-area'
import '../radix-styles/table-scroll-area.css'

import InventoryRow from './InventoryRow'
import TableContainer from './TableContainer'
import AddItemModal from './AddItemModal'

export default function WarehouseInventory(props) {
    const { inventory, setInventory, combinedInventory, warehouseList, fruitsList } = props

    let { warehouseId } = useParams()
    warehouseId = Number(warehouseId)

    let warehouseName;
    let address;

    // Use warehouseId to get the warehouse name and address
    warehouseList.forEach(warehouse => {
        if(warehouse.warehouseId === warehouseId) {
            warehouseName = warehouse.warehouseName
            address = warehouse.address
        }
    });

    // Create a new array with only the items of the currently selected warehouse
    const currentWarehouseInventory = combinedInventory.filter((item) => item.warehouseId === warehouseId)

    return (
        <StyledWarehouseInventory>
            <h1>{warehouseName}</h1>
            <div>{address}</div>
            <h2>Inventory</h2>
            <AddItemModal
                warehouseId={warehouseId}
                inventory={inventory}
                setInventory={setInventory}
                fruitsList={fruitsList}
                warehouseList={warehouseList}
                combinedInventory={combinedInventory}
            />
            <ScrollArea.Root className="ScrollAreaRoot">
                <ScrollArea.Viewport className="ScrollAreaViewport">
                    {/*
                        <div style={{ padding: '15px 20px' }}>
                        <div className="Text">Tags</div>
                        {fruits.map((fruit) => (
                        <div key={fruit.fruitId}>this is a fruit row</div>
                        ))}
                        </div>
                    */}
                    <TableContainer>
                        <table>
                            <thead>
                                <tr>
                                    <th>Fruit</th>
                                    <th>Quantity</th>
                                    <th>Total Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentWarehouseInventory.map(item => {
                                    return <InventoryRow
                                        key={item.inventoryId}
                                        item={item}
                                        inventory={inventory}
                                        setInventory={setInventory}
                                        fruitsList={fruitsList}
                                        warehouseId={warehouseId}
                                        warehouseList={warehouseList}
                                        combinedInventory={combinedInventory}
                                    />
                                })}
                            </tbody>
                        </table>
                    </TableContainer>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </StyledWarehouseInventory>
    )
}

// Styled Components

const StyledWarehouseInventory = styled.div`
    height: 100%;
`