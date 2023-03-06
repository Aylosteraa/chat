import Fild from './fild';
import './form.css';

export const Form = (props) => {
  return (
	<div className={props.className}>
		<header>
			<h2>Sign-in</h2>
		</header>
		<div className="wrapper">
			<Fild placeholder="Login"/>
			<Fild placeholder="Password" />
			<button>Sign-in</button>
		</div>
	</div>
  );
}

