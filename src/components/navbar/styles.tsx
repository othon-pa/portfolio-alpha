import styled from "styled-components";

export const StyledNavbar = styled.div`
  height: 100px;
  width: 100%;
  color: var(--color-text-light);
  display: flex;
  justify-content: space-between;
`;

export const NavbarLogo = styled.img`
  padding: 15px;
`;

export const NavbarMenu = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: end;
  font-size: 2rem;
  padding-right: 15px;
`;

export const MenuItem = styled.div`
  width: fit-content;
  text-align: center;
  transition: 0.2s ease-in-out;
  padding: 30px 30px 0 30px;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

export const MenuDivider = styled.div`
  margin-top: 30px;
  height: 50px;
  border-left: 2px solid var(--color-text-light);
`;

export const JobSection = styled.div`
  padding: 20px;
  border: 1px solid var(--color-bg);
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const JobPosition = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export const JobDate = styled.div`
  font-size: 26px;
  background-color: var(--color-bg);
  color: var(--color-text-light);
  width: fit-content;
  padding: 0 15px;
  border-radius: 20px;
  line-height: 35px;
`;
export const JobDescription = styled.div`
  font-size: 22px;
  margin-left: 5px;
`;

export const ContactTitle = styled.div`
  font-size: 50px;
  margin-left: 5px;
`;
export const ContactSubtitle = styled.div`
  font-size: 30px;
  margin-left: 5px;
`;
export const ContactText = styled.div`
  font-size: 24px;
  margin-left: 5px;
`;
