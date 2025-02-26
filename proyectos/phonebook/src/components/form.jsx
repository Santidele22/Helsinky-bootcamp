import { useState } from "react";
import { existingName } from "../utils/services";

export default function Form({ person, setPerson }) {
	const [newPerson, setNewPerson] = useState("");
	const [newPhoneNumber, setNewPhoneNumber] = useState("");

	const handleChangeName = (e) => setNewPerson(e.target.value);
	const handleChangeNumber = (e) => setNewPhoneNumber(e.target.value);

	const addPerson = (e) => {
		e.preventDefault();

		if (existingName(person, newPerson)) {
			setNewPerson("");
			return;
		}

		const personObj = {
			id: person.length + 1,
			name: newPerson,
			phoneNumber: newPhoneNumber,
		};

		setPerson(person.concat(personObj));
		setNewPerson("");
		setNewPhoneNumber("");
	};

	return (
		<form onSubmit={addPerson}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					placeholder="Enter name"
					onChange={handleChangeName}
					value={newPerson}
				/>
			</div>
			<div>
				<label htmlFor="phone">PhoneNumber</label>
				<input
					id="phone"
					placeholder="Enter phone number"
					onChange={handleChangeNumber}
					value={newPhoneNumber}
				/>
			</div>
			<div>
				<button type="submit">ADD</button>
			</div>
		</form>
	);
}
