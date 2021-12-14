import style from "./ButtonsAdditional.module.css";
import ButtonReset from "../reset/ButtonReset";
import ButtonAction from "../action/ButtonAction";

function ButtonsAdditional(props) {
	return (
		<>
			<div className={style.buttonsAdditional}>
				<ButtonAction action="%" {...props} />
				<ButtonReset {...props} />
			</div>
		</>
	);
}

export default ButtonsAdditional;