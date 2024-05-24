import type { Meta, StoryFn } from "@storybook/react"
import ScrambleText from "./ScrambleText"

export default {
	title: "ScrambleText",
	component: ScrambleText,
} as Meta<typeof ScrambleText>

const Template: StoryFn<typeof ScrambleText> = (args) => (
	<ScrambleText {...args} />
)

export const Default = Template.bind({})

Default.args = {
	text: "ScrambleText",
	speed: 30,
	iterationPerCharacter: 3,
	characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}
