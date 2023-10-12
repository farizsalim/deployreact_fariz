 import { INC,DEC } from "./constans";

 const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case INC:
        return state + action.value;
      case DEC:
        return state > action.value ? state - action.value : 0;
      default:
        return state;
    }
  };
  
  export default counterReducer;
  