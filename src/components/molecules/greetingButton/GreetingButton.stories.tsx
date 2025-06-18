import type { Meta, StoryObj } from "@storybook/react-vite";
import GreetingButton from "./GreetingButton";
import { MemoryRouter } from "react-router";
import { fn } from "storybook/test";
const meta: Meta<typeof GreetingButton> = {
  title: "Molecules/GreetingButton",
  component: GreetingButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof GreetingButton>;

export const Default: Story = {};
