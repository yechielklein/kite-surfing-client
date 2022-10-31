import { Link } from "react-router-dom";
import axios from "axios";

const handleSubmit = async () => (
        (await axios.post(
			`${process.env.REACT_APP_API_URL}/signup`,
			{
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				password: document.getElementById('password').value
			}
		)).data
);

const SignUp = () => (
    <div>
        <form onSubmit={handleSubmit} >
            Name: &nbsp;
            <input
				id="name"
				placeholder="John Doe"
			/>
            <br />
            <br />
            Email*: &nbsp;
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
                placeholder="Password123"
                pattern="(?=^.{8,}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$"
            />
            <br />
            (Must have at least 8 characters, a capital letter, a lowercase letter and a number)
            <br />
            <br />
            <input type="submit" value="Sign up" />
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

export default SignUp