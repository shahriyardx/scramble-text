import { useScramble } from "./ScrambleText.hooks";
import type { ScrambleTextProps } from "./ScrambleText.types";

const ScrambleText = ({
	text,
	speed = 30,
	iterationPerCharacter = 1,
}: ScrambleTextProps) => {
	const scrambleText = useScramble({ text, speed, iterationPerCharacter });

	return <span suppressHydrationWarning>{scrambleText}</span>;
};

export default ScrambleText;
