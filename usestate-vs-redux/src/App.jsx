import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UseStateExample from './useStateExample';
import ReduxExample from './ReduxExample';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<UseStateExample/>} />
				<Route path="/redux-example" element={<ReduxExample/>} />
			</Routes>
		</Router>
	)
}

export default App
