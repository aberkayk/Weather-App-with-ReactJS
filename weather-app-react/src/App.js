import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f3a354a32d13864096475242f3877514&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter location'
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="bold">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}          
          </div>
        </div>

        {data.name != undefined && 
        <div className="bottom">
        <div className="feels">
        {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
        <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}            <p>Humidity</p>
        </div>
        <div className="wind">
        {data.main ? <p className="bold">{data.wind.speed.toFixed()}KmH</p> : null}            
        <p>Wind Speed</p>
        </div>
      </div>
        } 
      </div>
    </div>
  );
}

export default App;
