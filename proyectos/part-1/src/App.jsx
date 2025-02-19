import Header from "./components/header";
import Content from "./components/content";
import Total from "./components/total";
function App() {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header title={course} />
			<Content
				text={part1}
				text1={part2}
				text2={part3}
				exercize={exercises1}
				exercize1={exercises2}
				exercize2={exercises3}
			/>
			<Total
				text={"Number of exercises"}
				total={exercises1 + exercises2 + exercises3}
			/>
		</div>
	);
}

export default App;
