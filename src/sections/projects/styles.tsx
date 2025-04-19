import styled from "styled-components";

export const ProjectsSectionContainer = styled.div`
  margin: 0 auto;
  min-height: calc(100vh);
  max-width: min(100%, 1900px);
  background-image: url(/projects-background3.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  padding: 50px 20px 0 40px;
  background-color: var(--color-bg);
`;

export const Title = styled.div`
  font-size: 100px;
  color: var(--color-text-light);
  text-shadow: 0px 0px 15px var(--color-bg);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const ProjectLogo = styled.img`
  height: 130px;
  margin: 0 auto;
  transition: 0.2s ease-in-out;
`;

export const ProjectLink = styled.div<{ alternative?: boolean }>`
  display: flex;
  justify-content: center;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  border-radius: 8px;
  font-size: 25px;
  height: 40px;
  transition: 0.2s ease-in-out;
  gap: 7px;
  line-height: 45px;
  cursor: pointer;
  background-color: ${(props) =>
    props.alternative ? "var(--color-bg)" : "var(--color-bg-light)"};
  color: ${(props) =>
    props.alternative ? "var(--color-bg-light)" : "var(--color-bg)"};

  & svg {
    height: 40px;
    padding: 2px;
  }

  &:hover {
    background-color: ${(props) =>
      props.alternative ? "var(--color-bg-light)" : "var(--color-bg)"};
    color: ${(props) =>
      props.alternative ? "var(--color-bg)" : "var(--color-bg-light)"};
  }
`;

export const OpenNote = styled.div`
  font-size: 0px;
  color: var(--color-text-light);
  transition: 0.2s ease-in;
  text-align: center;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% - 110px) / 4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 400px;
  border-radius: 16px;
  min-width: 400px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.587);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  justify-content: center;
  gap: 25px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover ${ProjectLogo} {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8));
    -webkit-filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8));
  }

  &:hover ${ProjectLink} {
    transform: scale(1.1);
  }

  &:hover ${OpenNote} {
    font-size: 20px;
  }

  &:hover {
    transform: scale(0.9);
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DetailsViewContainer = styled.div<{ background: string | null }>`
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  max-width: min(100%, 1900px);
  backdrop-filter: blur(15px);
  border: 4px solid var(--color-primary);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const DetailsViewHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 30px;
`;

export const AppLogo = styled.img`
  height: 200px;
  border: 2px solid var(--color-bg-light);
  border-radius: 8px;
  padding: 10px;
  backdrop-filter: blur(15px);
  box-shadow: 0px 0px 10px (--color-bg);
`;

export const DetailsViewInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AppLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: start;
  min-width: 400px;
`;
export const AppName = styled.div`
  font-size: 60px;
  font-weight: 400;
  color: var(--color-primary);
  text-shadow: 0px 0px 15px var(--color-bg);
`;

export const DetailsViewDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  padding: 30px;
  color: var(--color-text-light);
`;

export const AppLink = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  font-size: 25px;
  height: 40px;
  gap: 7px;
  line-height: 40px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-color: var(--color-bg-light);
  min-width: 200px;

  & svg {
    height: 40px;
    padding: 2px;
  }

  &:hover {
    background-color: var(--color-bg);
    color: var(--color-text-light);
  }
`;
