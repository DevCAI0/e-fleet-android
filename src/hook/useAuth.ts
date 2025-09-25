import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
  const authContextData = useContext(AuthContext);
  return authContextData;
}
