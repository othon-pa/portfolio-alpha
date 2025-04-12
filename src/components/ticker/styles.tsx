import styled from "styled-components";

export const TickerContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    var(--color-bg-light) 0.5%,
    var(--color-bg-light) 99.5%,
    var(--color-bg) 100%
  );
  font-size: 22px;
  line-height: 30px;
  margin-top: 60px;
  bottom: 0;
  overflow: hidden;
`;

export const TickerMessages = styled.div<{
  animationDuration: number;
  textWidth: number;
}>`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  animation: scroll-left ${(props) => props.animationDuration}s linear infinite;
  width: fit-content;
  text-align: right;
  color: var(--color-bg);

  @keyframes scroll-left {
    0% {
      transform: translateX(1900px);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`;
