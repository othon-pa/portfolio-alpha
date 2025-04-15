import styled from "styled-components";

export const IntroductionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min(100%, 1900px);
  margin: 0 auto;
  justify-content: space-between;
  min-height: calc(100vh - 100px);
`;

export const Title = styled.div`
  color: var(--color-text-light);
  font-size: 180px;
  line-height: 150px;
  margin: -4px;
`;

export const Subtitle = styled.div`
  color: var(--color-text-light);
  font-size: 140px;
  line-height: 120px;
  margin: -4px;
`;

export const SocialsContainer = styled.div`
  color: var(--color-text-dark);
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const Button = styled.div`
  cursor: pointer;
  text-align: center;
  max-width: 240px;
  background-color: var(--color-secondary);
  font-size: 3.875em;
  display: flex;
  padding: 5px;
  border-radius: 8px;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: var(--color-bg-light);
  }
`;

export const ButtonIcon = styled.div`
  height: 50px;
  width: 50px;
  line-height: 50px;

  && svg {
    padding: 10px;
    border: 2px solid var(--color-text-dark);
    border-radius: 50px;
    font-size: 45px;
    overflow: visible;
  }
`;

export const ButtonText = styled.div`
  height: 50px;
  line-height: 56px;
  text-align: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  padding: 80px 30px 0 30px;
`;

export const BodyContent = styled.div`
  display: flex;
  padding: 20px 30px 0 30px;
  gap: 30px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const LeftHeaderContent = styled.div`
  flex: 70%;
`;

export const Spacer = styled.div`
  height: 300px;
  min-width: 30%;
  max-width: 30%;
  @media (max-width: 1442px) {
    min-width: 0;
  }
`;

export const LeftContent = styled.div`
  flex: 50%;

  @media (max-width: 1020px) {
    flex: 100%;
  }
`;

export const RightContent = styled.div`
  flex: 40%;

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
  margin-top: -200px;

  @media (max-width: 1442px) {
    margin-top: 0;
  }
`;
