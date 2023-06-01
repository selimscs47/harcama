import { useState } from "react";
import { auth } from "../firebase/config";

import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const [hata, setHata] = useState(null);
  const [bekliyor, setBekliyor] = useState(false);

  const logout = async () => {
    setHata(null);
    setBekliyor(true);

    try {
        await signOut(auth)
        dispatch({ type: "LOGOUT"});

      setBekliyor(false);
      setHata(null);
    } catch (error) {
      console.log(error.message);
      setHata(error.message);
      setBekliyor(false);
    }
  };
  return { logout, hata, bekliyor };
};
