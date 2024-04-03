import React from 'react'
import styled from 'styled-components'

export default function InventoryRow(props) {
    const { fruitName, quantity, totalValue } = props;

    return (
        <tr>
            <td>{fruitName}</td>
            <td>{quantity}</td>
            <td>${totalValue}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )

}