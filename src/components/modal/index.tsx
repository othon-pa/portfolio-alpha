import { ReactNode } from "react";
import {
  LockModalScroll,
  ModalBackdrop,
  ModalButton,
  ModalButtons,
  ModalContainer,
  ModalContent,
} from "./styles";

type ModalProps = {
  children?: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Modal({ children, open, setOpen }: ModalProps) {
  return (
    <>
      {open && <LockModalScroll />}
      {open && (
        <ModalBackdrop onClick={() => setOpen(false)}>
          <ModalContainer>
            <ModalContent>{children}</ModalContent>
            <ModalButtons>
              <ModalButton
                className="bebas-neue-regular"
                onClick={() => setOpen(false)}
              >
                Close
              </ModalButton>
            </ModalButtons>
          </ModalContainer>
        </ModalBackdrop>
      )}
    </>
  );
}
