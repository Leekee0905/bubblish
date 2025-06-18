import type { Meta, StoryObj } from "@storybook/react-vite";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  title: "Atoms/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};
