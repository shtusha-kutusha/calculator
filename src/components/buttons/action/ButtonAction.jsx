import style from "./ButtonAction.module.css";

function updateAction(action, setAction) {
	setAction(action);
}

function ButtonAction({ action, setAction }) {
	return (
		<button className={style.actions} onClick={() => { updateAction(action, setAction) }}>{action}</button>
	);
}

export default ButtonAction;