import style from "./ButtonsAdvanced.module.css";
import ButtonAction from "../action/ButtonAction";
import ButtonRad from "../rad/ButtonRad";

function ButtonsActions(props) {
	return (
		<>
			<div className={style.buttonsAdvanced}>
				<ButtonRad value={true} {...props} />
				<ButtonRad value={false} {...props} />
				<ButtonAction action="+/-" {...props} />
				<ButtonAction action="sqrt" {...props} />
				<ButtonAction action="|a|" {...props} />
				<ButtonAction action="²" {...props} />
				<ButtonAction action="ln" {...props} />
				<ButtonAction action="log" {...props} />
				<ButtonAction action="e" {...props} />
				<ButtonAction action="Pi" {...props} />
				<ButtonAction action="sin" {...props} />
				<ButtonAction action="cos" {...props} />
				<ButtonAction action="tan" {...props} />
				<ButtonAction action="EXP" {...props} />
				<ButtonAction action="x!" {...props} />
			</div>
		</>
	);
}

export default ButtonsActions;