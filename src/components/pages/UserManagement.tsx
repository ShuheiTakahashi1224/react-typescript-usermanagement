/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { getAllUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginUser } = useLoginUser();
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id: id, users: users, onOpen: onOpen });
    },
    [users, selectedUser]
  );
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl={"https://source.unsplash.com/random"}
                userName={user.username}
                fullName={user.name}
                onClick={() => onClickUser(user.id)}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
