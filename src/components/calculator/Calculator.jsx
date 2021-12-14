import { useEffect, useState } from "react";
import style from "./Calculator.module.css";
import { add, subtract, multiply, divide, opposite, extractSquareRoot, calculateAbsolute, calculateSquare, calculateLogarithm, calculateEulers, calculatePi, calculateSin, calculateCos, calculateTan, calculateExp, calculatePercentage, factorial, calculateNaturalLogarithm, radiansToDegrees, degreesToRadians } from "../../calculate";
import Screen from "../screen/Screen";
import ButtonsAdvanced from "../buttons/advanced/ButtonsAdvanced";
import ButtonsNumbers from "../buttons/numbers/ButtonsNumbers";
import ButtonsBasic from "../buttons/basic/ButtonsBasic";
import ButtonsAdditional from "../buttons/additional/ButtonsAdditional";
import ButtonsTotal from "../buttons/total/ButtonsTotal";
import HistoryCalculations from "../historyCalculations/HistoryCalculations";

const ACTIONS_REQUIRING_ONE_VALUE = {
	"+/-": opposite,
	"sqrt": extractSquareRoot,
	"|a|": calculateAbsolute,
	"e": calculateEulers,
	"x!": factorial,
	"EXP": calculateExp,
	"sin": calculateSin,
	"cos": calculateCos,
	"tan": calculateTan,
	"log": calculateLogarithm,
	"Pi": calculatePi,
	"²": calculateSquare,
	"ln": calculateNaturalLogarithm,
	"rad": radiansToDegrees,
	"deg": degreesToRadians,
}

const ACTIONS_REQUIRING_TWO_VALUE = {
	"+": add,
	"-": subtract,
	"*": multiply,
	"/": divide,
	"%": calculatePercentage,
};

function Calculator() {
	const [value1, setValue1] = useState("0");
	const [value2, setValue2] = useState("0");
	const [rad, setRad] = useState(true);
	const [action, setAction] = useState(null);
	const [history, setHistory] = useState("");

	useEffect(() => {
		if (action in ACTIONS_REQUIRING_ONE_VALUE) {
			calculateResult();
		}
	}, [action]);

	const isValue1 = action === null;
	const isDisabled = isValue1 || (action === "/" && value2 === "0");
	const value = isValue1 ? value1 : value2;
	const setValue = isValue1 ? setValue1 : setValue2;

	function calculateResult() {
		const calculate = action in ACTIONS_REQUIRING_ONE_VALUE ? ACTIONS_REQUIRING_ONE_VALUE[action] : ACTIONS_REQUIRING_TWO_VALUE[action];
		const numberValue1 = parseFloat(value1);
		const numberValue2 = action in ACTIONS_REQUIRING_ONE_VALUE ? rad : parseFloat(value2);
		const result = calculate(numberValue1, numberValue2);

		if (action in ACTIONS_REQUIRING_ONE_VALUE) {
			setHistory("")
		} else {
			const text = `${history} ${history === "" ? value1 : ""} ${action} ${value2} = ${result}`;
			setHistory(text);
		}

		setValue1(`${result}`);
		setValue2("0");
		setAction(null);
	}

	function reset() {
		setValue1("0");
		setValue2("0");
		setAction(null);
	}

	return (
		<>
			<HistoryCalculations history={history} />
			<Screen value={value} setValue={setValue} />
			<div className={style.calculator}>
				<ButtonsAdvanced isDisabled={isDisabled} setAction={setAction} rad={rad} setRad={setRad} />
				<ButtonsNumbers value={value} setValue={setValue} />
				<ButtonsBasic isDisabled={isDisabled} setAction={setAction} />
				<ButtonsAdditional setAction={setAction} reset={reset} />
				<ButtonsTotal isDisabled={isDisabled} calculateResult={calculateResult} />
			</div>
		</>
	);
}

export default Calculator;