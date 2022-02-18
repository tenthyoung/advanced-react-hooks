// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// const CountContext = React.createContext([0, () => {}]) // see here you can actually set the default context
const CountContext = React.createContext()

const CountProvider = props => {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]} {...props} /> // ? That's weird that you odn't have to wrap it the children and it still works
}

const useCountContext = () => {
  const context = React.useContext(CountContext)
  if (!context)
    throw new Error(`useCountContext must be used within the CountProvider`)
  return context
}

function CountDisplay() {
  const [count] = useCountContext()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCountContext()
  const increment = () => setCount(c => c + 1) // ? so if you just pass the anonymous function
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
