import React from 'react'
import {
        Routes, Route, Link, useNavigate
    } from 'react-router-dom'
import styled from 'styled-components'
import headerlogo from '../images/logo.png'

export default function Header() {

    return (
        <StyledHeader>
            <Link to='/' ><StyledHeaderLogo src={headerlogo}/></Link>
            <Link to='/' ><HeaderText>Fruit Warehouse Inventory</HeaderText></Link>
        </StyledHeader>
    )
}

// Styled Components

const StyledHeader = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #0063DB;
    height: 3rem;
    padding: .5rem;
`

const StyledHeaderLogo = styled.img`
    height: 70px;
    margin-left: 20px;
`

const HeaderText = styled.span`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
`

const StyledLink = styled(Link)`
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 5px;
    margin-right: 10px;
    &:hover {
        color: lightgrey;
        cursor: pointer;
  }
`