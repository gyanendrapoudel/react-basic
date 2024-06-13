import { useState } from "react"
import Navbar from "../components/Navbar"
const ContextAPI = () => {
    const [user, setUser] = useState({name:"Gyanendra"})
    const handleLogout= ()=>{
        if (!user) {
          setUser({ name: 'Gyanendra' })
          return
        }
        setUser(null)
        
    }
  return (
    <div>
        <Navbar handleLogout={handleLogout} user={user}/>
    </div>
  )
}
export default ContextAPI