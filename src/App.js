import './App.css';
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Footer/LastPage';
import Login from './Components/SignUp/Login';
import Forgot from './Components/SignUp/Forgot';
import SignUp from './Components/SignUp/SignUp';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Questions from './Components/Question/Questions';
import Courses from './Components/Courses/Courses';
import Event from './Components/Events/Event';
import Galary from './Components/Gallery/Galary';

import { Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/questions" element={<Questions />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot" element={<Forgot />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/event" element={<Event />} />
					<Route path="/gallery" element={<Galary />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
