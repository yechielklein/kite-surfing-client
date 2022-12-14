import { useEffect, useState } from 'react';
import axios from 'axios';

import Kite from "./kite";

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
                {kites.map((k) => (
                    <Kite {...k} />
                ))}
            </main>
        </div>
    );
};

export default Kites;
