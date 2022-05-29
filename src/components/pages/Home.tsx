import { memo, VFC } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";

export const Home: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  return <p>Homeページです</p>;
});
