import React from 'react'
import styled from 'styled-components'

export default function FruitRow(props) {
    const { fruitName, price, lowStock, highStock, graphColor } = props;

    return (
        <tr>
            <td>{fruitName}</td>
            <td>${price}</td>
            <td>{lowStock}</td>
            <td>{highStock}</td>
            <td>{graphColor}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )

}