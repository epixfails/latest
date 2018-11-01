import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px #bbdefb solid;
`;

const fetchWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition(async position => {
      const response = await fetch(`
      http://api.openweathermap.org/data/2.5/weather?lat=${
        position.coords.latitude
      }&lon=${position.coords.longitude}&APPID=5e429eedeec5221805a8a1e0186eb3e3
      `);

      const responseJson = await response.json();
      setWeather(responseJson);
      setLoading(false);
    });
  }, []);

  return { weather, loading };
};

export const Weather = () => {
  const { weather, loading } = fetchWeather();

  return <Wrap>{loading ? <span>Loading</span> : weather.name}</Wrap>;
};
