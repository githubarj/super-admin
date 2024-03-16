import "./button.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function Button({ children, variant, className, ...rest }) {
  let icon;
  switch (variant) {
    case "add":
      icon = <AiOutlinePlus />;
      break;
    case "left":
      icon = <AiOutlineArrowLeft />;
      break;
    case "right":
      icon = <AiOutlineArrowRight />;
      break;
    case "menu":
      icon = <AiOutlineMenuUnfold />;
      break;
  }

  return (
    <button className={`re-usable-button ${className}`} {...rest}>
      {variant != "right" && icon}
      {children}
      {variant == "right" && icon}
    </button>
  );
}
