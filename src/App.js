import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [kites, updateKites] = useState([])
	useEffect(() => {
		axios.get(
			`${process.env.REACT_APP_API_URL}/kites`
		).then(x => updateKites(x.data))
	}, [])
	return (
		<div className="App">
    	<header className="App-header">
    		<p>
        		{ kites.map(k => <Kite {...k} />)}
        	</p>
    	</header>
    	</div>
	);
}

export default App;

const Kite = (props) => (
	<p>
		Brand: {props.brand} &nbsp;
		Model: {props.model} &nbsp;
		Year: {props.year} &nbsp;
		Size: {props.size} meters squared &nbsp;
		Price: ${props.price / 100} &nbsp;
		Location: {props.address}, {props.city}, {props.country} &nbsp;&nbsp;
		{!!props.notes ? `Notes: ${props.notes} ` : 'No notes'}
	</p>
)