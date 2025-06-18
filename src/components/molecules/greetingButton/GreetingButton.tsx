import { useState } from "react";
import clsx from "clsx";
import Button from "../../atoms/button/Button";
import BoldText from "../../atoms/boldText/BoldText";
import { useNavigate } from "react-router";

const GreetingButton = () => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const handleGreetingButton = () => {
    navigate("/chat");
  };
  return (
    <Button
      onClick={handleGreetingButton}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-[240px] h-[48px] relative overflow-hidden shadow-lg"
    >
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-opacity",
          isHover ? "opacity-0" : "opacity-100"
        )}
      >
        <BoldText>누군가에게 인사해보세요.</BoldText>
      </span>
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-opacity",
          isHover ? "opacity-100" : "opacity-0"
        )}
      >
        <BoldText>안녕하세요 🖐</BoldText>
      </span>
    </Button>
  );
};

export default GreetingButton;
