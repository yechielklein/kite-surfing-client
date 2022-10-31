import axios from 'axios';

const handleSubmit = async () => (
	(await axios.post(
		`${process.env.REACT_APP_API_URL}/addKite`,
		{
			sellerId: Number(document.getElementById('sellerId').value),
			price: Math.floor(Number(document.getElementById('price').value) * 100),
			brand: document.getElementById('brand').value,
			model: document.getElementById('model').value,
			year: Number(document.getElementById('year').value),
			size: Number(document.getElementById('size').value),
			country: document.getElementById('country').value,
			city: document.getElementById('city').value,
			address: document.getElementById('address').value,
			notes: document.getElementById('notes').value
		}
	)).data
);

const AddKite = () => (
    <div>
        <form onSubmit={handleSubmit}>
            User ID*: &nbsp;
            <input id="sellerId" required />
            <br /> <br />
            Price*: &nbsp;
            <input id="price" required />
            <br /> <br />
            Brand*: &nbsp;
            <input id="brand" required />
            <br /> <br />
            Model*: &nbsp;
            <input id="model" required />
            <br /> <br />
            Year*: &nbsp;
            <input id="year" required />
            <br /> <br />
            Size*: &nbsp;
            <input id="size" required />
            <br /> <br />
            Country*: &nbsp;
            <input id="country" required />
            <br /> <br />
            City*: &nbsp;
            <input id="city" required />
            <br /> <br />
            Address*: &nbsp;
            <input id="address" required />
            <br /> <br />
            Notes: &nbsp;
            <input id="notes" />
            <br /> <br />
            <input type="submit" value="Add Kite" />
        </form>
    </div>
);

export default AddKite;
