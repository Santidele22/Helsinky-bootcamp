import Part from "./part";
export default function Content({ content }) {
	return (
		<>
			{content?.map((e) => (
				<Part name={e.name} exercises={e.exercises} key={e.id} />
			))}
		</>
	);
}
