import style from "./ButtonsBasic.module.css";
import ButtonAction from "../action/ButtonAction";

function MainActions(props) {
	return (
		<>
			<div className={style.buttonsBasic}>
				<ButtonAction action="/" {...props} />
				<ButtonAction action="*" {...props} />
				<ButtonAction action="-" {...props} />
				<ButtonAction action="+" {...props} />
			</div>
		</>
	);
}

export default MainActions;