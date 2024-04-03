import React from 'react'
import { useState, useEffect } from 'react'
import {
    Routes, Route, Link, useNavigate
} from 'react-router-dom'
import styled from 'styled-components'

// Import services
import fruitService from './services/fruits'
import inventoryService from './services/inventory'
import warehouseService from './services/warehouses'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import FruitInformation from './components/FruitInformation'
import WarehouseInventory from './components/WarehouseInventory'
import AllWarehouseOverview from './components/AllWarehouseOverview'
import WarehouseOverview from './components/WarehouseOverview'

export default function App() {

/*
    //DUMMY DATA
    const warehouseId = 1;

    const testFruit = {
        fruitId: 10,
        fruitName: "testfruit2",
        price: 5.0,
        lowStock: 50,
        highStock: 500,
        graphColor: "green"
    }

    const jsonTestFruit = JSON.stringify(testFruit)

    useEffect(() => {

        warehouseService.getWarehouseById(2)
            .then((fruit) => {
                console.log('fruitService create() ', fruit)
            })

    }, [])*/

    return (
        <>
            <Header />
            <div>hello</div>
            <MainContent>

                <Sidebar>
                    hello world sidebar
                </Sidebar>
                <RouteContainer>
                    <Routes>
                        <Route path='/' element={<AllWarehouseOverview />} />
                        <Route path='/fruit-information' element={<FruitInformation />} />
                        <Route path='/warehouse-overview/:warehouseId' element={<WarehouseOverview />} />
                        <Route path='/warehouse-inventory/:warehouseId' element={<WarehouseInventory />} />
                        
                    </Routes>
                </RouteContainer>
            </MainContent >
            <Footer />
        </>
    )
}

// Styled Components

const RouteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    min-height: 95dvh;
    max-height: 95dvh;
    border: 3px solid brown;
    flex: 1;
`