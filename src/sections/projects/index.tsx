import { useState } from "react";
import {
  OpenNote,
  Project,
  ProjectLink,
  ProjectLinks,
  ProjectLogo,
  ProjectsContainer,
  ProjectsSectionContainer,
  Title,
} from "./styles";
import { FaGithub, FaPlay } from "react-icons/fa";
import DetailsView from "./details-view";
import projects from "../../data/projects.json";
import { openLink } from "../../utils/openLink";
import { ProjectType } from "../../models/projects";

export default function ProjectsSection() {
  const [detailsView, setDetailsView] = useState<ProjectType | null>(null);

  const openDetails = (id: string) => {
    const selectedProject = projects.find((project) => project.id === id);
    setDetailsView(selectedProject || null);
  };

  return (
    <>
      <ProjectsSectionContainer className="bebas-neue-regular">
        {!detailsView ? (
          <>
            <Title>PROJECTS</Title>
            <ProjectsContainer>
              {projects.map(({ id, githubUrl, demoUrl, logo }) => (
                <Project onClick={() => openDetails(id)}>
                  <ProjectLogo src={`/${logo}`} />
                  <ProjectLinks>
                    {githubUrl && (
                      <ProjectLink onClick={() => openLink(githubUrl)}>
                        <FaGithub size={30} /> GitHub
                      </ProjectLink>
                    )}
                    {demoUrl && (
                      <ProjectLink onClick={() => openLink(demoUrl)}>
                        <FaPlay />
                        Preview
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                  <OpenNote>Click the card to see details!</OpenNote>
                </Project>
              ))}
            </ProjectsContainer>
          </>
        ) : (
          <DetailsView project={detailsView} setDetailsView={setDetailsView} />
        )}
      </ProjectsSectionContainer>
    </>
  );
}
