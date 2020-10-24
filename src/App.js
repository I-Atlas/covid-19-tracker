import React, { PureComponent } from "react";
import { Cards, Chart, Country } from "./components";
import { receivedData } from "./api";
import styles from "./App.module.css";
import image from "./assets/COVID-19.png";

class App extends PureComponent {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    this.setState({
      data: await receivedData(),
    });
  }

  handleCountryChange = async (country) => {
    this.setState({
      data: await receivedData(country),
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
