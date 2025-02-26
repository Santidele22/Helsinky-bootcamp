import { useState } from "react";

function App() {
	const [person, setPerson] = useState([
		{
			id: 1,
			name: "Arto Hellas",
		},
	]);
	const [newPerson, setNewPerson] = useState("");

	const addPerson = (e) => {
		e.preventDefault();

		if (existingName(person, newPerson)) {
			setNewPerson("");

			return;
		}

		const personObj = {
			id: person.length + 1,
			name: newPerson,
		};

		setPerson(person.concat(personObj));
		setNewPerson("");
	};
	const handleChange = (e) => setNewPerson(e.target.value);

	const existingName = (arr, name) => {
		const existPerson = arr.some(
			(person) => person.name.toLowerCase() === name.toLowerCase()
		);
		if (existPerson) alert("No se permiten nombres repetidos!");
		return existPerson;
	};

	return (
		<>
			<h2>PhoneBook</h2>
			<form onSubmit={addPerson}>
				<div className="">
					name:{" "}
					<input
						placeholder={person[0].name}
						onChange={handleChange}
						value={newPerson}
					/>
				</div>
				<div className="">
					<button type="submit">ADD</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<div className="">
				{person?.map((p) => (
					<li key={p.id}>{p.name}</li>
				))}
			</div>
		</>
	);
}

export default App;
