import { Link } from 'react-router-dom';

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

export default Home;
