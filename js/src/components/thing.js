import React from 'react'
import { AreaChart } from 'react-easy-chart'

export default function Thing( props ) {
  return (
    <AreaChart
      width={ props.width || 500 }
      height={ props.height || 300 }
      interpolate={'cardinal'}
      data={ props.data }
      axis
    />
  );
}
