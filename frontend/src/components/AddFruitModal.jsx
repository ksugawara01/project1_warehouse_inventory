import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-overlays/Modal'

import fruitService from '../services/fruits'

export default function AddFruitModal(props) {
    const { fruitsList, setFruitsList } = props

    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState([]) 
    const [displayError, setDisplayError] = useState(false)

    // Form Data that will be sent to the back end
    const [formData, setFormData] = useState({
        fruitName: null,
        price: null,
        lowStock: null,
        highStock: null,
        graphColor: null
    })

    const renderBackdrop = (props) => <Backdrop {...props} />

    // colors that can be used for graph color
    const colors = [
        'aliceblue',
        'aqua',
        'black',
        'blue',
        'brown',
        'crimson',
        'fuchsia',
        'gray',
        'green',
        'lime',
        'maroon',
        'navy',
        'olive',
        'orange',
        'pink',
        'purple',
        'red',
        'silver',
        'teal',
        'yellow'
    ];

        // Updates the form data when the user changes an input
        const handleFormChange = (event) => {
            const { name, value } = event.target
            const newValue = value
            setFormData((prevState) => ({ ...prevState, [name]: newValue }))
        }

        // handles the submission of the form with client side input validation
        const handleSubmit = (event) => {
            event.preventDefault()
    
            // Check if the form warehouse name already exists in the list of warehouses
            const isDuplicateName = fruitsList.some(fruit => fruit.fruitName === formData.fruitName)

            // Check if the quantity is valid
            const isValidPrice = ((typeof(Number(formData.price)) === 'number') && Number(formData.price) > 0)
            // Check if the quantity is valid
            const isValidLS = ((typeof(Number(formData.lowStock)) === 'number') && Number(formData.lowStock) > 0)
            // Check if the quantity is valid
            const isValidHS = ((typeof(Number(formData.highStock)) === 'number') && Number(formData.highStock) > 0)
    
            console.log('isDuplicateName', isDuplicateName)
            const { fruitName, price, lowStock, highStock, graphColor } = formData
    
            // If all of these values are true(not null or false) then submit the data to the backend
            if ( fruitName && price && lowStock && highStock && graphColor && isValidPrice && isValidLS && isValidHS) {
    
                // Send post request to the backend to create the warehouse in the database
                fruitService.createFruit(formData)
                    .then((newFruit) => {
                        // append the newly created warehouse to the warehouseList
                        setFruitsList([
                            ...fruitsList,
                            newFruit
                        ]);
                        setFormData({
                            fruitName: null,
                            price: null,
                            lowStock: null,
                            highStock: null,
                            graphColor: null
                        })
                        setShow(false)
                    })
                    .catch((e) => {
                        console.log('e', e)
                    })
    
            } else {
                // Add all errors to the error message
                let updatedErrorMessage = []
                if (!fruitName) {
                    updatedErrorMessage.push('You must enter a Fruit Name.')
                } else if (isDuplicateName) {
                    updatedErrorMessage.push('A fruit with that name already exists.')
                }
                if (!price) {
                    updatedErrorMessage.push('You must enter a price.')
                } else if (!isValidPrice) {
                    updatedErrorMessage.push('Price must be a number greater than 0.')
                }
                if (!lowStock) {
                    updatedErrorMessage.push('You must enter a Low Stock Value.')
                } else if (!isValidLS) {
                    updatedErrorMessage.push('Low Stock Value must be a number greater than 0.')
                }
                if (!highStock) {
                    updatedErrorMessage.push('You must enter a High Stock Value.')
                } else if (!isValidHS) {
                    updatedErrorMessage.push('High Stock Value must be a number greater than 0.')
                }
                if (!graphColor) {
                    updatedErrorMessage.push('You must choose a graph color.')
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
                Add a Fruit
            </button>

            <StyledModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <form>
                    <h2>Create Fruit</h2>

                    <label >Fruit Name:</label><br/>
                    <input type='text' id='fruitName' name='fruitName' onChange={handleFormChange}></input><br/>

                    <label >price:</label><br/>
                    <input type='text' id='price' name='price' onChange={handleFormChange}></input><br/>

                    <label >Low Stock Value:</label><br/>
                    <input type='text' id='lowStock' name='lowStock' onChange={handleFormChange}></input><br/>

                    <label >High Stock Value:</label><br/>
                    <input type='text' id='highStock' name='highStock' onChange={handleFormChange}></input><br/>

                    <label >Graph Color:</label><br/>
                    <select id='graphColor' name='graphColor' defaultValue='' onChange={handleFormChange}>
                        {colors.map((color) => <option key={color} value={color} >{color}</option>)}
                    </select><br/>

                    {displayError ? errorMessage.map((message) => <ErrorMessage key={ message }>{ message }</ErrorMessage>) : null}

                    <button onClick={handleSubmit}>submit</button>
                </form>
            </StyledModal>
        </div>
    );
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