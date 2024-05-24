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
	scrambleOnDisable,
}: Props) => {
	const [scrambledWord, setScrambledWord] = useState(
		scramble({ iterations: 0, text, characters }),
	)

	useEffect(() => {
		if (!enabled)
			return scrambleOnDisable
				? setScrambledWord(scramble({ iterations: 0, text, characters }))
				: undefined

		let iterations = 0

		const interval = setInterval(() => {
			if (iterations >= text.length) clearInterval(interval)
			setScrambledWord(scramble({ iterations, text, characters }))
			iterations += 1 / (iterationPerCharacter || 3)
		}, speed || 30)
	}, [
		text,
		iterationPerCharacter,
		speed,
		enabled,
		characters,
		scrambleOnDisable,
	])

	return scrambledWord
}
