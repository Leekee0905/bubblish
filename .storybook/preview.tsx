import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        lightblue: { name: "LightBlue", value: "#cedef2" },
      },
      initialGlobals: {
        backgrounds: { value: "lightblue" },
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="font-family-kr w-full min-w-96 max-w-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative bg-lightblue text-[#3c4856]">
          {<Story />}
        </div>
      );
    },
  ],
};

export default preview;
