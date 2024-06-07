import { useState } from "react"

const CheckboxInput = () => {
    const [hello, setHello] = useState(false)

    const handleCheck=(e)=>{
    
         setHello(e.target.checked)
         console.log(hello)
         console.log(e.target.checked)
    }
  return (
    <div className="m-5">
        <label htmlFor="test">Check</label>
        <input type="checkbox" id="test" onChange={handleCheck} checked={hello} />
        <p>hello</p>
        {hello?"Hello":"Hi"}
        
    </div>
  )
}
export default CheckboxInput