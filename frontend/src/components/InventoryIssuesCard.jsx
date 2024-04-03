import React from 'react'
import styled from 'styled-components'

// radix ui component
import * as ScrollArea from '@radix-ui/react-scroll-area'
import '../radix-styles/table-scroll-area.css';

export default function InventoryIssuesCard(props) {
    //const { inventory } = props;

    // dummy data
    const inventory = [
        {
            inventoryId: 1,
            fruitName: 'apple',
            quantity: 350,
            lowStockValue: 500,
            highStockValue: 5000
        },
        {
            inventoryId: 2,
            fruitName: 'banana',
            quantity: 6000,
            lowStockValue: 500,
            highStockValue: 5000
        },        
        {
            inventoryId: 3,
            fruitName: 'orange',
            quantity: 0,
            lowStockValue: 500,
            highStockValue: 5000
        },        
        {
            inventoryId: 4,
            fruitName: 'pear',
            quantity: 700,
            lowStockValue: 500,
            highStockValue: 5000
        },
        {
            inventoryId: 5,
            fruitName: 'peach',
            quantity: 3500,
            lowStockValue: 500,
            highStockValue: 5000
        },        
        {
            inventoryId: 6,
            fruitName: 'watermelon',
            quantity: 200,
            lowStockValue: 500,
            highStockValue: 5000
        }
    ]
    return(
        <StyledInventoryIssuesCard>
            <div>Stocking Issues:</div>
            <ScrollArea.Root className="ScrollAreaRoot" type='always'>
                <ScrollArea.Viewport className="ScrollAreaViewport">
                    {inventory.map(item => {
                        if (item.quantity === 0) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}s are out of stock</InventoryIssue>
                        } else if (item.quantity <= item.lowStockValue) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}s are low on stock</InventoryIssue>
                        } else if (item.quantity >= item.highStockValue) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}s are overstocked</InventoryIssue>
                        }

                        return;
                    })}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </StyledInventoryIssuesCard>
    )
}

// Styled Components

const StyledInventoryIssuesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 75%;
    width: 30%;
    border: 2px solid red;
`

const InventoryIssue = styled.div`
    font-size: 40px;
`