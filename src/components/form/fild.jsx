import './fild.css';

const Fild = (props) => {
	return (
		<div>
			<input type="text" placeholder={props.placeholder} className='forminput'/>
		</div>
	);
}

export default Fild;
