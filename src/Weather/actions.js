
import axios from "axios";
import * as constants from './constants';

// export const getWeather = city => ({
//   type: constants.WEATHER,
//   city
// });

export const weatherRequest = city => ({
  type: constants.WEATHER_REQUEST,
  city
});

export const weatherSuccess = response => ({
  type: constants.WEATHER_SUCCESS,
  response
});

export const weatherFailed = error => ({
  type: constants.WEATHER_FAILED,
  error
});

export const getWeather = city => dispatch =>
  new Promise(async (resolve, reject) => {
    const { data, status } = await axios.get(
      `https://openweathermap.org/data/2.5/weather?q=${city},uk&appid=b6907d289e10d714a6e88b30761fae22`
    );
    // console.log('***: ', body);
    if (status === 200) {
      dispatch(weatherSuccess(data));
      resolve(data);
    } else {
      reject("error happened");
    }
    // setTimeout(() => {
    //   dispatch(weatherSuccess(city));
    //   resolve(city);
    // }, 8000);
  });


  export const weatherRequest2 = city => ({
    type: constants.WEATHER_REQUEST2,
    city
  });
  
  export const weatherSuccess2 = response => ({
    type: constants.WEATHER_SUCCESS2,
    response
  });
  
  export const weatherFailed2 = error => ({
    type: constants.WEATHER_FAILED2,
    error
  });
  
  export const getWeather2 = city => dispatch =>
    new Promise(async (resolve, reject) => {
      const { data, status } = await axios.get(
        `https://openweathermap.org/data/2.5/weather?q=${city},uk&appid=b6907d289e10d714a6e88b30761fae22`
      );
      // console.log('***: ', body);
      if (status === 200) {
        dispatch(weatherSuccess2(data));
        resolve(data);
      } else {
        reject("error happened");
      }
      // setTimeout(() => {
      //   dispatch(weatherSuccess(city));
      //   resolve(city);
      // }, 8000);
    });
