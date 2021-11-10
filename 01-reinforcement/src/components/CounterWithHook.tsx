import { useCounter } from '../hooks/useCounter';
export const CounterWithHook = () => {
  const { counter, handleIncrement, handleDecrement } = useCounter(0);

  return (
    <>
      <h3>Counter <small>{ counter }</small></h3>
      <button
        className="btn btn-primary"
        onClick={ () => handleIncrement(1) }
      >
        +1
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={ () => handleDecrement() }
      >
        -1
      </button>
    </>
  )
}
