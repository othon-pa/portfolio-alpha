import styled from "styled-components";

export const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min(100%, 1900px);
  margin: 0 auto;
  min-height: calc(100vh);
  padding: 50px 20px 0 40px;
`;

export const Title = styled.div`
  font-size: 100px;
  color: var(--color-text-light);
`;

export const SkillsContainerWrapper = styled.div`
  width: 100%;
  padding: -15px;
  border-radius: 15px;
  background: linear-gradient(
    300deg,
    var(--color-primary),
    var(--color-secondary)
  );
  height: calc(100vh - 300px);
  position: relative;
`;

export const SkillsBackground = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  background-color: var(--color-bg-alt);
  border: 4px solid transparent;
  border-radius: 15px;
  background-clip: padding-box;
  position: absolute;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Skill = styled.div`
  width: calc((100% - 40px) / 5);
  height: 100px;
  background-color: var(--color-bg-light);
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
  line-height: 50px;
  padding-left: 10px;
  cursor: pointer;
  border-radius: 12px;
`;
