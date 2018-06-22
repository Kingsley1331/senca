import React, { Component } from 'react';
import Mask from './components/Mask'
import Rectangle5 from './components/Rectangle5'
import Rectangle3 from './components/Rectangle3'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      isCorrect: false,
      temp: 'Cold',
      options: 'Option 1',
      status: 'Not active'
    } 
    this.correctAnswers = {
      temp: 'Hot',
      options: 'Option 2',
      status: 'Active'
    }
    // this.questions = {

    // }

    this.toggleOption = this.toggleOption.bind(this)
  }
  updateTheme() {
    let {isCorrect, ...choices} = this.state;
    isCorrect = JSON.stringify(choices) === JSON.stringify(this.correctAnswers);
    this.setState({isCorrect});
  }
  toggleOption(type) {
    let newState;
    if (type === 'temp'){
      if (this.state.temp === 'Cold') {
        newState = 'Hot';
      } else if(this.state.temp === 'Hot') {
        newState = 'Cold';
      }
    }
    if (type === 'options') {
      if (this.state.options === 'Option 1') {
        newState = 'Option 2';
      } else if (this.state.options === 'Option 2') {
        newState = 'Option 1';
      }
    }
    if (type === 'status') {
      if (this.state.status === 'Active') {
        newState = 'Not active';
      } else if (this.state.status === 'Not active') {
        newState = 'Active';
      }
    }
    this.setState({ [type]: newState }, this.updateTheme);
  }
  // toggleOption2(question) {
  //   const {type, left, right} = questions;
  //   if (type === 'temp') {
  //     if (this.state.temp === 'Cold') {
  //       newState = 'Hot';
  //     } else if (this.state.temp === 'Hot') {
  //       newState = 'Cold';
  //     }
  //   }

  // }

  render() {
    const { isCorrect, temp, options, status } = this.state;
    const message = isCorrect ? 'The answer is correct!' : 'The answer is incorrect.';
    return (
      <div className='Rectangle'>
        <Mask isCorrect={isCorrect}>
          <Rectangle5>
            <Rectangle3 type='temp' label='Hot' position='left' isCorrect={isCorrect} selected={temp === 'Hot'} onClick={this.toggleOption} />
            <Rectangle3 type='temp' label='Cold' position='right' isCorrect={isCorrect} selected={temp === 'Cold'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='options' label='Option 1' position='left' isCorrect={isCorrect} selected={options === 'Option 1'} onClick={this.toggleOption} />
            <Rectangle3 type='options' label='Option 2' position='right' isCorrect={isCorrect} selected={options === 'Option 2'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='status' label='Active' position='left' isCorrect={isCorrect} selected={status === 'Active'} onClick={this.toggleOption} />
            <Rectangle3 type='status' label='Not active' position='right' isCorrect={isCorrect} selected={status === 'Not active'} onClick={this.toggleOption} />
          </Rectangle5>

          {/* <Rectangle5>
            <Rectangle3 type='temp' label='Hot' position='left' isCorrect={isCorrect} selected={temp === 'Hot'} onClick={this.toggleOption} />
            <Rectangle3 type='temp' label='Cold' position='right' isCorrect={isCorrect} selected={temp === 'Cold'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='options' label='Option 1' position='left' isCorrect={isCorrect} selected={options === 'Option 1'} onClick={this.toggleOption} />
            <Rectangle3 type='options' label='Option 2' position='right' isCorrect={isCorrect} selected={options === 'Option 2'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='status' label='Active' position='left' isCorrect={isCorrect} selected={status === 'Active'} onClick={this.toggleOption} />
            <Rectangle3 type='status' label='Not active' position='right' isCorrect={isCorrect} selected={status === 'Not active'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='temp' label='Hot' position='left' isCorrect={isCorrect} selected={temp === 'Hot'} onClick={this.toggleOption} />
            <Rectangle3 type='temp' label='Cold' position='right' isCorrect={isCorrect} selected={temp === 'Cold'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='options' label='Option 1' position='left' isCorrect={isCorrect} selected={options === 'Option 1'} onClick={this.toggleOption} />
            <Rectangle3 type='options' label='Option 2' position='right' isCorrect={isCorrect} selected={options === 'Option 2'} onClick={this.toggleOption} />
          </Rectangle5>
          <Rectangle5>
            <Rectangle3 type='status' label='Active' position='left' isCorrect={isCorrect} selected={status === 'Active'} onClick={this.toggleOption} />
            <Rectangle3 type='status' label='Not active' position='right' isCorrect={isCorrect} selected={status === 'Not active'} onClick={this.toggleOption} />
          </Rectangle5> */}
          <div className='Label message'>{message}</div>         
        </Mask>
      </div>
    );
  }
}

export default App;
