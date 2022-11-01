import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    const handleSubmit = async () => (
        (await axios.post(
			`${process.env.REACT_APP_API_URL}/signup`,
			{
				name,
				email,
				password
			}
		)).data
	);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name: &nbsp;
                <input
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => updateName(e.target.value)}
                />
                <br />
                <br />
                Email*: &nbsp;
                <input
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => updateEmail(e.target.value)}
                    required
                />
                <br />
                <br />
                Password*:&nbsp;
                <input
                    type="password"
                    placeholder="Password123"
                    value={password}
                    onChange={(e) => updatePassword(e.target.value)}
                    required
                    pattern="(?=^.{8,}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$"
                />
                <br />
                (Must have at least 8 characters, a capital letter, a lowercase letter and a number)
                <br />
                <br />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default SignUp;
