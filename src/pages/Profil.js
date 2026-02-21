import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileForm from "../components/ProfileForm";

function Profil() {
  return (
    <div className="login-container pt-5">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-2">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-[3rem]"
          style={{ color: "rgb(23, 47, 74)" }}
        />
      </div>

      <ProfileForm />
    </div>
  );
}

export default Profil;
