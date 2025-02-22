import { useState } from "react";

function Btn({ text, handleClick }) {
	return <button onClick={handleClick}>{text}</button>;
}
function BlockQuote({ anecdotes, votes, index }) {
	return (
		<>
			<blockquote>"{anecdotes[index]}"</blockquote>
			<p>with: {votes[index]} votes</p>
		</>
	);
}
const anecdotes = [
	"If it hurts, do it more often.",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	"The only way to go fast, is to go well.",
];

const votesArr = new Array(anecdotes.length).fill(0);

function App() {
	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(votesArr);

	const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length);

	const handleClick = () => setSelected(getRandomIndex());

	const handleClickVote = () => {
		const updateVotes = [...votes];
		updateVotes[selected]++;
		setVotes(updateVotes);
	};

	const maxVotes = Math.max(...votes);
	const indexOfMax = votes.indexOf(maxVotes);

	return (
		<>
			<section>
				<h1>Anecdote of the day</h1>
				<BlockQuote anecdotes={anecdotes} votes={votes} index={selected} />
				<div className="btn-container">
					<Btn handleClick={handleClickVote} text={"vote"} />
					<Btn handleClick={handleClick} text={"Next anecdote"} />
				</div>
			</section>
			<section>
				<h2>Anecdote with most votes</h2>
				<BlockQuote anecdotes={anecdotes} votes={votes} index={indexOfMax} />
			</section>
		</>
	);
}

export default App;
