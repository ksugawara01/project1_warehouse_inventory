import React from 'react'
import styled from 'styled-components'

// mui charts
import { PieChart } from '@mui/x-charts/PieChart'

export default function GraphCard(props) {


    const dummyData = [
        { id: 0, value: 10, label: 'orange', color: 'orange' },
        { id: 1, value: 40, label: 'red' , color: 'red'},
        { id: 5, value: 20, label: 'purple', color: 'purple' },
    ];
    const { title, graphData } = props;
    return(
        <StyledGraphCard>
            <div>{title}</div>
            <PieChart
                series={[
                    {
                    data: dummyData,
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