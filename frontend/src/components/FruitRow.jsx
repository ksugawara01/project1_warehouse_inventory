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
            <td>{fruitName}</td>
            <td>${price}</td>
            <td>{lowStock}</td>
            <td>{highStock}</td>
            <td>{graphColor}</td>
            <td><EditFruitModal fruit={fruit} fruitsList={fruitsList} setFruitsList={setFruitsList}></EditFruitModal></td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )

}