import Button from "../components/atoms/button/Button";
import Title from "../components/atoms/title/Title";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Title />
      <div className="flex items-center gap-4">
        <p className="font-bold text-white font-family-kr">
          누군가에게 인사해보세요.
        </p>
        <Button onClick={() => console.log("hi")}>🖐</Button>
      </div>
    </div>
  );
};

export default Home;
