import axios from "axios"
export const READ_WEATHER = "READ_WEATHER"

const ROOT_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const PP_URL = "&appid="+process.env.REACT_APP_API_KEY+"&lang=ja&units=metric"

export const readWeather = () => async (dispatch) => {
    const result = {}
    const location = ["Tokyo,JP", "Nagano,JP"]
    for(let loc of location){
        const response = await axios.get(`${ROOT_URL}` + loc + `${PP_URL}`)
        const array = []
        console.log(response.data.main)
        array.push(response.data.name)
        array.push(response.data.main.temp)
        array.push(response.data.main.pressure)
        array.push(response.data.main.humidity)
        array.push(response.data.weather[0].main)
        result[loc] = array
    }
    dispatch({type: READ_WEATHER, result})
}