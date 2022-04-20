import React, { useState } from 'react'

function ButtonWithHooks() {
    const[key1, setKey1] = useState("This is the default state of a function component.")
    const[key2, setKey2] = useState(0)
  return (
    <>
        <div>{key1}</div>
        <div>{key2}</div>
        <button onClick={() => setKey1("This is not the default state of a function component.")}>ButtonWithHooks</button>
        <button onClick={() => setKey2(17)}>ButtonWithHooks2</button>
    </>  

  )
}

export default ButtonWithHooks