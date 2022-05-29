import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
  VFC
} from "react";
import { User } from "../../../types/api/User";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin = false } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhoneNumber(user?.phone ?? "");
  }, [user]);

  const onChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value),
    []
  );
  const onChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
    []
  );
  const onChangePhoneNumber = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setPhoneNumber(event.target.value),
    []
  );

  const onClickUpdate = useCallback(() => alert("更新しました"), []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={10}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="name">名前</FormLabel>
              <Input
                id="name"
                type="text"
                value={name}
                isReadOnly={!isAdmin}
                onChange={onChangeName}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">MAIL</FormLabel>
              <Input
                id="email"
                type="text"
                value={email}
                isReadOnly={!isAdmin}
                onChange={onChangeEmail}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">TELL</FormLabel>
              <Input
                id="phone"
                type="text"
                value={phoneNumber}
                isReadOnly={!isAdmin}
                onChange={onChangePhoneNumber}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>UPDATE</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
