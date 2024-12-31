import './App.css'
import Card from './Components/Card'
import Input from './Components/Input'
import Button from './Components/Button'
import { useWeather } from './Context/Weather'
import { useEffect } from 'react'

const App = () => {

  const weather = useWeather()
  useEffect(() => {
    weather.fetchUserLoc()
  }, [])

  const reload = () => {
    weather.fetchUserLoc()
  }

  return (
    <div className='container'>
      <h2 className='title'>Atmocel Weather Forecast</h2>
      <Card />
      <Input placeholder="Enter city name to search: " />
      <Button onClick={weather.fetchData} value="Search" />
      <Button onClick={reload} value="My location" />
    </div>
  )
}

export default App