import style from "./ButtonsTotal.module.css";
import ButtonResult from "../result/ButtonResult";

function ButtonsTotal(props) {
	return (
		<>
			<div className={style.buttonsTotal}>
				<ButtonResult {...props} />
			</div>
		</>
	)
}

export default ButtonsTotal;