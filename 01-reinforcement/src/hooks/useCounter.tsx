import { useState } from "react";

export const useCounter = (initialState: number = 10) => {
  const [counter, setCounter] = useState(initialState);

  const handleIncrement = ( number: number ) => {
    setCounter( counter + number );
  }

  const handleDecrement = () => {
    if(counter > 0) setCounter( counter - 1 )
  }

  return {
    counter,
    handleIncrement,
    handleDecrement
  }

}
