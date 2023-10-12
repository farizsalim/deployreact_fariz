import { INC, DEC } from "./constans";

export const incrementCount = (value) => {
    return {
      type: INC,
      value:value
    };
  };
  
  export const decrementCount = (value) => {
    return {
      type: DEC,
      value: value
    };
  };
  