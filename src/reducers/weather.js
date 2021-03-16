import _ from "lodash"
import {READ_WEATHER} from "../actions"

// eslint-disable-next-line import/no-anonymous-default-export
export default ( weather={}, action ) => {
    switch(action.type){
        case READ_WEATHER:
            return action.result;
        default:
            return weather
    }
}