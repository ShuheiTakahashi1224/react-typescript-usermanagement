import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="240px"
      h="240px"
      bg="white"
      p={4}
      borderRadius="10px"
      shadow="md"
      transition="opacity .3s ease 0s"
      _hover={{ cursor: "pointer", opacity: 0.7 }}
      onClick={onClick}
    >
      <Image m="0 auto" boxSize="140px" borderRadius="full" src={imageUrl} />
      <Stack mt="3" textAlign="center">
        <Text fontSize="lg" fontWeight="700">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
