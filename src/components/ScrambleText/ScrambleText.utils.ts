const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const scramble = ({
	iterations,
	text,
	characters,
}: { iterations: number; text: string; characters?: string }) => {
	const chars = characters || CHARACTERS

	const scrambled = text
		.split("")
		.map((letter, index) => {
			if (index < iterations) return text[index]
			return letter === " "
				? " "
				: chars[Math.floor(Math.random() * chars.length)]
		})
		.join("")

	return scrambled
}
