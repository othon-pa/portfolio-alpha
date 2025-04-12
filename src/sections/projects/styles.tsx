import styled from "styled-components";

export const ProjectsSectionContainer = styled.div`
  font-family: "Bebas Neue", sans-serif;
  margin: 0 auto;
  min-height: calc(100vh);
  max-width: min(100%, 1900px);
  background-image: url(/projects-background.png);
  background-size: contain;
  background-repeat: no-repeat;

  padding: 50px 20px 0 40px;
`;

export const Title = styled.div`
  font-size: 100px;
  color: var(--color-text-light);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  width: calc((100% - 110px) / 4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 400px;
  border-radius: 16px;
  min-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.595);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(10px);
`;
