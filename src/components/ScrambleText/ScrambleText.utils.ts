const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const scramble = ({
	iterations,
	text,
}: { iterations: number; text: string }) => {
	const scrambled = text
		.split("")
		.map((_, index) => {
			if (index < iterations) return text[index]
			return ALPHABETS[Math.floor(Math.random() * 26)]
		})
		.join("")

	return scrambled
}
