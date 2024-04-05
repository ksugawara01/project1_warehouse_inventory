import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

// Services
import fruitService from '../services/fruits'

// radix ui component
import * as ScrollArea from '@radix-ui/react-scroll-area'
import '../radix-styles/table-scroll-area.css';

// Components
import FruitRow from './FruitRow'
import TableContainer from './TableContainer'
import AddFruitModal from './AddFruitModal'

export default function FruitInformation(props) {
    const {fruitsList, setFruitsList} = props;
      
    return (
        <StyledFruitInformation>
            <h1>Fruits</h1>
            <AddFruitModal fruitsList={fruitsList} setFruitsList={setFruitsList}/>
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
                                    <th>Name</th>
                                    <th>Price (per unit)</th>
                                    <th>Low Stock Quantity</th>
                                    <th>High Stock Quantity</th>
                                    <th>Graph Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fruitsList.map(fruit => {
                                    return <FruitRow key={fruit.fruitId} fruit={fruit} fruitsList={fruitsList} setFruitsList={setFruitsList} />
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

        </StyledFruitInformation>
    );
}

// Styled Components

const StyledFruitInformation = styled.div`
    border: 10px solid red;
    height: 100%;
`

const AddFruitButton = styled.button`
    background-color: #0063DB;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    margin: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0082C8;
        cursor: pointer;
    }
`

const FruitCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid grey;
`