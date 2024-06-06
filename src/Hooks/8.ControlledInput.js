import { useState } from "react"

const ControlledInput = () => {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const handleChange=(e)=>{
    const {name,  value} = e.target
    setUser({...user, [name]:value})
    console.log(user)
    console.log(users)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(user){
      setUsers([...users, user])
    }
     
    console.log(users.length, users)
  }
  return (
    <>
      <div className=" card p-3">
        <h4>Add User</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
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
              name="password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {users.length>0?<User users={users} />:''}
    </>
  )
}


export default ControlledInput

  const User = ({users})=>{
  return (<div className="p-5">
   <h4>User Lists</h4>
   <ul>
    <li>Email Password</li>
    {users.map((user, index)=>{
      return <li key={index}>User Name: {user.email} Password : {user.password}</li>
    })}
   </ul>
  </div>)
}

