import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";

import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" px={4} boxShadow="md" borderRadius="md">
        <Heading
          as="h1"
          py={3}
          borderBottom={"1px solid"}
          borderColor={"gray.200"}
          size="lg"
          textAlign="center"
        >
          ユーザ管理アプリ
        </Heading>
        <Stack spacing={3} py={8} px={5}>
          <Input
            placeholder="ユーザID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
