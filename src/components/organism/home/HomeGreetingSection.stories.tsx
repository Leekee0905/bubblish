import type { Meta, StoryObj } from "@storybook/react-vite";
import HomeGreetingSection from "./HomeGreetingSection";
import { MemoryRouter } from "react-router";

const meta: Meta<typeof HomeGreetingSection> = {
  title: "Molecules/HomeGreetingSection",
  component: HomeGreetingSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HomeGreetingSection>;

export const Default: Story = {};
