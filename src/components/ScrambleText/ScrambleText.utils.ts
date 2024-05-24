const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const scramble = ({
	iterations,
	text,
	characters,
}: { iterations: number; text: string; characters?: string }) => {
	const chars = characters || CHARACTERS

	console.log(chars)

	const scrambled = text
		.split("")
		.map((_, index) => {
			if (index < iterations) return text[index]
			return chars[Math.floor(Math.random() * chars.length)]
		})
		.join("")

	return scrambled
}
