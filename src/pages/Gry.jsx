// import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import "./gry.css"

// router
import { Link } from "react-router-dom"

function Gry() {
	// dummy test data (hardcoded)
	const games = [
		{ id: 1, title: "Dead Space" },
		{ id: 2, title: "Battlefield V" },
		{ id: 3, title: "Doom" },
	]

	return (
		<div className='games'>
			{/* <Sidebar /> */}
			<Navbar />
			<div>
				<h2>games list</h2>
				{games.map(game => (
					<div className='games-showcase' key={game.id}>
						<Link to={`/gry/${game.id}`}>
							<p>{game.title}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Gry
