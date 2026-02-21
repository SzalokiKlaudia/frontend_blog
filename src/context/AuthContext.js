import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myAxios } from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const csrf = async () => myAxios.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    setError({});
    try {
      const { data } = await myAxios.get("/api/user");
      setUser(data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setUser(null);
      } else {
        console.error(error);
      }
    }
  };

  const loginReg = async ({ ...data }, route) => {
    setError({});
    try {
      await csrf();
      await myAxios.post(route, data);
      console.log("Succes");
      await getUser();
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.errors);
      }
      console.error(error);
      if (error.response.status === 401) {
        setError(error.response.data.errors);
        console.error("Unauthorized");
      }
    }
  };

  const logOut = async () => {
    await csrf();

    await myAxios.post("/logout").then((resp) => {
      setUser(null);
      navigate("/");
      console.log(resp);
    });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loginReg, logOut, getUser, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
