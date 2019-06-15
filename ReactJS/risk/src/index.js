import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Slider }  from 'material-ui-slider';

class Risk extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      calculatedRisk: 30,
      desiredRisk: 0,

    };
  }

    render () {
      return (
        <div class = "page-body">
          <p>Slider</p>
          <Slider
            defaultValue={this.state.calculatedRisk}
            color={"red"}
            >
              Hello
          </Slider>
        </div>
      );
    }
}


ReactDOM.render(
  <Risk/>,
  document.getElementById('root')
);

//to do: make this look decent, line 114, why does it take two clicks.
