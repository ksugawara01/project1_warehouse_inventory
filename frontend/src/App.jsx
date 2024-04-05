import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

// Import services
import fruitService from './services/fruits'
import inventoryService from './services/inventory'
import warehouseService from './services/warehouses'

// Import components
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import FruitInformation from './components/FruitInformation'
import WarehouseInventory from './components/WarehouseInventory'
import AllWarehouseOverview from './components/AllWarehouseOverview'
import WarehouseOverview from './components/WarehouseOverview'

export default function App() {

    // initialize state
    const [warehouseList, setWarehouseList] = useState([])
    const [inventory, setInventory] = useState([])
    const [combinedInventory, setCombinedInventory] = useState([])
    const [fruitsList, setFruitsList] = useState([])

    // Execute on load to set initial state
    useEffect(() => {
        warehouseService.getAllWarehouses()
            .then((warehouses) => {
                setWarehouseList(warehouses)
            });

        fruitService.getAllFruits()
            .then((fruits) => {
                setFruitsList(fruits)

            });

        inventoryService.getInventory()
            .then((items) => {
                setInventory(items)
                
            });
    }, [])

    // Update combinedInventory
    useEffect(() => {
        const fruitNameMap = new Map()
        const fruitPriceMap = new Map()
        const graphColorMap = new Map()
        const warehouseNameMap = new Map()

        fruitsList.forEach(fruit => {
            fruitNameMap.set(fruit.fruitId, fruit.fruitName)
        })

        fruitsList.forEach(fruit => {
            fruitPriceMap.set(fruit.fruitId, fruit.price)
        })

        fruitsList.forEach(fruit => {
            graphColorMap.set(fruit.fruitId, fruit.graphColor)
        })

        warehouseList.forEach(warehouse => {
            warehouseNameMap.set(warehouse.warehouseId, warehouse.warehouseName)
        })

        console.log(fruitNameMap)

        const newCombinedInventory = inventory.map(item => ({
                ...item,
                fruitName: fruitNameMap.get(item.fruitId),
                price: fruitPriceMap.get(item.fruitId),
                graphColor: graphColorMap.get(item.fruitId),
                warehouseName: warehouseNameMap.get(item.warehouseId)
        }))

        setCombinedInventory(newCombinedInventory);
    }, [inventory, fruitsList])


    return (
        <>
            <Header />
            <MainContent>

                <Sidebar warehouseList={warehouseList} setWarehouseList={setWarehouseList} />
                <RouteContainer>
                    <Routes>
                        <Route path='/' element={<AllWarehouseOverview warehouseCount={warehouseList.length} combinedInventory={combinedInventory} />} />
                        <Route path='/fruit-information' element={<FruitInformation fruitsList={fruitsList} setFruitsList={setFruitsList}/>} />
                        <Route path='/warehouse-overview/:warehouseId' element={<WarehouseOverview combinedInventory={combinedInventory} warehouseList={warehouseList} />} />
                        <Route path='/warehouse-inventory/:warehouseId' element={<WarehouseInventory inventory={inventory} setInventory={setInventory} combinedInventory={combinedInventory} fruitsList={fruitsList} warehouseList={warehouseList} />} />
                        
                    </Routes>
                </RouteContainer>
            </MainContent >
        </>
    )
}

// Styled Components

const RouteContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95dvh;
    max-height: 95dvh;
    width: 75%;
`