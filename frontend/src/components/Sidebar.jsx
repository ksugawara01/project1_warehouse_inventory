import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Radix UI
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Accordion from '@radix-ui/react-accordion'
import '../radix-styles/sidebar-scroll-area.css'
import '../radix-styles/sidebar-accordion.css'
import classNames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export default function Sidebar() {

    //const [warehouseList, setWarehouseList] = useState([]);

    // dummy data
    const warehouseList = [
        {
            warehouseId: 1,
            warehouseName: 'Mechanicsburg Fruit Warehouse',
            warehouseAddress: '123 street'
        },
        {
            warehouseId: 2,
            warehouseName: 'Fairborn Fruit Warehouse',
            warehouseAddress: '456 something street, Fairborn, OH, 45324'
        },
        {
            warehouseId: 3,
            warehouseName: 'Lake Mary Fruit Warehouse',
            warehouseAddress: 'lake mary address'
        },
        {
            warehouseId: 4,
            warehouseName: 'Gilbert Fruit Warehouse',
            warehouseAddress: 'an arizona address'
        }
    ]
    return(
        <StyledSidebar>
            <ScrollArea.Root className="ScrollAreaRoot">
                <ScrollArea.Viewport className="ScrollAreaViewport">

                    <Link to='/'> Overview </Link>
                    <Link to='/fruit-information'> Fruit information </Link>
                    <div>Warehouse List <button>add new warehouse</button></div>
                    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>

                    {warehouseList.map( warehouse => {
                        return <Accordion.Item className="AccordionItem" value={warehouse.warehouseId}>
                            <AccordionTrigger>{warehouse.warehouseName}</AccordionTrigger>
                            <AccordionContent>
                                <AccordionContent><Link to={`/warehouse-overview/${warehouse.warehouseId}`}> Overview </Link></AccordionContent>
                                <AccordionContent><Link to={`/warehouse-inventory/${warehouse.warehouseId}`}> Inventory </Link></AccordionContent>
                            </AccordionContent>
                        </Accordion.Item>
                    })}
                
                </Accordion.Root>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
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
    border: 2px solid orange;
    width: 25%;
    flex: 1;
`