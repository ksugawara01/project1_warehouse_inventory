import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-overlays/Modal'

import inventoryService from'../services/inventory'

export default function EditItemModal(props) {
    const {item, inventory, setInventory, fruitsList, warehouseId, combinedInventory, warehouseList} = props

    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState([]) 
    const [displayError, setDisplayError] = useState(false)

    // Form Data that will be sent to the back end
    const [formData, setFormData] = useState({
        inventoryId: item.inventoryId,
        quantity: item.quantity,
        fruitId: item.fruitId,
        warehouseId: warehouseId
    })

    // Create a new array with only the items of the currently selected warehouse
    const currentWarehouseInventory = combinedInventory.filter((item) => item.warehouseId === warehouseId)

    const initalQuantity = item.quantity
    let fruitCount = 0

    if (combinedInventory.length > 0) {
        // Reduce function to sum up the count of all fruit in the inventory
        fruitCount = currentWarehouseInventory.reduce((accumulator, item) => {
            return accumulator + item.quantity
        }, 0)
    }

    let maxCapacity

    // Use warehouseId to get the warehouse maxCapacity
    warehouseList.forEach(warehouse => {
        if(warehouse.warehouseId === warehouseId) {
            maxCapacity = warehouse.maxCapacity
        }
    });
 

    const renderBackdrop = (props) => <Backdrop {...props} />

    // Updates the form data when the user changes an input
    const handleFormChange = (event) => {
        const { name, value } = event.target
        const newValue = value
        setFormData((prevState) => ({ ...prevState, [name]: newValue }))
    }

    // handles the submission of the form with client side input validation
    const handleSubmit = (event) => {
        event.preventDefault()

        // Check if the quantity is valid
        const isValidQuantity = ((typeof(Number(formData.quantity)) === 'number') && Number(formData.quantity) > 0)
        // Check if the quantity would put the warehouse over capacity
        const hasCapacity = ((Number(formData.quantity) + fruitCount - initalQuantity) <= maxCapacity)

        // If all of these values are true(not null or false) then submit the data to the backend
        if ( formData.quantity && formData.fruitId && warehouseId && isValidQuantity && hasCapacity) {

            // Send post request to the backend to create the item in the database
            inventoryService.updateItem(formData)
                .then((newItem) => {
                    // Create a new inventory by replacing the old item with the new item
                    const updatedInventory = inventory.map(item => (item.inventoryId === newItem.inventoryId ? newItem : item))
                    setInventory(updatedInventory);
                    setShow(false)
                })
                .catch((e) => {
                    console.log('e', e)
                })

        } else {
            // Add all errors to the error message
            let updatedErrorMessage = []
            if (!formData.fruitId) {
                updatedErrorMessage.push('You must enter a fruit.')
            }
            if (!formData.quantity) {
                updatedErrorMessage.push('You must enter a quantity.')
            } else if (!isValidQuantity) {
                updatedErrorMessage.push('quantity must be a number greater than 0')
            }
            if (!hasCapacity) {
                updatedErrorMessage.push('Not enough capacity in the warehouse.')
            }
            setErrorMessage(updatedErrorMessage)
            setDisplayError(true)
        }
    }

    return (
        <div className="modal-example">
            <button
                type="button"
                className="btn btn-primary mb-4"
                onClick={() => setShow(true)}
            >
                Edit
            </button>

            <StyledModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <form>
                    <h2>Edit Inventory Item</h2>
                    <label >Fruit:</label><br/>
                    <select id='fruitId' name='fruitId' defaultValue={formData.fruitId} onChange={handleFormChange}>
                        {fruitsList.map((fruit) => <option key={fruit.fruitId} value={fruit.fruitId} >{fruit.fruitName}</option>)}
                     </select><br/>

                    <label >Quantity:</label><br/>
                    <input type='text' id='quantity' name='quantity' value={formData.quantity} onChange={handleFormChange} ></input><br/>
                    
                    {displayError ? errorMessage.map((message) => <ErrorMessage key={ message }>{ message }</ErrorMessage>) : null}

                    <button onClick={handleSubmit}>submit</button>
                </form>
            </StyledModal>
        </div>
    )
}

// Styled Components

const StyledModal = styled(Modal)`
    position: fixed;
    width: 400px;
    height: 600px;
    z-index: 1040;
    top: 25%;
    left: 50%;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
`;

const Backdrop = styled("div")`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.6;
`;

const ErrorMessage = styled.div`
    color: red;
`