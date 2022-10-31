import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from "./components/home";
import Kites from "./components/kites";
import SignUp from "./components/signUp";
import AddKite from "./components/addKite";

const App = () => (
    <div className="App">
        <h1>Welcome to kite surfing client</h1>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="kites" element={<Kites />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="addkite" element={<AddKite />} />
        </Routes>
		<br/>
		<nav>
		    <Link to="/">Home</Link> &nbsp;
			<Link to="/kites">Available Kites</Link> &nbsp;
			<Link to="/signup">Sign Up</Link> &nbsp;
			<Link to="/addkite">Add a Kite</Link>
		</nav>
    </div>
);

export default App;