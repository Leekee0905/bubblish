import type { Meta, StoryObj } from "@storybook/react-vite";
import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Atoms/Loading",
  component: Loading,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
