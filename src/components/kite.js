const Kite = (props) => (
    <p>
        Brand: {props.brand} &nbsp;
		Model: {props.model} &nbsp;
		Year: {props.year} &nbsp;
		Size: {props.size} meters squared &nbsp;
        Price: ${props.price / 100} &nbsp;
		Location:{`${props.address}, ${props.city}, ${props.country}`} &nbsp; &nbsp;
        {props.notes ? `Notes: ${props.notes} ` : 'No notes'}
    </p>
);

export default Kite;
