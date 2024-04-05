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
                    {inventory.map(item => {
                        if (item.quantity === 0) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}: out of stock</InventoryIssue>
                        } else if (item.quantity <= item.lowStock) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}: low on stock</InventoryIssue>
                        } else if (item.quantity >= item.highStock) {
                            return <InventoryIssue key={item.inventoryId} >{item.fruitName}: overstocked</InventoryIssue>
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
    box-shadow: 0 2px 10px gray;
`

const InventoryIssue = styled.div`
    font-size: 16px;
    margin: 4px;
    margin-left: 10px;
`