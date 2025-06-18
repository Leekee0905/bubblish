import type { Meta, StoryObj } from "@storybook/react-vite";
import BoldText from "./BoldText";

const meta: Meta<typeof BoldText> = {
  title: "Atoms/BoldText",
  component: BoldText,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BoldText>;

export const Default: Story = {
  args: {
    children: "안녕하세요",
  },
};
