import { useScramble } from "./ScrambleText.hooks"
import type { ScrambleTextProps } from "./ScrambleText.types"

const ScrambleText = ({
	text,
	speed = 30,
	iterationPerCharacter = 1,
	enabled = true,
}: ScrambleTextProps) => {
	const scrambleText = useScramble({
		text,
		speed,
		iterationPerCharacter,
		enabled,
	})

	return <span suppressHydrationWarning>{scrambleText}</span>
}

export default ScrambleText
