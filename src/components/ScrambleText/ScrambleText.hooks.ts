import { useEffect, useState } from "react"

import type { ScrambleTextProps } from "./ScrambleText.types"
import { scramble } from "./ScrambleText.utils"

export const useScramble = ({
	text,
	speed,
	iterationPerCharacter,
	enabled,
}: ScrambleTextProps) => {
	const [scrambledWord, setScrambledWord] = useState(
		scramble({ iterations: 0, text }),
	)

	useEffect(() => {
		if (!enabled) return
		let iterations = 0

		const interval = setInterval(() => {
			if (iterations >= text.length) clearInterval(interval)

			setScrambledWord(scramble({ iterations, text }))

			iterations += 1 / (iterationPerCharacter || 3)
		}, speed || 30)
	}, [text, iterationPerCharacter, speed, enabled])

	return scrambledWord
}
