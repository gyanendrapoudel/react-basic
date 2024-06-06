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
  const handleRemove=(id)=>{
  const filteredUsers = users.filter((user,index)=>index!==id) 
  setUsers(filteredUsers) 
  console.log('users', users)
  console.log("filter",filteredUsers)
  
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
      {users.length>0?<User users={users} handleRemove={handleRemove} />:''}
    </>
  )
}


export default ControlledInput

  const User = ({users, handleRemove})=>{
  return (
    <div className="p-5">
      <h4>User Lists</h4>
      <ul>
        <li>
          <h5>Email Password details</h5>
        </li>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <p>
                <strong>User Name:</strong> {user.email} <br />
                <strong>Password:</strong> {user.password}
              </p>

              <button className="btn btn-primary mb-2" onClick={()=>handleRemove(index)}>Remove</button>
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}

