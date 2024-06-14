import { type } from "@testing-library/user-event/dist/type"
import { useReducer, useState } from "react"

const data = [
  { name: 'Bob', id: 1 },
  { name: 'Jackson', id: 2 },
  { name: 'Peter', id: 3 },
  { name: 'Mark', id: 4 },
]
const defaultState = {
    users:data,
}
const reducer =(state, action)=>{
 if (action.type === 'CLEAR_ALL') {
   return { ...state, users: [] }
 }
 if(action.type ==="RESET"){
   
    return {...state, users:data}
 }
 if(action.type==="REMOVE_ITEM"){
    const {id} = action.payload
    const newUsers = state.users.filter((user) => user.id !== id)
    return {...state, users:newUsers}
 }
}

const UseReducer = () => {
 const [state, dispatch ] = useReducer(reducer, defaultState)

 const handleRemoveItem =(id)=>{
    dispatch({ type: 'REMOVE_ITEM' , payload:{id}})
   
 }

 const handleClearAll = ()=>{
    dispatch({type:"CLEAR_ALL"})
 }
 const handleReset = ()=>{
    dispatch({type:"RESET"})
 }

  return (
    <div className="mt-3 text-center">
        {console.log(state)}
      {state.users.map((user, index) => {
        const {id, name} = user
        return (
          <div key={index} className="fw-bolder  my-3 ">
            <p className="">{name}</p>
            <button className="btn btn-primary" onClick={()=>handleRemoveItem(id)}>Remove</button>
          </div>
        )
      })}
        {state.users.length>0?
      <button className="btn btn-danger mt-3 w-25" onClick={handleClearAll}>Clear All</button>:
      <button className="btn btn-success mt-3 w-25" onClick={handleReset}>Reset</button>

      }
    </div>
  )
}
export default UseReducer
