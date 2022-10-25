import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => (
    <div className="App">
        <h1>Welcome to kite surfing client</h1>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="kites" element={<Kites />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
    </div>
);

const Home = () => (
    <div>
        <main>
            <h2>Welcome to the homepage!</h2>
        </main>
        <nav>
            <Link to="/kites">Kites</Link>
			&nbsp;
            <Link to="/signup">Sign Up</Link>
        </nav>
    </div>
);

const Kites = () => {
    const [kites, updateKites] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/kites`)
            .then((x) => updateKites(x.data));
    }, []);
	return (
        <div className="App-header">
            <p>
                {kites.map((k) => (
                    <Kite {...k} />
                ))}
            </p>
			<nav>
				<Link to="/">Home</Link>
			</nav>
        </div>
    );
}

const SignUp = () => (
    <div>
		<input></input>
        <nav>
            <Link to="/">Home</Link>
			&nbsp;
            <Link to="/kites">Kites</Link>
        </nav>
    </div>
);

const Kite = (props) => (
    <p>
        Brand: {props.brand} &nbsp;
		Model: {props.model} &nbsp;
		Year:{` ${props.year}`} &nbsp;
		Size: {props.size} meters squared &nbsp;
		Price: ${props.price / 100} &nbsp;
		Location: {`${props.address}, ${props.city}, ${props.country}`} &nbsp;&nbsp;
        {props.notes ? `Notes: ${props.notes} ` : 'No notes'}
    </p>
);

export default App;