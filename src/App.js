import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  }
  return (
    <div className="App">
      <SearchComponent onSearch={handleSearch} />
      <WeatherDisplay city={city}/>
    </div>
  );
}

export default App;
