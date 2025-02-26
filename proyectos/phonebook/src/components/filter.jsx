export default function Filter({ filter, setFilter }) {
	const handleChangeFilter = (e) => setFilter(e.target.value);
	return (
		<section>
			<label htmlFor="filter">Filter shown with</label>
			<input
				id="filter"
				type="text"
				placeholder="ar"
				value={filter}
				onChange={handleChangeFilter}
			/>
		</section>
	);
}
