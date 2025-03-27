import './notFound.css'

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>Błąd 404</h1>
      <p>Nie znaleziono strony</p>
      <Link to={"/"}>Wróć do głównej</Link>
    </div>
  )
}

export default NotFound