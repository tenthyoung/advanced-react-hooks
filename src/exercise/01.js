// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(currentState, {type, payload}) {
  if (type === 'INCREMENT') return {count: currentState.count + payload.step}

  throw new Error(`Unsupported action type: ${type}`)
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const handleClick = () => {
    dispatch({type: 'INCREMENT', payload: {step}})
  }

  return <button onClick={handleClick}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
