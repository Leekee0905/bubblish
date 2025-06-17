import type { Meta, StoryObj } from "@storybook/react-vite";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "메시지를 입력하세요.",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    value: "",
    readOnly: true,
  },
};

export const WithValue: Story = {
  args: {
    value: "기본 입력된 메시지입니다.",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "입력할 수 없습니다",
  },
};

export const MultipleLines: Story = {
  args: {
    value: "여러 줄을\n입력한\n예시입니다.",
    rows: 3,
    readOnly: true,
  },
};
