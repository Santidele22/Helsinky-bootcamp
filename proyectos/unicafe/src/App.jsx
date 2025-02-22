import { useState } from "react";

function BTN({ text, handleClick }) {
	return <button onClick={handleClick}>{text}</button>;
}

function StatisticsText({ text, statistics }) {
	return (
		<p>
			{text}: {statistics}
		</p>
	);
}

function Statistics({ feedback }) {
	const FEEDBACK_VALUES = {
		good: 1,
		neutral: 0,
		bad: -1,
	};

	const HAS_FEEDBACK =
		feedback.bad > 0 || feedback.good > 0 || feedback.neutral > 0;
	const TOTAL_FEEDBACK = feedback.bad + feedback.good + feedback.neutral;

	const AVERAGE =
		(feedback.good * FEEDBACK_VALUES.good +
			feedback.neutral * FEEDBACK_VALUES.neutral +
			feedback.bad * FEEDBACK_VALUES.bad) /
		TOTAL_FEEDBACK;

	const POSITIVE = (feedback.good / TOTAL_FEEDBACK) * 100;

	return (
		<section className="statistics">
			<h2>Statistics</h2>
			{HAS_FEEDBACK ? (
				<>
					<StatisticsText
						text={FEEDBACK_OPTIONS.GOOD}
						statistics={feedback.good}
					/>
					<StatisticsText
						text={FEEDBACK_OPTIONS.NEUTRAL}
						statistics={feedback.neutral}
					/>
					<StatisticsText
						text={FEEDBACK_OPTIONS.BAD}
						statistics={feedback.bad}
					/>
					<StatisticsText text={"ALL"} statistics={TOTAL_FEEDBACK} />
					<StatisticsText text={"AVERAGE"} statistics={AVERAGE} />
					<StatisticsText text={"POSITIVE"} statistics={POSITIVE} />
				</>
			) : (
				<p>No hay estadisticas todavia!</p>
			)}
		</section>
	);
}

const FEEDBACK_OPTIONS = {
	GOOD: "good",
	NEUTRAL: "neutral",
	BAD: "bad",
};

function App() {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const handleClick = (feedbackType) => {
		if (Object.values(FEEDBACK_OPTIONS).includes(feedbackType)) {
			setFeedback((prevFeedback) => ({
				...prevFeedback, // Copia el estado anterior
				[feedbackType]: prevFeedback[feedbackType] + 1, // Incrementa el contador específico
			}));
		} else {
			throw new Error(`El Feedback recibido: ${feedbackType} No es válido!`);
		}
	};

	return (
		<>
			<h1>Give feedback</h1>
			<div className="btn-container">
				<BTN
					handleClick={() => handleClick(FEEDBACK_OPTIONS.GOOD)}
					text={FEEDBACK_OPTIONS.GOOD}
				/>
				<BTN
					handleClick={() => handleClick(FEEDBACK_OPTIONS.NEUTRAL)}
					text={FEEDBACK_OPTIONS.NEUTRAL}
				/>
				<BTN
					handleClick={() => handleClick(FEEDBACK_OPTIONS.BAD)}
					text={FEEDBACK_OPTIONS.BAD}
				/>
			</div>
			<Statistics feedback={feedback} />
		</>
	);
}

export default App;
