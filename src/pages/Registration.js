import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import RegForm from "../components/RegForm";

function Registration() {
  return (
    <div className="reg-container pt-5">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-2">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-[3rem]"
          style={{ color: "rgb(23, 47, 74)" }}
        />
      </div>
      <RegForm />
    </div>
  );
}

export default Registration;
