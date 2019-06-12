import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form } from "./_components";

class Risk extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      calculatedRisk: 35,
      desiredRisk: 0,

    };
  }

  calcScore(formData) {
    return this.state.scoring[formData.q1] +
      this.state.scoring[formData.q2] +
      this.state.scoring[formData.q3] +
      this.state.scoring[formData.q4a] +
      this.state.scoring[formData.q4b] +
      this.state.scoring[formData.q4c] +
      this.state.scoring[formData.q5] +
      this.state.scoring[formData.q6] +
      this.state.scoring[formData.q7]
  }

    render () {
      return (
        <div class = "page-body">
        <h1>Your current risk score is:</h1>
        <p>{this.calcScore(this.state.calculatedRisk)}</p>
        <Form
          nonvalidate={true}
          fields={[{
            name: 'desiredRisk', label: "Desired Risk", requried: true
          }]}
          buttons={[{
              type: 'button',
              label:'Submit',
              color:'primary',
              disabled: false,
              action: (formInstance, formData, buttonEvent, btnKey) => {
                //send formData to the risk analysis page
                this.setState({
                  desiredRisk: formData
                })
                console.log(this.state.desiredRisk) //why does it take two clicks for this to show up????
              }
            }
            ]}

          loading={false}
          submitAction={{}}

        />
        </div>
      );
    }
}


ReactDOM.render(
  <Risk/>,
  document.getElementById('root')
);

//to do: make this look decent, line 114, why does it take two clicks.
