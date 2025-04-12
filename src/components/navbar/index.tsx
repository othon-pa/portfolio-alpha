import {
  NavbarLogo,
  NavbarMenu,
  StyledNavbar,
  MenuItem,
  MenuDivider,
} from "./styles";
import { HiTranslate } from "react-icons/hi";

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavbarLogo src="./LOGO.png" />
      <NavbarMenu>
        <MenuItem>HOME</MenuItem>
        <MenuDivider />
        <MenuItem>EXPERIENCE</MenuItem>
        <MenuDivider />
        <MenuItem>CONTACT</MenuItem>
        <MenuDivider />
        <MenuItem>
          <HiTranslate style={{ paddingTop: "6px" }} />
        </MenuItem>
      </NavbarMenu>
    </StyledNavbar>
  );
}
