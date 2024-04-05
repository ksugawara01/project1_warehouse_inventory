import React from 'react'
import styled from 'styled-components'

// mui charts
import { PieChart } from '@mui/x-charts/PieChart'

export default function GraphCard(props) {
    const { title, graphData } = props;

    return(
        <StyledGraphCard>
            <StyledTitle>{title}</StyledTitle>
            <PieChart
                series={[
                    {
                    data: graphData,
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 3,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 150,
                    cy: 100,
                    },
                ]}
                width={400}
                height={215}
            />
        </StyledGraphCard>
    )
}

// Styled Components

const StyledGraphCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 45%;
`

const StyledTitle = styled.div`
    font-weight: bold;
    margin-right: 85px;
`