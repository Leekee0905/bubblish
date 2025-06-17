import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "이메일",
    placeholder: "example@email.com",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "유효하지 않은 이메일 형식입니다.",
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    placeholder: "••••••••",
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "disabled@example.com",
  },
};
