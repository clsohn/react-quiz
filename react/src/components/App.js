import React from 'react';
import Answers from './Answers';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>What is the best JavaScript Framework?</h1>
        <Answers
        answers={this.props.data.answers}/>
      </div>
    )
  }
}

export default App
