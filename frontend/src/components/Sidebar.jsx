import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Services
import warehouseService from '../services/warehouses'

// Components
import AddWarehouseModal from './AddWarehouseModal'

// Radix UI
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Accordion from '@radix-ui/react-accordion'
import '../radix-styles/sidebar-scroll-area.css'
import '../radix-styles/sidebar-accordion.css'
import classNames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import EditWarehouseModal from './EditWarehouseModal'

export default function Sidebar(props) {
    const { warehouseList, setWarehouseList } = props

    // Event handler used to delete a warehouse
    const handleDelete = (warehouse) => () => {
        const confirmed = window.confirm('Are you sure you want to delete this item?')
        if (confirmed) {
            const updatedWarehouseList = warehouseList.filter((w) => w.warehouseId !== warehouse.warehouseId)
            warehouseService.deleteWarehouse(warehouse)
                .then(
                    setWarehouseList(updatedWarehouseList)
                )
                .catch((e) => {
                    console.log('e', e)
                })
        }
    }

    return(
        <StyledSidebar>
            <ScrollArea.Root className="ScrollAreaRootSA">
                <ScrollArea.Viewport className="ScrollAreaViewportSA">
                    
                    <StyledDiv>
                        <StyledLink to='/'>Overview</StyledLink>
                        <StyledLink to='/fruit-information'> Fruit Types </StyledLink>
                    </StyledDiv>
                    
                        <AddWarehouseModal warehouseList={warehouseList} setWarehouseList={setWarehouseList}></AddWarehouseModal>
                        
                   
                    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>

                    {warehouseList.map( warehouse => {
                        return <Accordion.Item key={warehouse.warehouseId} className="AccordionItem" value={warehouse.warehouseId}>
                            <AccordionTrigger>{warehouse.warehouseName}</AccordionTrigger>
                            <AccordionContent>
                                <AccordionContent><StyledAccordionLink to={`/warehouse-overview/${warehouse.warehouseId}`}> Overview </StyledAccordionLink></AccordionContent>
                                <AccordionContent><StyledAccordionLink to={`/warehouse-inventory/${warehouse.warehouseId}`}> Inventory </StyledAccordionLink></AccordionContent>
                                <AccordionContent><EditWarehouseModal warehouse={warehouse} warehouseList={warehouseList} setWarehouseList={setWarehouseList}/></AccordionContent>
                                <AccordionContent><button onClick={handleDelete(warehouse)}>Delete Warehouse</button></AccordionContent>
                            </AccordionContent>
                        </Accordion.Item>
                    })}
                
                </Accordion.Root>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbarSA" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumbSA" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbarSA" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumbSA" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCornerSA" />
            </ScrollArea.Root>
        </StyledSidebar>
    );
}

// Radix ui

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  ));
  
  const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ));

// Styled Components

const StyledSidebar = styled.div`
    width: 300px;
`

const StyledLink = styled(Link)`
    margin: 0px;
    padding: 10px;
    text-decoration: none;
    font-size: 36px;
    font-weight: bold;
    color: black;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #66afd6;
        cursor: pointer;
    }
`

  const StyledAccordionLink = styled(Link)`

        text-decoration: none;

        color: black;
        &:hover {
            color: grey;
            cursor: pointer;
        }
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`