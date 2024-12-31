import { useWeather } from '../Context/Weather'

const Input = (props) => {

    const Weather = useWeather()

    return (
        <input
            className='input-field'
            placeholder={props.placeholder}
            value={Weather.value}
            onChange={(e) => Weather.setCity(e.target.value)}
        />
    )
}

export default Input