import { createContext,  useState } from "react"
import Navbar from "../components/Navbar"

export const NavContext = createContext()
    
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

    <NavContext.Provider value={{user, handleLogout}}>
        <Navbar />
    </NavContext.Provider>
  )
}
export default ContextAPI