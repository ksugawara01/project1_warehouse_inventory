import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

// radix ui component
import * as ScrollArea from '@radix-ui/react-scroll-area'
import '../radix-styles/table-scroll-area.css';

import FruitRow from './FruitRow'
import TableContainer from './TableContainer'

export default function FruitInformation() {

    const dummyData = [
        {
            fruitId: 1,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 2,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 3,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        },
        {
            fruitId: 4,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 5,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 6,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        },
        {
            fruitId: 7,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 8,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 9,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        },
        {
            fruitId: 10,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 11,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 12,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        },
        {
            fruitId: 13,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 14,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 15,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        },
        {
            fruitId: 16,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 17,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 18,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        },
        {
            fruitId: 19,
            fruitName: 'apple',
            price: 3.14,
            lowStock: 200,
            highStock: 2000,
            graphColor: 'red'
        },
        {
            fruitId: 20,
            fruitName: 'banana',
            price: 1.23,
            lowStock: 300,
            highStock: 2400,
            graphColor: 'yellow'
        },
        {
            fruitId: 21,
            fruitName: 'grapes',
            price: 4.10,
            lowStock: 500,
            highStock: 1200,
            graphColor: 'purple'
        }
    ];

    const [fruits, setFruits] = useState(dummyData);

    // Get fruit information on load
    useEffect(() => {
        /*
        if (loggedGroomer !== null) {
            appointmentService.getGroomerAppointments(loggedGroomer)
                .then(appointments => {
                    setAppointments(appointments)
                })
        } else {
        // If user is not logged in redirect to the login page
            navigate('/login')
        }
        */


    }, []);

    return (
        <StyledFruitInformation>
            <h1>Fruits</h1>
            <button>Add new fruit</button>
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
                                {fruits.map(fruit => {
                                    return <FruitRow key={fruit.fruitId} fruitName={fruit.fruitName} price={fruit.price} lowStock={fruit.lowStock} highStock={fruit.highStock} graphColor={fruit.graphColor} />
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