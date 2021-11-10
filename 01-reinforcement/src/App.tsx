// import { BasicTypes } from "./typescript/BasicTypes"
// import { ObjectLiterals } from "./typescript/ObjectLiterals"
// import { Functions } from "./typescript/Functions"
// import { Counter } from "./components/Counter"

import { CounterWithHook } from "./components/CounterWithHook"

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción React / TS</h1>
      <hr />
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <Functions /> */}
      {/* <Counter /> */}
      <CounterWithHook />
    </div>
  )
}
export default App