import style from "./HistoryCalculations.module.css";

function HistoryCalculations({ history }) {
	return (
		<div className={style.historyCalculations}>
			{history}
		</div>
	);
}

export default HistoryCalculations;