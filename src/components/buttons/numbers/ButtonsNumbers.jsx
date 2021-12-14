import style from "./ButtonsNumbers.module.css";
import ButtonNumber from "../number/ButtonNumber";

function ButtonsNumbers(props) {
	return (
		<>
			<div className={style.buttonsNumbers}>
				<ButtonNumber number={7} {...props} />
				<ButtonNumber number={8} {...props} />
				<ButtonNumber number={9} {...props} />
				<ButtonNumber number={4} {...props} />
				<ButtonNumber number={5} {...props} />
				<ButtonNumber number={6} {...props} />
				<ButtonNumber number={1} {...props} />
				<ButtonNumber number={2} {...props} />
				<ButtonNumber number={3} {...props} />
				<ButtonNumber number={0} {...props} />
				<ButtonNumber number={'.'} {...props} />
			</div>
		</>
	);
}

export default ButtonsNumbers;