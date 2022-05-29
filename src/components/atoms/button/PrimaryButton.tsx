import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { loading = false, disabled = false, children, onClick } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      disabled={disabled || loading}
      isLoading={loading}
      _hover={{ opacity: 0.7 }}
    >
      {children}
    </Button>
  );
});
