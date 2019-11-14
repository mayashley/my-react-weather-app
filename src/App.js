import React from "react";
import Heading from "./Components/heading";
import Form from "./Components/form";
// import Button from "./Components/button";
import Forecast from "./Components/forecast";
import "./App.css";

const api_key = "260ebc9c40f0b4f64cbb4359c3b98794";

class App extends React.Component {
  state = {
    temperature: "",
    country: "",
    city: "",
    wind: "",
    clouds: "",
    error: ""
  };

  getWeather = async event => {
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    event.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`
    );

    if (city && country) {
      const response = await api_call.json();
      console.log(response);
      if (response.cod === 200 || response.cod === "200") {
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          wind: response.wind.speed,
          clouds: response.clouds.all,
          error: ""
        });
      } else {
        alert(response.message);
      }
    } else {
      this.setState({
        error: "Please fill in input fields..."
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Heading />
        <Form loadWeather={this.getWeather} />
        {/* <Button/> */}
        <Forecast
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          clouds={this.state.clouds}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
