import React from 'react'
import styled from 'styled-components'

// mui charts
import { PieChart } from '@mui/x-charts/PieChart'

export default function GraphCard(props) {
    const { title, graphData } = props;

    return(
        <StyledGraphCard>
            <div>{title}</div>
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
                height={200}
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
    height: 75%;
    width: 40%;
    border: 2px solid red;
`