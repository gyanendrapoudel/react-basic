import { useEffect, useState } from 'react'

const EventListener = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="card ">
        <div className="card-header text-center">Clean Up UseEffect</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <div className="card-text">{toggle && <RandomComponent />}</div>
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
export default EventListener

const RandomComponent = () => {
  useEffect(() => {
    const someFunc =()=>{
        //some Logic
        console.log('some logic')
    };
    window.addEventListener('scroll', someFunc)
    return ()=>window.removeEventListener('scroll', someFunc)
    }
  , [])
  return <div>Event on UseEffect, see on console </div>
}
