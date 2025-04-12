import styled from "styled-components";

export const StyledNavbar = styled.div`
  height: 100px;
  width: 100%;
  color: var(--color-text-light);
  display: flex;
  justify-content: space-between;
  font-family: "Doppio One", sans-serif;
  font-weight: 400;
  font-style: normal;
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
