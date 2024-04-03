import React from 'react';
import styled from 'styled-components';

export default function MainContent(props) {
    return (
        <Container>
            <ContentColumn>
                <StyledMainContent>
                    {props.children}
                </StyledMainContent>

            </ContentColumn>
        </Container>
    );
}

// A flex container to keep the content column centered
const Container = styled.div`
    display: flex;
    justify-content: center;
    border: 5px solid black;
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
    border: 15px solid blue;
`

// Where the main content will be displayed
const StyledMainContent = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    border: 2px solid green;
`