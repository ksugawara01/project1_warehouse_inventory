import React from 'react'
import {
        Routes, Route, Link, useNavigate
    } from 'react-router-dom'
import styled from 'styled-components'
import headerlogo from '../images/header-logo.png'

export default function Header() {

    return (
        <StyledHeader>
            <Link to='/' ><StyledHeaderLogo src={ headerlogo } /></Link>
        </StyledHeader>
    );
}

// Styled Components

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #0063DB;
    height: 2rem;
    padding: .5rem;
`

const StyledHeaderLogo = styled.img`
    height: 100%;
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