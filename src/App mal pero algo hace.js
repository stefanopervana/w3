import { Chart } from 'react-google-charts';
import React from 'react';
import './App.css';

class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
          wordtree: {
            format: 'implicit',
            type: 'double',
            word: 'Urtubey'
          }
        },

      data: [ ['Phrases'],
["Urtubey re-elected governor by wide margin"],
["Urtubey agradeció a Cristina, aconsejó a Florencio y Daniel"],
["Urtubey: Así como caminé Salta, lo haré en cada región de Argentina"],
["Urtubey arrasó en Salta y el FPV celebró en su bunker, sin Scioli"],
["Elecciones en Salta: Juan Manuel Urtubey obtuvo"],
          ],
    };
  }
  render() {
    return (
      <Chart
        chartType="wordtree"
        data={this.state.data}
        options={this.state.options}
        graph_id="wordtree"
        width="600px"
        height="900px"
        legend_toggle
      />
    );
  }
}
export default ExampleChart;



  
