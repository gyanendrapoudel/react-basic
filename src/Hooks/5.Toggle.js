import { useState } from "react"

const Toggle = ()=>{
    const [alert , setAlert] = useState(true)
    return (
      <div className="container ">

          <div className="card">
            <button className="btn" onClick={() => setAlert(!alert)}>
              Toggle
            </button>
            {alert && (
              <div>
                <p className="text-light text-center bg-danger mx-2 mt-2 rounded-2 py-1">
                  This is alert
                </p>
              </div>
            )}
          </div>
        </div>
    )
}
export default Toggle