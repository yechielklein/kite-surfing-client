import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./components/home";
import Kites from "./components/kites";
import SignUp from "./components/signUp";

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

export default App;