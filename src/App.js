import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ['Yes', 'No', 'Totally', 'Not Today', 'You Wish', 'LMAO', 'In your dreams', 'Go for it', 'Just do it'],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!
    return answerArray[Math.floor(Math.random() * answerArray.length)];
    // Update the return statement below to reflect the outcome of your code.
    return this.state.answerArray
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1>Magic</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p> { this.state.answer } </p>
      </div>
    )
  }
}

export default App;
