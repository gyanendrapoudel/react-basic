import { useState } from "react"

const data = [
  { name: 'Bob', id: 1 },
  { name: 'Jackson', id: 2 },
  { name: 'Peter', id: 3 },
  { name: 'Mark', id: 4 },
]

const UseReducer = () => {
 const [users, setUsers] = useState(data)

 const handleRemoveItem =(id)=>{
   const newUsers = users.filter((user)=>user.id!==id)
   setUsers(newUsers) 
 }

 const handleClearAll = ()=>{
    setUsers([])
 }
 const handleReset = ()=>{
    setUsers(data)
 }

  return (
    <div className="mt-3 text-center">
      {users.map((user, index) => {
        const {id, name} = user
        return (
          <div key={index} className="fw-bolder  my-3 ">
            <p className="">{name}</p>
            <button className="btn btn-primary" onClick={()=>handleRemoveItem(id)}>Remove</button>
          </div>
        )
      })}
        {users.length>0?
      <button className="btn btn-danger mt-3 w-25" onClick={handleClearAll}>Clear All</button>:
      <button className="btn btn-success mt-3 w-25" onClick={handleReset}>Reset</button>

      }
    </div>
  )
}
export default UseReducer
