import React, { Component } from 'react';
import '../assets/styles/App.scss';
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
    weather: '',
    timezone: '',
    error: false
  }

  handleInputValue = (e) => {
    const value = e.target.value;
    console.log(this.state.weather);
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
        const date = new Date().toLocaleString();

        this.setState({
          error: false,
          date: date,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temperature: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          weather: data.weather[0].main,
          timezone: data.timezone
        })
      })
      .catch(err => {
        this.setState({
          error: true,
          city: this.state.value
        })
      })
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="panel">
          <SearchForm value={this.state.value} change={this.handleInputValue} click={this.handleClick} />
          <Result data={this.state} />
        </div>

      </div>
    );
  }
}

export default App;
