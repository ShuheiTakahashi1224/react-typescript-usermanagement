import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button
              onClick={onClickHome}
              display="block"
              w="100%"
              bg="white"
              borderRadius={0}
            >
              TOP
            </Button>
            <Button
              onClick={onClickUserManagement}
              display="block"
              w="100%"
              bg="white"
              borderRadius={0}
            >
              ユーザ一覧
            </Button>
            <Button
              onClick={onClickSetting}
              display="block"
              w="100%"
              bg="white"
              borderRadius={0}
            >
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
