import style from "./ButtonReset.module.css";

function ButtonReset({ reset }) {
	return (
		<button className={style.reset} onClick={reset}>AC</button>
	);
}

export default ButtonReset;