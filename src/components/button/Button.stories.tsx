import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

//👇 This default export determines where your story goes in the story list
const meta = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello Storybook",
  },
};
