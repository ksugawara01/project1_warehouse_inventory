import React from 'react'
import styled from 'styled-components'

import fruitService from '../services/fruits'
import EditFruitModal from './EditFruitModal'

// Displays the information for one row in the Fruit Information table
export default function FruitRow(props) {
    const { fruit, fruitsList, setFruitsList } = props 
    const { fruitId, fruitName, price, lowStock, highStock, graphColor } = fruit

    // Event handler used to delete a fruit
    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this fruit?')
        if (confirmed) {
            const updatedFruitsList = fruitsList.filter((f) => f.fruitId !== fruitId)
            fruitService.deleteFruit(fruit)
                .then(
                    setFruitsList(updatedFruitsList)
                )
                .catch((e) => {
                    console.log('e', e)
                })
        }
    }

    return (
        <tr>
            <StyledTD>{fruitName}</StyledTD>
            <StyledTD>${price}</StyledTD>
            <StyledTD>{lowStock}</StyledTD>
            <StyledTD>{highStock}</StyledTD>
            <StyledTD>{graphColor}</StyledTD>
            <StyledTD><EditFruitModal fruit={fruit} fruitsList={fruitsList} setFruitsList={setFruitsList}></EditFruitModal></StyledTD>
            <StyledTD><StyledButton onClick={handleDelete}>Delete</StyledButton></StyledTD>
        </tr>
    )

}

// Styled Components

const StyledButton = styled.button`
    background-color: #8a0b0b;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 15px 20px;
    margin: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b81212;
        cursor: pointer;
    }
`

const StyledTD = styled.td`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-collapse: collapse;
`