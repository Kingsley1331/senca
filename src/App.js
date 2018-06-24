import React, { Component } from 'react';
import Mask from './components/Mask'
import Rectangle5 from './components/Rectangle5'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      isCorrect: false,
      answers: {
        temp: 'left',
        options: 'right',
        status: 'left'
      },
      questions: {
        temp: {
          left: {
            label: 'Hot',
            selected: true
          },
          right: {
            label: 'Cold',
            selected: false
          }
        }, 
      options: {
          left: {
            label: 'Option 1',
            selected: true
          },
          right: {
            label: 'Option 2',
            selected: false
          }
        },
      status: {
          left: {
            label: 'Active',
            selected: true
          },
          right: {
            label: 'Not active',
            selected: false
          }
        },
       /* pets: {
          left: {
            label: 'Cat',
            selected: true
          },
          right: {
            label: 'Dog',
            selected: false
          }
        }*/
      }
    } 
    this.toggleOption = this.toggleOption.bind(this)
  }
  updateTheme() {
    let isCorrect = true;
    const { answers, questions } = this.state
    for(let answer in answers){
      if (!questions[answer][answers[answer]].selected) {
        isCorrect = false;
        break;
      }
    }
    this.setState({isCorrect});
  }

  toggleOption(question, type) {
    const { left, right } = question;
      if (left.selected) {
        left.selected = false;
        right.selected = true;
      } else if (right.selected) {
        left.selected = true;
        right.selected = false;
      }
    let questions = this.state.questions
    questions[type] = question
    this.setState({ questions }, this.updateTheme);
  }
  render() {
    const { isCorrect } = this.state;
    const message = isCorrect ? 'The answer is correct!' : 'The answer is incorrect.';
    const questions = this.state.questions;
    const questionsArray = Object.keys(questions).map(question => <Rectangle5 key={question} type={question} isCorrect={isCorrect} question={questions[question]} onClick={this.toggleOption} /> );
    return (
      <div className='Rectangle'>
        <Mask isCorrect={isCorrect}>
          {questionsArray}
          <div className='Label message'>{message}</div>         
        </Mask>
      </div>
    );
  }
}

export default App;
