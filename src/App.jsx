import { useState } from "react"
import "./App.css"

//components
import Sidebar from "./components/Sidebar"

//router
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Gry from "./pages/Gry"
// import Home from "./pages/Home"

function App() {
	return (
		<>
			<div className="app">
        <Sidebar />
				{/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gry" element={<Gry />} />
          </Routes>
				</BrowserRouter> */}
			</div>
		</>
	)
}

export default App
