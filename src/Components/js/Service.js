import React, { Component } from 'react'
import CountUp from 'react-countup'
export default class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
        <h1><CountUp end={200}/></h1>

          <h1><CountUp end={200} duration={5}/></h1>
          <h1><CountUp start={100} end={200} duration={5}/></h1>
          <h1><CountUp end={1000} duration={5} prefix='$' decimals={2}/></h1>

          <h1><CountUp end={1000} duration={5} suffix='USD' decimals={2}/></h1>


        
        </div>
      </React.Fragment>
    )
  }
}
