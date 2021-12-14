import style from "./ButtonNumber.module.css";

function updateValue(number, value, setValue) {
	const hasPoints = value.includes(".");
	const checkPoint = (number !== "." || !hasPoints);
	const checkValueZero = value == "0" && (number !== "0" && number !== ".");

	if (checkValueZero) {
		setValue(`${number}`);
	} else if (checkPoint) {
		setValue(`${value}${number}`);
	}
}

function ButtonNumber({ number, value, setValue }) {
	return (
		<button className={style.buttons} onClick={() => { updateValue(number, value, setValue) }}>{number}</button>
	);
}

export default ButtonNumber;
