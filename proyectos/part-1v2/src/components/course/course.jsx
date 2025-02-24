import Header from "./header";
import Content from "./content";
import Total from "./total";
export default function Course({ course }) {
	return (
		<>
			<Header title={course.name} />
			<Content content={course.parts} />
			<Total parts={course.parts} />
		</>
	);
}
