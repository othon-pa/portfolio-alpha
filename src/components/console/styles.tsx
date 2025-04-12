import styled from "styled-components";

export const ConsoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 500px;
  padding: 10px;
  margin-top: 20px;
  background-color: var(--color-bg-alt);
  border: 5px solid transparent;
  border-radius: 15px;
  background-clip: padding-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(
      300deg,
      var(--color-primary),
      var(--color-secondary)
    );
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: start;
`;

export const Message = styled.div`
  flex: 1;
  color: var(--color-text-light);
`;
export const User = styled.div`
  color: var(--color-primary);
  margin-right: 10px;
  min-width: fit-content;
`;
