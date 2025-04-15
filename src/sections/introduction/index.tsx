import { SOCIALS } from "../../enums/socialLinks";
import { openLink } from "../../utils/openLink";
import {
  Avatar,
  BodyContent,
  Button,
  ButtonIcon,
  ButtonText,
  FooterContent,
  HeaderContent,
  IntroductionSectionContainer,
  LeftContent,
  LeftHeaderContent,
  RightContent,
  SocialsContainer,
  Spacer,
  Subtitle,
  Title,
} from "./styles";
import { LuLinkedin, LuGithub, LuCodepen } from "react-icons/lu";
import Console from "../../components/console";
import Ticker from "../../components/ticker";

export default function IntroductionSection() {
  return (
    <>
      <IntroductionSectionContainer className="bebas-neue-regular">
        <HeaderContent>
          <LeftHeaderContent>
            <Title>
              HI! I’M <div className="highlight-text">OTHON PARRA</div>
            </Title>
            <Subtitle>FRONT-END DEVELOPER</Subtitle>
            <SocialsContainer>
              <Button onClick={() => openLink(SOCIALS.LINKEDIN)}>
                <ButtonIcon>
                  <LuLinkedin />
                </ButtonIcon>
                <ButtonText>LINKEDIN</ButtonText>
              </Button>
              <Button onClick={() => openLink(SOCIALS.GITHUB)}>
                <ButtonIcon>
                  <LuGithub />
                </ButtonIcon>
                <ButtonText>GITHUB</ButtonText>
              </Button>
              <Button onClick={() => openLink(SOCIALS.CODEPEN)}>
                <ButtonIcon>
                  <LuCodepen />
                </ButtonIcon>
                <ButtonText>CODEPEN</ButtonText>
              </Button>
            </SocialsContainer>
          </LeftHeaderContent>
          <Spacer />
        </HeaderContent>
        <BodyContent>
          <LeftContent>
            <Console />
          </LeftContent>
          <RightContent>
            <Avatar src="/PERSON2.png" />
          </RightContent>
        </BodyContent>
        <FooterContent>
          <Ticker />
        </FooterContent>
      </IntroductionSectionContainer>
    </>
  );
}
