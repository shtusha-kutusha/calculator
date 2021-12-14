import style from "./ButtonRad.module.css";

function updateRad(value, setRad) {
	setRad(value);
}

function ButtonRad({ value, rad, setRad }) {
	let isDisabled = value === rad;
	let label = value ? "Rad" : "Deg";
	return (
		<button className={style.rad} onClick={() => { updateRad(value, setRad) }} disabled={isDisabled}>{label}</button>
	);
}

export default ButtonRad;