import React, {Component} from 'react';


class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <h2>{this.props.word}</h2>
    )
  }
}

export default Home;
