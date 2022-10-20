import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, updateMessage] = useState("")
  useEffect(() => {
	axios.post("http://localhost:5000/hi", {hifrom: "usher the chair"}).then(x => updateMessage(x.data))
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
