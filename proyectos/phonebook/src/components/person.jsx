export default function Person({ showPerson }) {
	return (
		<section>
			<h2>Numbers</h2>
			<ul>
				{showPerson?.map((p) => (
					<li key={p.id}>
						{p.name}: {p.phoneNumber}
					</li>
				))}
			</ul>
		</section>
	);
}
