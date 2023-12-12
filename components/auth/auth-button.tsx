import {
  IconDefinition,
  faUser,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AuthButtonProps {
  type: "login" | "signup";
}

const AuthButton = ({ type }: AuthButtonProps) => {
  return (
    <button className="flex space-x-2 items-center">
      <FontAwesomeIcon
        icon={type == "login" ? faUser : faPencil}
        className="p-[0.375rem] rounded-full bg-lightGreen"
        size="xs"
      />
      <p className="text-[#E4E4E4] text-[0.75rem]">
        {type === "login" ? "LOGIN" : "REGISTRATION"}
      </p>
    </button>
  );
};

export default AuthButton;
