import styled from "styled-components";

export const SkillLevel = styled.div`
  text-align: center;
  height: 0px;
  opacity: 0;
  font-size: 40px;
  transition: all 0.4s ease-in-out;
  color: var(--color-text-light);
`;
export const SkillName = styled.div`
  height: 45px;
  font-size: 40px;
  text-align: center;
  color: var(--color-text-light);
`;

export const FillContainerWrapper = styled.div`
  position: relative;
  width: calc((100% - 40px) / 5);
  min-width: 230px;
  height: 100px;
  border-radius: 12px;
  line-height: 50px;
  overflow: hidden;
  font-family: sans-serif;
  color: black;
  border: 4px solid var(--color-primary);

  &:hover {
    box-shadow: 0 0 15px var(--color-primary);
  }

  &:hover ${SkillLevel} {
    opacity: 1;
    height: 45px;
  }
`;
export const HoverFillBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    300deg,
    var(--color-primary),
    var(--color-secondary)
  );
  z-index: 0;
  transition: width 0.4s ease-in-out;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 15px var(--color-primary);
`;
export const HoverFillContent = styled.div`
  position: absolute;
  font-size: 30px;
  z-index: 1;
  padding-left: 10px;
  user-select: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-shadow: 0px 0px 10px var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
