import {
  Project,
  ProjectsContainer,
  ProjectsSectionContainer,
  Title,
} from "./styles";

export default function ProjectsSection() {
  return (
    <ProjectsSectionContainer>
      <Title>PROJECTS</Title>
      <ProjectsContainer>
        <Project>Project 1</Project>
        <Project>Project 2</Project>
        <Project>Project 3</Project>
        <Project>Project 4</Project>
        <Project>Project 5</Project>
        <Project>Project 6</Project>
      </ProjectsContainer>
    </ProjectsSectionContainer>
  );
}
