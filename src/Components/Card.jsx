import { useWeather } from '../Context/Weather'

const Card = () => {

    const weather = useWeather();

    const condition_icon = weather?.data?.current?.condition?.icon

    return (
        <div className="card">
            <img src={condition_icon || "atmocel.svg"} style={{ color: 'white' }} alt="" />
            <h3>Sky Condition: <br /> <p>{weather?.data?.current?.condition?.text}</p></h3>
            <h2>Tamparature: {weather?.data?.current?.temp_c} C</h2>
            <h3>
                City: <p>{weather?.data?.location?.name}</p>
                <br />
                country: <p>{weather?.data?.location?.country}</p></h3>
        </div>
    )
}

export default Card