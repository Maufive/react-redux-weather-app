import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Använd CONCAT istället för PUSH, för att CONCAT gör en ny ARR, istället för att manipulera
      // den gamla genom att PUSHa in ett nytt OBJ i ARR.
      // Sätt ALDRIG state genom ' = '. Alltid setState, både i React & Redux.
      return state.concat([action.payload.data]);
      // return [ action.payload.data, ...state ]; <-- ES6 
  }
  return state;
}
