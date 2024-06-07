import { useState } from "react"

const CheckboxInput = () => {
    const frames = ['react', 'angular','vue', 'svelte']
    const [hello, setHello] = useState(false)
    const [framework, setFramework] = useState('react')
    const handleCheck=(e)=>{
    
         setHello(e.target.checked)
         console.log(hello)
         console.log(e.target.checked)
    }
    const handleFramework=(e)=>{
        console.log(e.target.value)
        setFramework(e.target.value)
    }
  return (
    <div className="m-5">
      <label htmlFor="test">Check</label>
      <input type="checkbox" id="test" onChange={handleCheck} checked={hello} />
      <p>hello</p>
      {hello ? 'Hello' : 'Hi'}
      <div>
        <select name="framework" id="framework" value={framework} onChange={handleFramework}>
            {frames.map((frame,index)=>{
                return <option  key={index} >{frame}</option>
            })}
        </select>
      </div>
    </div>
  )
}
export default CheckboxInput