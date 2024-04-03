import axios from 'axios'

const baseUrl = 'http://localhost:8080/inventory'

// Create a new items
const createItem = (newItem) => {
    const request = axios.post(baseUrl, newItem)
    return request.then(response => response.data)
}

// Return all items in inventory
const getInventory = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// Return all items in a specific warehouse
const getInventoryByWarehouseId = (id) => {
    const request = axios.get(`${baseUrl}/warehouse-inventory/${id}`)
    return request.then(response => response.data)
}

// Update an item
const updateItem = (item) => {
    const request = axios.put(baseUrl, item)
    return request.then(response => response.data)
}

// Delete item
const deleteItem = (item) => {
    const request = axios.delete(baseUrl, {data: item})
    return request.then(response => response.data)
}

export default { createItem, getInventory, getInventoryByWarehouseId, updateItem, deleteItem }