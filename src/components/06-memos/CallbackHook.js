
import React, { useState } from 'react'

import '../02-useEffect/effect.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>useCallback Hook</h1>
      <hr />


    </div>
  )
}
