import axios from 'axios';
import { useState } from 'react';

const AddKite = () => {
    const [sellerId, updateSellerId] = useState('');
    const [price, updatePrice] = useState('');
    const [brand, updateBrand] = useState('');
    const [model, updateModel] = useState('');
    const [year, updateYear] = useState('');
    const [size, updateSize] = useState('');
    const [country, updateCountry] = useState('');
    const [city, updateCity] = useState('');
    const [address, updateAddress] = useState('');
    const [notes, updateNotes] = useState('');

    const handleSubmit = async () => (
        (await axios.post(
			`${process.env.REACT_APP_API_URL}/addKite`,
			{
				sellerId: Number(sellerId),
				price: Math.floor(Number(price) * 100),
				brand,
				model,
				year: Number(year),
				size: Number(size),
				country,
				city,
				address,
				notes
			}
		)).data
	);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                User ID*: &nbsp;
                <input
                    value={sellerId}
                    onChange={(e) => updateSellerId(e.target.value)}
                    pattern="\d+"
                    required
                />
                <br /> <br />
                Price*: &nbsp;
                <input
                    value={price}
                    onChange={(e) => updatePrice(e.target.value)}
                    pattern="\d+"
                    required
                />
                <br /> <br />
                Brand*: &nbsp;
                <input
                    value={brand}
                    onChange={(e) => updateBrand(e.target.value)}
                    required
                />
                <br /> <br />
                Model*: &nbsp;
                <input
                    value={model}
                    onChange={(e) => updateModel(e.target.value)}
                    required
                />
                <br /> <br />
                Year*: &nbsp;
                <input
                    value={year}
                    onChange={(e) => updateYear(e.target.value)}
                    pattern="\d+"
                    required
                />
                <br /> <br />
                Size*: &nbsp;
                <input
                    value={size}
                    onChange={(e) => updateSize(e.target.value)}
                    pattern="\d+"
                    required
                />
                <br /> <br />
                Country*: &nbsp;
                <input
                    value={country}
                    onChange={(e) => updateCountry(e.target.value)}
                    required
                />
                <br /> <br />
                City*: &nbsp;
                <input
                    value={city}
                    onChange={(e) => updateCity(e.target.value)}
                    required
                />
                <br /> <br />
                Address*: &nbsp;
                <input
                    value={address}
                    onChange={(e) => updateAddress(e.target.value)}
                    required
                />
                <br /> <br />
                Notes: &nbsp;
                <input
                    value={notes}
                    onChange={(e) => updateNotes(e.target.value)}
                />
                <br /> <br />
                <input type="submit" value="Add Kite" />
            </form>
        </div>
    );
};

export default AddKite;
