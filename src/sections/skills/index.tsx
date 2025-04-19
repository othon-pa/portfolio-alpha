import {
  SkillsBackground,
  SkillsContainer,
  SkillsContainerWrapper,
  SkillsSectionContainer,
  Title,
} from "./styles";
import FillContainer from "../../components/fill-container";
import techStack from "../../data/tech-stack.json";

export default function SkillsSection() {
  return (
    <SkillsSectionContainer className="bebas-neue-regular">
      <Title>SKILLS</Title>
      <SkillsContainerWrapper>
        <SkillsBackground>
          <SkillsContainer className="bebas-neue-regular">
            {techStack.map((item) => (
              <FillContainer key={item.name} fill={item.percent}>
                {item.name}
              </FillContainer>
            ))}
          </SkillsContainer>
        </SkillsBackground>
      </SkillsContainerWrapper>
    </SkillsSectionContainer>
  );
}
