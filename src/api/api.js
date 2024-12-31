import conf from "../config/conf"

const api_key = conf.weatherApiKey;
const baseURL = `https://api.weatherapi.com/v1/current.json?key=${api_key}`

export const getWeatherForCity = async (city) => {
    const res = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await res.json()
}

export const getWeatherForLoc = async (lat, long) => {
    const res = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`);
    return await res.json()
}