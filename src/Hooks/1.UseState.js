import { useState } from "react"

const User=()=>{
const lastName = 'Poudel'
const [counter, setCounter] = useState(5)

return (
  <div>
    <h3>Hello from</h3>
    <Name lName={lastName} />
    <h3>Counter = {counter}</h3>
    <button
      onClick={() => {
        setCounter(counter + 1)
      }}
    >
      +
    </button>
    <button
      onClick={() => {
        setCounter(counter - 1)
      }}
    >
      -
    </button>
  </div>
)
}

const Name = ({ lName, children }) => {
  return (
    <div>
      <h4>
         Gyanendra {lName} {children}
      </h4>
    </div>
  )
 }
export default User
