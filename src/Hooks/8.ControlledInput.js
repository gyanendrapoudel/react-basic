import { useState } from "react"

const ControlledInput = () => {
  const [user, setUser] = useState({})
  const handleChange=(e)=>{
    const {name,  value} = e.target
    setUser({...user, [name]:value})
    console.log(user)
  }
  return (
    <div className=" card p-3">
      <form action="">
      
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name='password'
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
      
      </form>
    </div>
  )
}
export default ControlledInput