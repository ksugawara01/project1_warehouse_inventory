import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-overlays/Modal'

import warehouseService from'../services/warehouses'
import StyledForm from './StyledForm'

export default function AddWarehouseModal(props) {
    const {warehouseList, setWarehouseList} = props

    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState([]) 
    const [displayError, setDisplayError] = useState(false)

    // Form Data that will be sent to the back end
    const [formData, setFormData] = useState({
        warehouseName: null,
        address: null,
        maxCapacity: null
    })

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


        // Check if the form warehouse name already exists in the list of warehouses
        const isDuplicateName = warehouseList.some(warehouse => warehouse.warehouseName === formData.warehouseName)
        // Check if the Max Capacity is valid
        const isValidMaxCapacity = ((typeof(Number(formData.maxCapacity)) === 'number') && Number(formData.maxCapacity) > 0)


        // If all of these values are true(not null or false) then submit the data to the backend
        if ( formData.warehouseName && formData.address && formData.maxCapacity && !isDuplicateName && isValidMaxCapacity) {

            // Send post request to the backend to create the warehouse in the database
            warehouseService.createWarehouse(formData)
                .then((newWarehouse) => {
                    // append the newly created warehouse to the warehouseList
                    setWarehouseList([
                        ...warehouseList,
                        newWarehouse
                    ])
                    setFormData({
                        warehouseName: null,
                        address: null
                    })
                    setShow(false)
                })
                .catch((e) => {
                    console.log('e', e)
                })

        } else {
            // Add all errors to the error message
            let updatedErrorMessage = []
            if (!formData.warehouseName) {
                updatedErrorMessage.push('You must enter a Warehouse Name.')
            } else if (isDuplicateName) {
                updatedErrorMessage.push('Warehouse with that name already exists.')
            }
            if (!formData.address) {
                updatedErrorMessage.push('You must enter an address.')
            }
            if (!formData.maxCapacity) {
                updatedErrorMessage.push('You must enter a Max Capacity.')
            } else if (!isValidMaxCapacity) {
                updatedErrorMessage.push('Max Capacity must be a number greater than 0.')
            }
            setErrorMessage(updatedErrorMessage)
            setDisplayError(true)
        }
    }

    return (
        <div className="modal-example">
            <SmallButton
                type="button"
                className="btn btn-primary mb-4"
                onClick={() => setShow(true)}
            >
                Add Warehouse
            </SmallButton>

            <StyledModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <StyledForm>
                    <h1>Create Warehouse</h1>

                    <label >Warehouse Name:</label><br/>
                    <input type='text' id='warehouseName' name='warehouseName' onChange={handleFormChange} ></input><br/>

                    <label >Warehouse Address:</label><br/>
                    <input type='text' id='address' name='address' onChange={handleFormChange} ></input><br/>

                    <label >Max Capacity:</label><br/>
                    <input type='text' id='maxCapacity' name='maxCapacity' onChange={handleFormChange} ></input><br/>
                    
                    {displayError ? errorMessage.map((message) => <ErrorMessage key={ message }>{ message }</ErrorMessage>) : null}

                    <StyledButton onClick={handleSubmit}>submit</StyledButton>
                </StyledForm>
            </StyledModal>
        </div>
    )
}

// Styled Components

const StyledModal = styled(Modal)`
    position: fixed;
    width: 400px;
    height: 450px;
    z-index: 1040;
    top: 25%;
    left: 40%;
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

const StyledButton = styled.button`
    background-color: #0063DB;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    margin: 5px;
    margin-left: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0082C8;
        cursor: pointer;
    }
`

const SmallButton = styled.button`
    background-color: #0063DB;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 8px 17px;
    margin: 5px;
    margin-left: 10px;
    margin-top: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0082C8;
        cursor: pointer;
    }
`

const ErrorMessage = styled.div`
    color: red;
`