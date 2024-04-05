import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import headerlogo from '../images/logo.png'

export default function Header() {

    return (
        <StyledHeader>
            <Link to='/' ><StyledHeaderLogo src={headerlogo}/></Link>
            <StyledLink to='/' ><HeaderText>Fruit Warehouse Inventory</HeaderText></StyledLink>
        </StyledHeader>
    )
}

// Styled Components

const StyledHeader = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #0063DB;
    height: 5vh;
    padding: .5rem;
`

const StyledHeaderLogo = styled.img`
    height: 70px;
    margin-left: 20px;
`

const HeaderText = styled.span`
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`