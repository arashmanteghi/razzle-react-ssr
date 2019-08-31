import React, { PureComponent } from "react";
import axios from 'axios';
import withSSR from '../utils/withSSR';

class Weather extends PureComponent {

  // This works similarly to Next.js's `getInitialProps`
  static getInitialData({ match, req, res }) {
    return new Promise(async (resolve, reject) => {
      const { data, status } = await axios.get(
        `https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`
      );
      if (status === 200) {
        resolve({weather: data});
      } else {
        reject("error happened");
      }
    });
  }

  
  state = {
    weather: {
      isLoading: false,
      data: null,
    }
  };

  async componentDidMount() {
  }

  render() {
    const { isLoading, weather, error } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <p>What we're all about Weather!</p>

        {isLoading && <p>London weather is loading</p>}
        {!isLoading &&
          weather && (
            <p>London temperature is {weather.main.temp}</p>
          )}
      </div>
    );
  }
}

export default withSSR(Weather);