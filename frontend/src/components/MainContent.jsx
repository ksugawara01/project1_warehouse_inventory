import React from 'react'
import styled from 'styled-components'

export default function MainContent(props) {
    return (
        <Container>
            <ContentColumn>
                <StyledMainContent>
                    {props.children}
                </StyledMainContent>

            </ContentColumn>
        </Container>
    )
}

// A flex container to keep the content column centered
const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: lightgrey;
`

// A column with a min and max width for the website's main content
const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 75rem;
    min-width: 20rem;
    min-height: 20rem;
    height: 100%;
    width: 100%;
`

// Where the main content will be displayed
const StyledMainContent = styled.div`
    background-color: white;
    display: flex;
    flex: 3;
    width: 100%;
`