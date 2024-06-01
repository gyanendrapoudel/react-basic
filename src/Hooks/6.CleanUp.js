import { useEffect, useState } from "react"

const CleanUp = () => {
    const [toggle , setToggle] = useState(false)
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="card ">
        <div className="card-header text-center">Clean Up UseEffect</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <div className="card-text">
            {toggle && <RandomComponent />}
            </div>
          <a
            href="#"
            className="btn btn-primary pointer "
            onClick={() => setToggle(!toggle)}
          >
            toggle
          </a>
        </div>
      </div>
    </div>
  )
}
export default CleanUp

const RandomComponent = ()=>{
    useEffect(()=>{
        console.log('This is inside use effect')
        const intId = setInterval(()=>{
            console.log('second')
        },1000)
        return ()=>{clearInterval(intId)}
    },[])
    return <div>
        Clean up on see on console
    </div>
}