import { useContext } from "react"
import {NavContext} from '../Hooks/10.ContextAPI'
const Navlinks = () => {
    const {user, handleLogout} = useContext(NavContext)
  return (
    <ul className="p-3 d-flex justify-content-evenly">
      <li className="text-danger">Home</li>
      <li>
        <input type="text" name="" id="" placeholder="search" />
      </li>
      <li className="text-success">
        Hello there  {user?.name}
        <button className="btn btn-primary" onClick={handleLogout}>
          {' '}
          {user ? 'Logout' : 'Login'}
        </button>
      </li>
    </ul>
  )
}
export default Navlinks