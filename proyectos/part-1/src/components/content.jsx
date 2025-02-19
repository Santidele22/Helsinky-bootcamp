import Part from "./part";
export default function Content(props) {
	console.log("Props", props);
	return (
		<>
			<Part text={props.text} exercize={props.exercize} />
			<Part text={props.text1} exercize={props.exercize1} />
			<Part text={props.text2} exercize={props.exercize2} />
		</>
	);
}
