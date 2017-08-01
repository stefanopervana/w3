import { Chart } from 'react-google-charts';
import React from 'react';
import Ap from './button';
import data from './data';


class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = data

} 

  render() {
    return (
      <div>
      <div id="header">
      <div class="wrapper">
      <h1 id="logo">
      <a href=".">Word Tree</a>
      </h1><Ap />
      </div>
      </div>
      
      <Chart
        chartType="WordTree"
        data={this.state.data}
        options={this.state.options}
        graph_id="WordTree"
        width="200%"
        height="600px"
        legend_toggle
      />
      
      </div>
    );
  }
}
export default ExampleChart;
