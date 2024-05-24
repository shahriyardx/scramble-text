import { ScrambleText } from "../";

const App = () => {
	return (
		<div>
			<ScrambleText text="Hello" speed={30} iterationPerCharacter={1} />
		</div>
	);
};

export default App;
