import Title from "../../atoms/title/Title";
import GreetingButton from "../../molecules/greetingButton/GreetingButton";

const HomeGreetingSection = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Title />
      <GreetingButton />
    </div>
  );
};

export default HomeGreetingSection;
