//styles
import './sidebar.css'
import plus from '../assets/plus.png'

//router
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="profile">
            <img className='profile__picture' src="" alt="" />
            <p className="profile__user">Daniel</p>
        </div>
        <div className="add-new">
            {/* create link */}
            <span>Dodaj</span>
            <img className='plus-img' src={plus} alt="" />
        </div>
        <div className="collection">
          <h3 className='sidebar-title'>gry</h3>
              <ul className="games-list">
                <li className='list-item'>Playstation</li>
                <li className='list-item'>Nintendo</li>
                <li className='list-item'>Steam</li>
              </ul>
          <h3 className='sidebar-title'>komiksy</h3>
            <div className="comics-list">
              <p className='list-item'>komiksy</p>
            </div>
        </div>
        <div className="favourites">
            <h3 className='sidebar-title'>ulubione</h3>
            <div className="fav">
              <ul className="games-list">
                <li className='list-item'>gry</li>
                <li className='list-item'>komiksy</li>
              </ul>
            </div>
        </div>
    </div>
  )
}
