import Navlinks from "./Navlinks"
const Navbar = ({handleLogout, user}) => {
  return (
    <nav>
      <Navlinks handleLogout={handleLogout} user={user}/>
    </nav>
  )
}
export default Navbar