import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

// radix ui component
import * as ScrollArea from '@radix-ui/react-scroll-area'
import '../radix-styles/table-scroll-area.css'

import InventoryRow from './InventoryRow'
import TableContainer from './TableContainer'

export default function WarehouseInventory(props) {
    //const { warehouseId, warehouseName } = props;

    //dummy data
    const inventory = [
        {
            inventoryId: 1,
            quantity: 123,
            fruitId: 1,
            warehouseId: 1,
            fruitName: 'apple',
            price: 1.25
        },
        {
            inventoryId: 2,
            quantity: 456,
            fruitId: 2,
            warehouseId: 1,
            fruitName: 'banana',
            price: 1.50
        }
    ]

    //dummy data
    const warehouse = {
        warehouseId: 1,
        warehouseName: 'Fairborn Fruit Warehouse',
        address: '123 first street, Fairborn, OH, 45324'
    }

    const warehouseId = useParams().warehouseId;

    return (
        <StyledWarehouseInventory>
            <h1>{warehouse.warehouseName}</h1>
            <div>{warehouse.address}</div>
            <h2>Inventory</h2>
            <button>Add fruit to warehouse</button>
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
                                {inventory.map(item => {
                                    return <InventoryRow key={item.inventoryId} fruitName={item.fruitName} quantity={item.quantity} totalValue={item.quantity * item.price} />
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
    border: 10px solid red;
    height: 100%;
`