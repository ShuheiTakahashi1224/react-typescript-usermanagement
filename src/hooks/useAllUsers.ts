/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/User";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();
  const getAllUsers = useCallback(() => {
    setLoading(true);
    const url = `https://jsonplaceholder.typicode.com/users/`;
    axios
      .get<Array<User>>(url)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザの取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getAllUsers, users, loading };
};
