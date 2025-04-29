import "./navbar.css"
import { Link } from "react-router-dom"

//assets
import game from "../assets/game.png"
import home from "../assets/home.png"
import comic from "../assets/comic.png"
import login from "../assets/login.png"
import logout from "../assets/logout.png"

export default function Navbar() {
	return (
		<nav className="navigation">
			<Link to={"/"} className="navigation__link">
				<img className="navigation__icon" src={home} />
				Domowa
			</Link>
			<Link to={"/gry"} className="navigation__link">
				<img className="navigation__icon" src={game} />
				Gry
			</Link>
			<Link to={"/komiksy"} className="navigation__link">
				<img className="navigation__icon" src={comic} />
				Komiksy
			</Link>
			<Link to={"#"} className="navigation__link">
				<img className="navigation__icon" src={login} />
				logowanie
			</Link>
		</nav>
	)
}

// export default function Sidebar() {
//   return (
//     <div className='sidebar'>
//         <div className="profile">
//             <img className='profile__picture' src="" alt="" />
//             <p className="profile__user">Daniel</p>
//         </div>
//         <div className="add-new">
//             {/* create link */}
//             <span>Dodaj</span>
//             <img className='plus-img' src={plus} alt="" />
//         </div>
//         <div className="collection">
//         <h3 className='sidebar-title'><Link to={'/'} className='list-item-link'>Domowa</Link></h3>
//         </div>
//         <div className="collection">
//           <h3 className='sidebar-title'>gry</h3>
//               <ul className="games-list">
//                 <li className='list-item'><Link to={'/playstation'} className='list-item-link'>Playstation</Link></li>
//                 <li className='list-item'><Link to={'/nintendo'} className='list-item-link'>Nintendo</Link></li>
//                 <li className='list-item'><Link to={'/steam'} className='list-item-link'>Steam</Link></li>
//               </ul>
//           <h3 className='sidebar-title'>komiksy</h3>
//             <div className="comics-list">
//               <p className='list-item'><Link to={'/komiksy'} className='list-item-link'>komiksy</Link></p>
//             </div>
//         </div>
//         <div className="favourites">
//             <h3 className='sidebar-title'>kolekcja</h3>
//             <div className="fav">
//               <ul className="games-list">
//                 <Link className='list-item-link' to={'/gry'}>
//                   <li className='list-item'>gry</li>
//                 </Link>
//                 <Link className='list-item-link' to={'/komiksy'}>
//                   <li className='list-item'>komiksy</li>
//                 </Link>

//               </ul>
//             </div>
//         </div>
//     </div>
//   )
// }
