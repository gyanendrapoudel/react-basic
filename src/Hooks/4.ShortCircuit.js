import { useState } from "react"

const ShortCircuit = ()=>{
    //falsy
    const [text, setText] = useState('')
    //truthy
    const [name, setName] = useState('Gyanendra')
    return (
      <>
        <div className="user-info">
          <h4>Hello: {text && 'world'}</h4> 
          <h4>Hello: {name && 'world'}</h4>
          <h4>Hello: {name && text}</h4>
          <h4>Hello: {'hi' && name}</h4>
          <h4>Hello : {name || 'world'}</h4>
          <h4>Hello : {text || 'world'}</h4>
        </div>
      </>
    )
}
export default ShortCircuit