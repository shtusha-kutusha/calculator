import style from "./Screen.module.css";

function updateValue(event, value, setValue) {
	let newValue;
	if (event.nativeEvent.inputType === "deleteContentBackward") {
		const stringValue = `${value}`;
		const stringLength = stringValue.length;
		const lastCharacter = stringLength - 1;
		newValue = stringLength > 1 ? stringValue.slice(0, lastCharacter) : "0";
		setValue(newValue);
	} else {
		const hasPoints = value.includes(".");
		const number = parseInt(event.nativeEvent.data, 10);
		const isNumber = number >= 0 && number <= 9;
		if (isNumber || (event.nativeEvent.data === "." && !hasPoints)) {
			newValue = `${value}${event.nativeEvent.data}`;
			setValue(newValue);
		}
	}
}

function Screen({ value, setValue }) {
	return (
		<input className={style.screen} type="text" value={value} onChange={(event) => { updateValue(event, value, setValue) }} />
	);
}

export default Screen;
