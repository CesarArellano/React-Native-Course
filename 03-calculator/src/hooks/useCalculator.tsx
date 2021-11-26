import { useRef, useState } from "react";

const initialState = '0';

enum Operators {
  adding, substracting, multiplication, dividing
}

export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState(initialState)
  const [number, setNumber] = useState(initialState);

  const lastOperation = useRef<Operators>();

  const handleCleanResult = () => {
    setNumber(initialState);
    setLastNumber(initialState);
  }

  const buildNumber = ( numberText: string ) => {
    if( number.length > 15 ) return;

    if( number.includes('.') && numberText === '.' ) return;

    if( number.startsWith('0') || number.startsWith('-0') ) {

      if( numberText === '.' ) {
        setNumber( number + numberText );

      } else if ( numberText === '0' && number.includes('.') ) {
        setNumber( number + numberText );

      } else if ( numberText === '0' && !number.includes('.') ) {
        setNumber( numberText );
      } else if ( numberText !== '0' && !number.includes('.') ) {
        setNumber( numberText );

      } else {
        setNumber( number + numberText );
      } 

    } else {
      setNumber( number + numberText );
    }    
  }

  const changeSign = () => {
    if( number.includes('-') ) {
      setNumber( number.replace('-', '') )
    } else {
      setNumber( '-' + number )
    }
  }

  const deleteLastEntry = () => {
    if( number.length == 1 || ( number.length == 2 && number.startsWith('-') ) ) {
      setNumber( initialState )
    } else {
      setNumber( number.substring( 0, number.length - 1 ) );
    }
  }
  
  const changeNumberByLastNumber = () => {
    if( number === '0' ) return;

    if( number.endsWith('.') ) {
      setLastNumber( number.slice(0, -1) )
    } else {
      setLastNumber( number );
    }
    setNumber( initialState );
  };

  const dividingBtn = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.dividing;
  }

  const multiplicationBtn = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.multiplication;
  }

  const substractingBtn = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.substracting;
  }

  const addingBtn = () => {
    changeNumberByLastNumber();
    lastOperation.current = Operators.adding;
  }

  const calculate = () => {
    const num1 = Number( number );
    const num2 = Number( lastNumber );

    switch ( lastOperation.current ) {
      case Operators.adding:
        setNumber(`${ num2 + num1 }`);
        break;
      
      case Operators.substracting:
        if( num2 != 0 ) {
          setNumber(`${ num2 - num1 }`);
        }
        break;

      case Operators.multiplication:
        setNumber(`${ num2 * num1 }`);
        break;
      case Operators.dividing:
        if( num1 != 0) {
          setNumber(`${ num2 / num1 }`);
        } else {
          setNumber(initialState);
        }
        break;
      default:
        setNumber(initialState);
        break;
    }
    
    setLastNumber(initialState);
  }

  return {
    number,
    lastNumber,
    handleCleanResult,
    buildNumber,
    changeSign,
    deleteLastEntry,
    addingBtn,
    substractingBtn,
    multiplicationBtn,
    dividingBtn,
    calculate,
  }
}
