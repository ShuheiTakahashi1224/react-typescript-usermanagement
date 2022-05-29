/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../../components/atoms/button/MenuIconButton";
import { MenuDrawer } from "../../../components/molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justifyContent={{ base: "space-between", md: "flex-start" }}
        padding={{ base: 3, md: 5 }}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          <Box as="a" _hover={{ cursor: "pointer" }} onClick={onClickHome}>
            ユーザ管理アプリ
          </Box>
        </Heading>
        <Flex ml={6} align="center" display={{ base: "none", md: "flex" }}>
          <Box>
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Box ml={3}>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
