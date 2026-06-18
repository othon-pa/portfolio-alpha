import { GrClose } from "react-icons/gr";
import { ProjectType } from "../../models/projects";
import { openLink } from "../../utils/openLink";
import {
  AppLink,
  AppLinks,
  AppLogo,
  AppName,
  DetailsViewContainer,
  DetailsViewDescription,
  DetailsViewHeader,
  DetailsViewInfo,
} from "./styles";
import { FaGithub } from "react-icons/fa";

type DetailsViewProps = {
  project: ProjectType;
  setDetailsView: (value: ProjectType | null) => void;
};

export default function DetailsView({
  project,
  setDetailsView,
}: DetailsViewProps) {
  const { projectName, description, githubUrl, demoUrl, refImage, logo } =
    project;

  const closeDetailsView = () => {
    setDetailsView(null);
  };

  return (
    <DetailsViewContainer background={refImage} className="doppio-one-regular">
      <DetailsViewHeader>
        <AppLogo src={`${import.meta.env.BASE_URL}${logo}`} />
        <DetailsViewInfo>
          <AppName className="bebas-neue-regular">{projectName}</AppName>
          <AppLinks>
            {githubUrl && (
              <AppLink onClick={() => openLink(githubUrl)}>
                <FaGithub size={30} /> GitHub
              </AppLink>
            )}
            {demoUrl && (
              <AppLink onClick={() => openLink(demoUrl)}>Demo</AppLink>
            )}
          </AppLinks>
        </DetailsViewInfo>
        <GrClose
          size={40}
          color="var(--color-text-light)"
          style={{ cursor: "pointer" }}
          onClick={closeDetailsView}
        />
      </DetailsViewHeader>
      <DetailsViewDescription>{description}</DetailsViewDescription>
    </DetailsViewContainer>
  );
}
