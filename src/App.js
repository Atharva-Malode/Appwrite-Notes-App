import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Profile from './components/Profile';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/Profile" element={<Profile />} />
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;