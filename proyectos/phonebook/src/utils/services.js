const existingName = (arr, name) => {
	const existPerson = arr.some(
		(person) => person.name.toLowerCase() === name.toLowerCase()
	);
	if (existPerson) alert("No se permiten nombres repetidos!");
	return existPerson;
};

const filteredPerson = (arr, value) => {
	const filter = arr.filter((e) =>
		e.name.toLowerCase().includes(value.toLowerCase())
	);
	return filter;
};

export { existingName, filteredPerson };
