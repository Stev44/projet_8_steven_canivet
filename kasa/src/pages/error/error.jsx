import './error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h1 className="error_title">404</h1>
      <p className="error_content">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error_home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
