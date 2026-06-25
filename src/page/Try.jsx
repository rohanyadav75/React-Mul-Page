
import React, { useState } from 'react'

const Try = () => {
    const [state, setState] = useState([0]);
  return (
    <div>
        <button onClick={() => setState([state[0] + 1])}>Click me</button>
    </div>
  )
}

export default Try
