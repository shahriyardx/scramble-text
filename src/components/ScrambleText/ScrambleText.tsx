import { forwardRef } from "react"
import { useScramble } from "./ScrambleText.hooks"
import type { ScrambleTextProps } from "./ScrambleText.types"

const ScrambleText = forwardRef<HTMLSpanElement, ScrambleTextProps>(
	(
		{ text, speed = 30, iterationPerCharacter = 1, enabled = true, characters },
		ref,
	) => {
		const scrambleText = useScramble({
			text,
			speed,
			iterationPerCharacter,
			enabled,
			characters,
		})

		return (
			<span ref={ref} suppressHydrationWarning>
				{scrambleText}
			</span>
		)
	},
)

export default ScrambleText
