import { createContext, useContext, useState } from "react";
import { getWeatherForCity, getWeatherForLoc } from '../api/api'

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null)
    const [city, setCity] = useState("")


    const fetchData = async () => {
        const res = await getWeatherForCity(city)
        setData(res)
    }


    const fetchUserLoc = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            getWeatherForLoc(pos.coords.latitude, pos.coords.longitude)
                .then((data) => setData(data))
        })
    }

    return (
        <WeatherContext.Provider value={{ city, data, setCity, fetchData, fetchUserLoc }}>
            {props.children}
        </WeatherContext.Provider>
    )
};