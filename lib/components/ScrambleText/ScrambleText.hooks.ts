import { useEffect, useState } from "react";

import { scramble } from "./ScrambleText.utils";
import type { ScrambleTextProps } from "./ScrambleText.types";

export const useScramble = ({
	text,
	speed,
	iterationPerCharacter,
}: ScrambleTextProps) => {
	const [scrambledWord, setScrambledWord] = useState(
		scramble({ iterations: 0, text }),
	);

	useEffect(() => {
		let iterations = 0;
		console.log(iterations);
		const interval = setInterval(() => {
			if (iterations >= text.length) clearInterval(interval);

			setScrambledWord(scramble({ iterations, text }));

			iterations += 1 / (iterationPerCharacter || 3);
		}, speed || 30);
	}, [text, iterationPerCharacter, speed]);

	return scrambledWord;
};
