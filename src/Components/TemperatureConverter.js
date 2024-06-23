import React, { useState } from 'react';

const Temperatureconverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value ? (parseFloat(value) * 9 / 5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value ? ((parseFloat(value) - 32) * 5 / 9).toFixed(2) : '');
  };

  return (
    <div>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
    </div>
  );
};

export default Temperatureconverter;
