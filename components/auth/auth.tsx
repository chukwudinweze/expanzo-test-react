import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthButton from "./auth-button";

const UserAuthentication = () => {
  return (
    <div className="flex space-x-5">
      <AuthButton type="login" />
      <AuthButton type="signup" />
    </div>
  );
};

export default UserAuthentication;
