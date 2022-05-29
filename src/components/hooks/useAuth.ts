import axios from "axios";
import { useCallback } from "react";
import { User } from "../../types/api/User";

export const useAuth = () => {
  const login = useCallback((id: string) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios.get<User>(url).then((res) => {
      if (res.data) {
        alert();
      } else {
        alert("naipo");
      }
    });
  }, []);
  return { login };
};
