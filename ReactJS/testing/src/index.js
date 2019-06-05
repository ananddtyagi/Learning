import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

class Survey extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      plan_to_withdraw: "", //1
      time_to_spend: "", //2
      current_income: "", //3
      experience: [{ //4
        mutual_funds: "",
        individual_stocks: "",
        future_and_options: "",
      }],
      investment_concerns: "", //5
      what_would_you_do:"", //6
      most_acceptable:"",
      email:"",
    }
  }

  planToWithdraw(choice){
    if(choice){
      this.setState({
        plan_to_withdraw: choice,
      })
    } else {
      this.setState({
        plan_to_withdraw: "",
      })
    }
    return this.state.plan_to_withdraw;
  }
  timeToSpend(choice){
    if(choice){
      this.setState({
        time_to_spend: choice,
      })
    } else {
      this.setState({
        time_to_spend: "",
      })
    }
    return this.state.time_to_spend;
  }
  currentIncome(choice){
    if(choice){
      this.setState({
        current_income: choice,
      })
    } else {
      this.setState({
        current_income: "",
      })
    }
    return this.state.current_income;
  }
  setExperience(index, choice){
    const new_exp = this.state.experience.slice();
    switch(index){
      case 0:
        new_exp.mutual_funds = choice;
        new_exp.individual_stocks = this.state.experience.individual_stocks;
        new_exp.future_and_options = this.state.experience.future_and_options;
      break;
      case 1:
        new_exp.mutual_funds = this.state.experience.mutual_funds;
        new_exp.individual_stocks = choice;
        new_exp.future_and_options = this.state.experience.future_and_options;
      break;
      case 2:
        new_exp.mutual_funds = this.state.experience.mutual_funds;
        new_exp.individual_stocks = this.state.experience.individual_stocks;
        new_exp.future_and_options = choice;
      break;
      default:
      break;
    }
    this.setState({
      experience: new_exp,
    })
  }
  investmentConcerns(choice){
    if(choice){
      this.setState({
        investment_concerns: choice,
      })
    } else {
      this.setState({
        investment_concerns: "",
      })
    }
    return this.state.investment_concerns;
  }
  whatWouldYouDo(choice){
    if(choice){
      this.setState({
        what_would_you_do: choice,
      })
    } else {
      this.setState({
        what_would_you_do: "",
      })
    }
    return this.state.what_would_you_do;
  }
  mostAcceptable(choice){
    if(choice){
      this.setState({
        most_acceptable: choice,
      })
    } else {
      this.setState({
        most_acceptable: "",
      })
    }
    return this.state.most_acceptable;
  }
  setEmail(email){
    if(email){
      this.setState({
        email: email,
      })
    }
  }

  handleSubmit(event){
    event.preventDefault();
    alert("Thank you for taking the survey!")
    window.location.reload();
  }

    render () {
      let title = "Gulaq Risk Assessment";

      return (
        <div class = "survey-page-body">
          <h1 id = "title">{title}</h1>

          <form onSubmit={this.handleSubmit}>
            <fieldset id = "q1">
                <legend class="required">1. I plan to begin withdrawing money from my investments in:</legend>

                    <label>
                      <input
                          type="radio"
                          value="lessthan3"
                          checked={this.state.plan_to_withdraw === "lessthan3"}
                          onChange = {() => {
                              this.planToWithdraw("lessthan3")}
                          }
                        />
                          Less than 3 years
                    </label> <br/>


                  <label>
                    <input
                        type="radio"
                        value="3to5"
                        checked={this.state.plan_to_withdraw === "3to5"}
                        onChange = {() => {
                            this.planToWithdraw("3to5")}
                        }
                      />
                        3-5 years
                    </label> <br/>


                  <label>
                    <input
                        type="radio"
                        value="6to10"
                        checked={this.state.plan_to_withdraw === "6to10"}
                        onChange = {() => {
                            this.planToWithdraw("6to10")}
                        }
                      />
                        6-10 years
                    </label> <br/>


                  <label>
                    <input
                        type="radio"
                        value="morethan11"
                        checked={this.state.plan_to_withdraw === "morethan11"}
                        onChange = {() => {
                            this.planToWithdraw("morethan11")}
                        }
                      />
                       11 years or more
                    </label> <br/>

            </fieldset>
            <fieldset id = "q2">
              <legend class="required">
                  2.When you start withdrawing money from investments, you may withdraw the accumulated funds all at once if you are saving to buy a house.
                  In contrast, if you are using your investments to fund post-retirement income, you may withdraw the money at regular intervals over a 15 year period.
                  Given this, please answer the following question.
                  Once I begin withdrawing funds from my investments, I plan to spend all of the funds in:
              </legend>

              <label>
                <input
                    type="radio"
                    value="lessthan3"
                    checked={this.state.time_to_spend === "lessthan3"}
                    onChange = {() => {
                        this.timeToSpend("lessthan3")}
                    }
                  />
                    Less than 3 years
                </label> <br/>


              <label>
                <input
                    type="radio"
                    value="3to5"
                    checked={this.state.time_to_spend === "3to5"}
                    onChange = {() => {
                        this.timeToSpend("3to5")}
                    }
                  />
                    3-5 years
                </label> <br/>


              <label>
                <input
                    type="radio"
                    value="6to10"
                    checked={this.state.time_to_spend === "6to10"}
                    onChange = {() => {
                        this.timeToSpend("6to10")}
                    }
                  />
                    6-10 years
                </label> <br/>


              <label>
                <input
                    type="radio"
                    value="morethan11"
                    checked={this.state.time_to_spend === "morethan11"}
                    onChange = {() => {
                        this.timeToSpend("morethan11")}
                    }
                  />
                   11 years or more
                </label> <br/>


            </fieldset>
            <fieldset id = "q3">
              <legend class="required">
                3. My current and futures income sources (such as salary, business income, pension etc.) are:
              </legend>

                <label>
                  <input
                      type="radio"
                      value="veryunstable"
                      checked={this.state.current_income === "veryunstable"}
                      onChange = {() => {
                          this.currentIncome("veryunstable")}
                      }
                    />
                      Very unstable
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="unstable"
                      checked={this.state.current_income === "unstable"}
                      onChange = {() => {
                          this.currentIncome("unstable")}
                      }
                    />
                      Unstable
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="somewhatstable"
                      checked={this.state.current_income === "somewhatstable"}
                      onChange = {() => {
                          this.currentIncome("somewhatstable")}
                      }
                    />
                      Somewhat stable
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="stable"
                      checked={this.state.current_income === "stable"}
                      onChange = {() => {
                          this.currentIncome("stable")}
                      }
                    />
                      Stable
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="verystable"
                      checked={this.state.current_income === "verystable"}
                      onChange = {() => {
                          this.currentIncome("verystable")}
                      }
                    />
                      Very Stable
                  </label> <br/>

            </fieldset>
            <fieldset id = "q4">
              <legend class="required">
                4. My experience with following products (select all that applies):
              </legend>
              <tr>
                <th></th>
                <th>None</th>
                <th>Some</th>
                <th>Extensive</th>
              </tr>
              <tbody>
                <tr>
                  <th>Mutual Funds</th>
                  <th><input
                      type="radio"
                      value="none"
                      checked={this.state.experience.mutual_funds === "none"}
                      onChange = {() => {
                          this.setExperience(0, "none")}
                      }
                    /></th>
                  <th><input
                      type="radio"
                      value="some"
                      checked={this.state.experience.mutual_funds === "some"}
                      onChange = {() => {
                          this.setExperience(0,"some")}
                      }
                    /></th>
                  <th><input
                      type="radio"
                      value="extensive"
                      checked={this.state.experience.mutual_funds === "extensive"}
                      onChange = {() => {
                          this.setExperience(0, "extensive")}
                      }
                    /></th>
                </tr>
                <tr>
                  <th>Individual Stocks</th>
                  <th><input
                      type="radio"
                      value="none"
                      checked={this.state.experience.individual_stocks === "none"}
                      onChange = {() => {
                          this.setExperience(1, "none")}
                      }
                    /></th>
                  <th><input
                      type="radio"
                      value="some"
                      checked={this.state.experience.individual_stocks === "some"}
                      onChange = {() => {
                          this.setExperience(1,"some")}
                      }
                    /></th>
                  <th><input
                      type="radio"
                      value="extensive"
                      checked={this.state.experience.individual_stocks === "extensive"}
                      onChange = {() => {
                          this.setExperience(1, "extensive")}
                      }
                    /></th>
                </tr>
                <tr>
                  <th>Future and Options</th>
                  <th><input
                      type="radio"
                      value="none"
                      checked={this.state.experience.future_and_options === "none"}
                      onChange = {() => {
                          this.setExperience(2, "none")}
                      }
                    /></th>
                  <th><input
                      type="radio"
                      value="some"
                      checked={this.state.experience.future_and_options === "some"}
                      onChange = {() => {
                          this.setExperience(2,"some")}
                      }
                    /></th>
                  <th><input
                      type="radio"
                      value="extensive"
                      checked={this.state.experience.future_and_options === "extensive"}
                      onChange = {() => {
                          this.setExperience(2, "extensive")}
                      }
                    /></th>
                </tr>
              </tbody>
            </fieldset>
            <fieldset id = "q5">
              <legend class="required">
                5. When I invest my money, I am:
              </legend>

                <label>
                  <input
                      type="radio"
                      value="losingvalue"
                      checked={this.state.investment_concerns === "losingvalue"}
                      onChange = {() => {
                          this.investmentConcerns("losingvalue")}
                      }
                    />
                      Most concerned about my investment losing value
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="losingorgaining"
                      checked={this.state.investment_concerns === "losingorgaining"}
                      onChange = {() => {
                          this.investmentConcerns("losingorgaining")}
                      }
                    />
                      Equally concerned about my investment losing or gaining value
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="gaining"
                      checked={this.state.investment_concerns === "gaining"}
                      onChange = {() => {
                          this.investmentConcerns("gaining")}
                      }
                    />
                      Most concerned about my investment gaining value
                  </label> <br/>

            </fieldset>
            <fieldset id = "q6">
              <legend class="required">
                6. Consider this scenario: Imagine that in the past three months, the SENSEX lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do?
              </legend>

                <label>
                  <input
                      type="radio"
                      value="sellall"
                      checked={this.state.what_would_you_do === "sellall"}
                      onChange = {() => {
                          this.whatWouldYouDo("sellall")}
                      }
                    />
                    Sell all of my shares
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="sellsome"
                      checked={this.state.what_would_you_do === "sellsome"}
                      onChange = {() => {
                          this.whatWouldYouDo("sellsome")}
                      }
                    />
                    Sell some of my shares
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="donothing"
                      checked={this.state.what_would_you_do === "donothing"}
                      onChange = {() => {
                          this.whatWouldYouDo("donothing")}
                      }
                    />
                    Do nothing
                  </label> <br/>


                <label>
                  <input
                      type="radio"
                      value="buymore"
                      checked={this.state.what_would_you_do === "buymore"}
                      onChange = {() => {
                          this.whatWouldYouDo("buymore")}
                      }
                    />
                    Buy more
                  </label> <br/>

            </fieldset>
            <fieldset id = "q7">
              <legend class="required">
                7. Review the chart below. We’ve outlined the most likely best-case and worst-case pre-tax annual returns of five hypothetical investment plans.
                 Which range of possible outcomes is most acceptable to you? The figures are hypothetical and do not represent the performance of any particular investment.
              </legend>
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
                <label>
                  <input
                      type="radio"
                      value="A"
                      checked={this.state.most_acceptable === "A"}
                      onChange = {() => {
                          this.mostAcceptable("A")}
                      }
                    />
                    A
                  </label> <br/>

                <label>
                  <input
                      type="radio"
                      value="B"
                      checked={this.state.most_acceptable === "B"}
                      onChange = {() => {
                          this.mostAcceptable("B")}
                      }
                    />
                    B
                  </label> <br/>

                <label>
                  <input
                      type="radio"
                      value="C"
                      checked={this.state.most_acceptable === "C"}
                      onChange = {() => {
                          this.mostAcceptable("C")}
                      }
                    />
                    C
                  </label> <br/>

                <label>
                  <input
                      type="radio"
                      value="D"
                      checked={this.state.most_acceptable === "D"}
                      onChange = {() => {
                          this.mostAcceptable("D")}
                      }
                    />
                    D
                  </label> <br/>

                <label>
                  <input
                      type="radio"
                      value="E"
                      checked={this.state.most_acceptable === "E"}
                      onChange = {() => {
                          this.mostAcceptable("E")}
                      }
                    />
                    E
                  </label> <br/>
            </fieldset>
            <fieldset id = "q8">
              <legend class="required">
                8. Enter Email
              </legend>
              <input
                type = "email"
              />
            </fieldset>
            <button type = "submit"> Submit </button>
          </form>
        </div>
      );
    }
}


ReactDOM.render(
  <Survey/>,
  document.getElementById('root')
);
