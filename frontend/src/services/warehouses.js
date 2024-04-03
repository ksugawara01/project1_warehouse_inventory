import axios from 'axios'

const baseUrl = 'http://localhost:8080/warehouses'

// Create a new warehouse
const createWarehouse = (newWarehouse) => {
    const request = axios.post(baseUrl, newWarehouse)
    return request.then(response => response.data)
}

// Return all items in inventory
const getAllWarehouses = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// Return all items in a specific warehouse
const getWarehouseById = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

// Update a warehouse
const updateWarehouse = (warehouse) => {
    const request = axios.put(baseUrl, warehouse)
    return request.then(response => response.data)
}

// Delete a warehouse
const deleteWarehouse = (warehouse) => {
    const request = axios.delete(baseUrl, {data: warehouse})
    return request.then(response => response.data)
}

export default { createWarehouse, getAllWarehouses, getWarehouseById, updateWarehouse, deleteWarehouse }