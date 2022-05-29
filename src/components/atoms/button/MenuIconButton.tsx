import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: VoidFunction;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      onClick={onOpen}
      aria-label="menu-button"
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      icon={<HamburgerIcon />}
    />
  );
});
