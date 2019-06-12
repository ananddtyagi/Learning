import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form } from "./_components";


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

class Survey extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      q1: -1,
      q2: -1,
      q3: -1,
      q4a: -1,
      q4b: -1,
      q4c: -1,
      q5: -1,
      q6: -1,
      q7: -1,
      calculatedRisk: 0,
    }
  }

  handleSubmit(){

    if (
      this.state.q1 === -1 ||
      this.state.q2 === -1 ||
      this.state.q3 === -1 ||
      this.state.q4a === -1 ||
      this.state.q4b === -1 ||
      this.state.q4c === -1 ||
      this.state.q5 === -1 ||
      this.state.q6 === -1 ||
      this.state.q7 === -1
    ) {
      alert("Oh, looks like some of the questions were not filled out.\nPlease answer all of questions to continue") //edit htis to tell WHICH questions you missed
      console.log(
          this.state.q1 + ", " +
          this.state.q2 + ", " +
          this.state.q3 + ", " +
          this.state.q4a + ", " +
          this.state.q4b + ", " +
          this.state.q4c + ", " +
          this.state.q5 + ", " +
          this.state.q6 + ", " +
          this.state.q7 + ", "
      )
    } else {
      this.setState({
        calculatedRisk: this.state.q1 +
              this.state.q2 +
              this.state.q3 +
              this.state.q4a +
              this.state.q4b +
              this.state.q4c +
              this.state.q5 +
              this.state.q6 +
              this.state.q7
      })

      console.log(this.state.total)//all the questions have been answered and we load the risk analysis page
    }

  }


    render () {
      let title = "Gulaq Risk Assessment";
      let q7label = (
        <div>
          <p>7. Review the chart below. We’ve outlined the most likely best-case and worst-case pre-tax annual returns of five hypothetical investment plans. Which range of possible outcomes is most acceptable to you? The figures are hypothetical and do not represent the performance of any particular investment.</p>
          <table>
            <tr>
              <td></td>
              <td>Average annual</td>
              <td>Return Best-case</td>
              <td>Worst-case</td>
            </tr>
            <tr>
              <td>A</td>
              <td>8.2</td>
              <td>10.2</td>
              <td>5.5</td>
            </tr>
            <tr>
              <td>B</td>
              <td>9.3</td>
              <td>18.8</td>
              <td>1.9</td>
            </tr>
            <tr>
              <td>C</td>
              <td>11.1</td>
              <td>43.0</td>
              <td>-14.3</td>
            </tr>
            <tr>
              <td>D</td>
              <td>13.6</td>
              <td>76.7</td>
              <td>-35.7</td>
            </tr>
            <tr>
              <td>E</td>
              <td>15.7</td>
              <td>98.9</td>
              <td>-41.7</td>
            </tr>
          </table>
        </div>

      )
      return (
        <div class = "survey-page-body">
          <h1 id = "title">{title}</h1>
          <Form
            novalidate={true}
            fields={[{
              name: 'q1', type: 'radio', label: '1. I plan to begin withdrawing money from my investments in:', required: true, options: [
                {
                  value: '1',
                  label: 'Less than 3 years'
                },
                {
                  value: '3',
                  label: '3-5 years'
                },
                {
                  value: '7',
                  label: '6-10 years'
                },
                {
                  value: '10',
                  label: '11 years or more'
                }
              ]
            },{
              name: 'q2', type: 'radio', label: '  2. When you start withdrawing money from investments, you may withdraw the accumulated funds all at once if you are saving to buy a house. In contrast, if you are using your investments to fund post-retirement income, you may withdraw the money at regular intervals over a 15 year period. Given this, please answer the following question. Once I begin withdrawing funds from my investments, I plan to spend all of the funds in:', required: true, options: [
                {
                  value: '0',
                  label: 'Less than 3 years'
                },
                {
                  value: '1',
                  label: '3-5 years'
                },
                {
                  value: '4',
                  label: '6-10 years'
                },
                {
                  value: '8',
                  label: '11 years or more'
                }
              ]
            },{
              name: 'q3', type: 'radio', label: '3. My current and futures income sources (such as salary, business income, pension etc.) are:', required: true, options: [
                {
                  value: '0',
                  label: 'Very Unstable'
                },
                {
                  value: '2',
                  label: 'Unstable'
                },
                {
                  value: '4',
                  label: 'Somewhat stable'
                },
                {
                  value: '6',
                  label: 'Stable'
                },
                {
                  value: '8',
                  label: 'Very stable'
                }
              ]
            },{
              name: 'q4a', type: 'radio', label: '4a. My experience with Mutual Funds is:',  required: true, options: [  // radio table
                {
                  value: '0',
                  label: 'None'
                },
                {
                  value: '2',
                  label: 'Some'
                },
                {
                  value: '4',
                  label: 'Extensive'
                }
              ]
            },{
              name: 'q4b', type: 'radio', label: '4b. My experience with Individual Stocks is:', required: true, options: [  // radio table
                {
                  value: '0',
                  label: 'None'
                },
                {
                  value: '3',
                  label: 'Some'
                },
                {
                  value: '6',
                  label: 'Extensive'
                }
              ]
            },{
              name: 'q4c', type: 'radio', label: '4c. My experience with Future and Options:', required: true, options: [  // radio table
                {
                  value: '0',
                  label: 'None'
                },
                {
                  value: '4',
                  label: 'Some'
                },
                {
                  value: '8',
                  label: 'Extensive'
                }
              ]
            },
            {
              name: 'q5', type: 'radio', label: '5. When I invest my money, I am:', required: true, options: [
                {
                  value: '0',
                  label: 'Most concerned about my investment losing value'
                },
                {
                  value: '4',
                  label: 'Equally concerned about my investment losing or gaining value'
                },
                {
                  value: '8',
                  label: 'Most concerned about my investment gaining value'
                }
              ]
            },{
              name: 'q6', type: 'radio', label: '6. Consider this scenario: Imagine that in the past three months, the SENSEX lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do?', required: true, options: [
                {
                  value: '0',
                  label: 'Seel all of my shares'
                },
                {
                  value: '2',
                  label: 'Sell some of my shares'
                },
                {
                  value: '5',
                  label: 'Do nothing'
                },
                {
                  value: '8',
                  label: 'Buy more shares'
                }
              ]
            },{
              name: 'q7', type: 'radio', label: q7label, required: true, options: [
                {
                  value: '0',
                  label: 'A'
                },{
                  value: '3',
                  label: 'B'
                },{
                  value: '6',
                  label: 'C'
                },{
                  value: '8',
                  label: 'D'
                },{
                  value: '10',
                  label: 'E'
                }
              ]
            }

          ]}


            buttons={[{
              type: 'button',
              label:'Submit',
              color:'primary',
              disabled: false,
              action: (formInstance, formData, buttonEvent, btnKey) => {
                //send formData to the risk analysis page
                this.setState({
                  q1: parseInt(formData.q1, 10),
                  q2: parseInt(formData.q2, 10),
                  q3: parseInt(formData.q3, 10),
                  q4a: parseInt(formData.q4a, 10),
                  q4b: parseInt(formData.q4b, 10),
                  q4c: parseInt(formData.q4c, 10),
                  q5: parseInt(formData.q5, 10),
                  q6: parseInt(formData.q6, 10),
                  q7: parseInt(formData.q7, 10)
                })

                this.handleSubmit();
              }
            }
            ]}
            data={{}}
            loading={false}
            submitAction ={{}}


          />

        </div>
      );
    }
}


ReactDOM.render(
  <Survey/>,
  document.getElementById('root')
);

//to do: add bottom progress bar, line 51 comment, add functionality where the current question is highlighted and the others are grey and the question moves to the next qusetion when you answer.
//fix: when clicked, it shouldn't change the page, currently, on submit, it
