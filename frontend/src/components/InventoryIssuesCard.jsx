import React from 'react'
import styled from 'styled-components'

// radix ui component
import * as ScrollArea from '@radix-ui/react-scroll-area'
import '../radix-styles/table-scroll-area.css';

// Displays issues related to inventory stock
export default function InventoryIssuesCard(props) {
    const { inventory } = props

    
    return(
        <StyledInventoryIssuesCard>
            <div>Stocking Issues:</div>
            <ScrollArea.Root className="ScrollAreaRoot">
                <ScrollArea.Viewport className="ScrollAreaViewport">
                    <div>{inventory.map(item => {
                        if (item.quantity === 0) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}s are out of stock</InventoryIssue>
                        } else if (item.quantity <= item.lowStockValue) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}s are low on stock</InventoryIssue>
                        } else if (item.quantity >= item.highStockValue) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}s are overstocked</InventoryIssue>
                        }

                        return;
                    })}</div>
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