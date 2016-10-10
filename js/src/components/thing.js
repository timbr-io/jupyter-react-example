import React from 'react'
import { Chart } from 'react-d3-core';
import { LineChart } from 'react-d3-basic';

export default function Thing( props ) {
  const defaultMargins = {left: 100, right: 100, top: 50, bottom: 50};

  const chartSeries = [
    {
      field: props.field || 'sample',
      name: 'Example',
      color: '#ff7f0e'
    }
  ]

  x = function(d) {
    return d.index
  }

  return (
    <Chart
      title={ props.title || 'A chart thing' }
      width={props.width || 500 }
      height={props.height || 200 }
      margins= {props.margins || defaultMargins}
      >
      <LineChart
        margins= {props.margins || defaultMargins}
        title={props.title}
        data={props.data}
        width={props.width}
        height={props.height}
        chartSeries={chartSeries}
        x={x}
      />
    </Chart>
  )
}
