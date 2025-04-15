import {
  SkillsBackground,
  SkillsContainer,
  SkillsContainerWrapper,
  SkillsSectionContainer,
  Title,
} from "./styles";
import FillContainer from "../../components/fill-container";

export default function SkillsSection() {
  return (
    <SkillsSectionContainer className="bebas-neue-regular">
      <Title>SKILLS</Title>
      <SkillsContainerWrapper>
        <SkillsBackground>
          <SkillsContainer className="bebas-neue-regular">
            <FillContainer fill={70}>Typescript</FillContainer>
            <FillContainer fill={30}>Typescript</FillContainer>
            <FillContainer fill={10}>Typescript</FillContainer>
            <FillContainer fill={90}>Typescript</FillContainer>
            <FillContainer fill={100}>Typescript</FillContainer>
          </SkillsContainer>
        </SkillsBackground>
      </SkillsContainerWrapper>
    </SkillsSectionContainer>
  );
}
