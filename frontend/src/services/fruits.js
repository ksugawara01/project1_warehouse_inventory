import axios from 'axios'

const baseUrl = 'http://localhost:8080/fruits'

// Create a new fruit
const createFruit = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// Return all fruits
const getAllFruits = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// Update a fruit
const updateFruit = (fruit) => {
    const request = axios.put(baseUrl, fruit)
    return request.then(response => response.data)
}

// Delete a fruit
const deleteFruit = (fruit) => {
    const request = axios.delete(baseUrl, {data: fruit})
    return request.then(response => response.data)
}

export default { createFruit, getAllFruits, updateFruit, deleteFruit }