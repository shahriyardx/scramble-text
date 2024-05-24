import { type ComponentProps, useEffect, useState } from "react"

import type { ScrambleTextProps } from "./ScrambleText.types"
import { scramble } from "./ScrambleText.utils"

type Props = ComponentProps<"span"> & ScrambleTextProps

export const useScramble = ({
	text,
	speed,
	iterationPerCharacter,
	enabled,
	characters,
}: Props) => {
	const [scrambledWord, setScrambledWord] = useState(
		scramble({ iterations: 0, text, characters }),
	)

	useEffect(() => {
		if (!enabled)
			return setScrambledWord(scramble({ iterations: 0, text, characters }))

		let iterations = 0

		const interval = setInterval(() => {
			if (iterations >= text.length) clearInterval(interval)
			setScrambledWord(scramble({ iterations, text, characters }))
			iterations += 1 / (iterationPerCharacter || 3)
		}, speed || 30)
	}, [text, iterationPerCharacter, speed, enabled, characters])

	return scrambledWord
}
