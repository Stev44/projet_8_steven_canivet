import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './header.scss'

function Header() {
    return (
      <nav className="nav">
        <div>
          <img className="nav_image" src={Logo} alt="Logo Kasa" />
        </div>
        <div className="nav_link">
          <Link to={'/'}>Accueil</Link>
          <Link to={'/about'}>À propos</Link>
        </div>
      </nav>
    )
  }
  
  export default Header
  