import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from '../componentes/WeatherinformationsDays/Weatherinformations'
import WeatherInformations5Days from '../componentes/Weatherinformations5Days copy/Weatherinformations5Days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()


  const inputRef = useRef()

  async function searchCity() {


    const city = inputRef.current.value

    const key = "484164a3a171e9b838d4c94efa1fd0c5"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    const apiInfo5Days= await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)


    setWeather(apiInfo.data)

  }




  return (
    <div className='container'>
      <h1>previsao do tempo</h1>
      <input ref={inputRef} type="text" placeholder='digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days}/>}
    

    </div>
  )
}

export default App
