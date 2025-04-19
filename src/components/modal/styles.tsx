import styled, { createGlobalStyle } from "styled-components";

export const LockModalScroll = createGlobalStyle`
body {
  overflow: hidden;
}
`;

export const ModalBackdrop = styled.div`
  background-color: #00000081;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
`;
export const ModalContainer = styled.div`
  width: 100%;
  position: absolute;
  max-width: min(80%, 1600px);
  background-color: var(--color-bg-light);
  color: var(--color-text-dark);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 10px;
  border: 2px solid var(--color-bg);
  display: flex;
  flex-direction: column;
`;
export const ModalContent = styled.div`
  overflow-y: auto;
  max-height: 800px;
  padding: 20px;
`;
export const ModalButtons = styled.div`
  padding: 20px;
  position: sticky;
  text-align: end;
  border-top: 2px solid var(--color-bg);
`;

export const ModalButton = styled.button`
  font-size: 20px;
  background-color: var(--color-bg);
  color: var(--color-text-light);
  width: 100px;
  height: 45px;
`;
