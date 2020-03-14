import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Result from './Result';
const APIKey = 'c710934e51b92d3574c165f2e71fdc08';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temperature: '',
    pressure: '',
    wind: '',
    err: false
  }

  handleInputValue = (e) => {
    const value = e.target.value;

    this.setState({
      value: value
    })
  }

  handleClick = (e) => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res;
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          error: false
        })
      })
      .catch(err => {
        this.setState({
          error: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <SearchForm value={this.state.value} change={this.handleInputValue} click={this.handleClick} />
        <Result />
      </div>
    );
  }
}

export default App;
