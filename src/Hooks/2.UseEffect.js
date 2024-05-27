// This has one call back function and one dependency array.
// If dependency array is not provided, it will rerendering every time when the value changes.
// If dependency array is empty then, it will render only one time when the application load.
// If dependency array has arguments, then it will re-render if the arguments changes its value.

import { useEffect, useState } from "react";

const url = "https://api.github.com/users"

const FetchUsers = ()=>{
 const [users, setUsers]  = useState([])

 useEffect(()=>{
    const fetchPeople = async () => {
       try {
       const response = await fetch(url)
       const people = await response.json()
       setUsers(people)
       } catch (error) {
       console.log(error)
       }
    }
  fetchPeople()
   
 },[])
 return (
   <>
     <div className="wrapper">
       <h2 className="title">Github Users</h2>
       <div className="container">
         {users.map((user) => {
           const { id, login, avatar_url, html_url } = user
           return (
             <li key={id}>
               <img src={avatar_url} alt="PP" />
               <div className="user-details">
                 <h4>{login}</h4>
               </div>
             </li>
           )
         })}
       </div>
     </div>
   </>
 )
}
export default FetchUsers;