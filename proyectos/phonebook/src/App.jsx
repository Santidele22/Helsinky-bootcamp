import { useState } from "react";
import Form from "./components/form";
import Filter from "./components/filter";
import { filteredPerson } from "./utils/services";
import Person from "./components/person";

function App() {
	const [person, setPerson] = useState([
		{
			id: 1,
			name: "Arto Hellas",
			phoneNumber: "+54 2944-21431",
		},
	]);

	const [filter, setFilter] = useState("");

	const showPerson = filter ? filteredPerson(person, filter) : person;

	return (
		<main>
			<header>
				<h2>PhoneBook</h2>
			</header>
			<Filter filter={filter} setFilter={setFilter} />
			<section>
				<Form person={person} setPerson={setPerson} />
			</section>
			<Person showPerson={showPerson} />
		</main>
	);
}

export default App;
