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
            <main>
                {kites.map((k) => <Kite {...k} /> )}
            </main>
			<nav>
				<Link to="/">Home</Link>
			</nav>
        </div>
    );
};

const handleSubmit = async (event) => {
	console.log(
		await axios.post(
			`${process.env.REACT_APP_API_URL}/signup`,
			{
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				password: document.getElementById('password').value
			}
		)
	)
};

const SignUp = () => (
    <div>
        <form onSubmit={handleSubmit}>
            Name:&nbsp;
            <input id="name" placeholder="John Doe" />
            <br />
            <br />
            Email*:&nbsp;
            <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                required
            />
            <br />
            <br />
            Password*:&nbsp;
            <input
                type="password"
                id="password"
                required
				placeholder='Password123'
                pattern="(?=^.{8,}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$"
            />
            <br />
            (Must have a capital letter, a lowercase letter and a number)
            <br />
            <br />
            <input
				type="submit"
				value="Sign up"
			/>
        </form>
        <br />
        <br />
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