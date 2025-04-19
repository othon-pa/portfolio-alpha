import { useState } from "react";
import Modal from "../modal";
import {
  NavbarLogo,
  NavbarMenu,
  StyledNavbar,
  MenuItem,
  MenuDivider,
  JobPosition,
  JobDate,
  JobDescription,
  JobSection,
  ContactTitle,
  ContactSubtitle,
  ContactText,
} from "./styles";
import { HiTranslate } from "react-icons/hi";
import { openLink } from "../../utils/openLink";

export default function Navbar() {
  const [openExperience, setOpenExperience] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleExperienceOpen = () => {
    setOpenExperience(true);
  };
  const handleContactOpen = () => {
    setOpenContact(true);
  };

  return (
    <StyledNavbar className="doppio-one-regular">
      <NavbarLogo src="./alpha_logo.png" />
      <NavbarMenu>
        <MenuItem>HOME</MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleExperienceOpen}>EXPERIENCE</MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleContactOpen}>CONTACT</MenuItem>
        <MenuDivider />
        <MenuItem>
          <HiTranslate style={{ paddingTop: "6px" }} />
        </MenuItem>
      </NavbarMenu>
      <Modal open={openExperience} setOpen={setOpenExperience}>
        <JobSection>
          <JobPosition>Hexaware Technologies | Technical Architect</JobPosition>
          <JobDate>Remote | Dec 2021 – Present</JobDate>
          <JobDescription>
            * Contributed significantly to developing an advanced SVG-based
            visualization tool enabling auditors to assess and track audit risks
            interactively — implemented the frontend and UI/UX logic.
          </JobDescription>
          <JobDescription>
            * Developed and maintained ReactJS + TypeScript applications with
            micro frontend architecture, collaborating across multiple
            repositories.
          </JobDescription>
          <JobDescription>
            * Implemented component styling with Material UI and Styled
            Components, and integrated data layers using React Query.
          </JobDescription>
          <JobDescription>
            * Wrote unit tests with Jest, React Testing Library, and Vitest, and
            participated in peer code reviews to ensure code quality.
          </JobDescription>
          <JobDescription>
            * Assisted with front-end configuration for deployment pipelines
            using Azure DevOps.
          </JobDescription>
          <JobDescription>
            * Contributed regularly to sprint goals in Agile teams, often
            delivering more than the expected story points while supporting
            teammates.
          </JobDescription>
        </JobSection>
        <JobSection>
          <JobPosition>Vendicenter | Fullstack Developer</JobPosition>
          <JobDate>Remote | June 2018 – Feb 2021</JobDate>
          <JobDescription>
            * Co-developed the MVP of an administrative system for vending
            machines serving snacks, coffee, and office supplies in retail and
            corporate settings.
          </JobDescription>
          <JobDescription>
            * Built a customer-facing PWA using ReactJS, enabling users to
            browse products and make purchases via mobile and desktop.
          </JobDescription>
          <JobDescription>
            * Implemented a full payment gateway integration, supporting secure,
            cashless transactions through connected vending hardware.
          </JobDescription>
          <JobDescription>
            * Designed real-time communication bridges with vending machines
            using NodeJS and MQTT, enabling product dispatch, pricing sync, and
            machine heartbeats.
          </JobDescription>
          <JobDescription>
            * Resolved persistent infrastructure and connectivity bugs,
            contributing to long-term platform stability post-launch.
          </JobDescription>
          <JobDescription>
            * Worked in a 2-person dev team and collaborated with hardware
            engineers on vending machine integration.
          </JobDescription>
        </JobSection>
        <JobSection>
          <JobPosition>Venteknia | Fullstack Developer</JobPosition>
          <JobDate>Guadalajara, MX | Mar 2018 – Feb 2019</JobDate>
          <JobDescription>
            * Sole developer of a B2B subscription management platform, enabling
            client companies to sell and manage licenses across their software
            products.
          </JobDescription>
          <JobDescription>
            * Built both front end and backend using HTML, CSS, JS, PHP, NodeJS,
            and MySQL, handling product architecture and deployment workflows.
          </JobDescription>
          <JobDescription>
            * Integrated a payment gateway to support recurring billing and
            secure customer transactions.
          </JobDescription>
          <JobDescription>
            * Delivered key features under tight deadlines, gaining experience
            in end-to-end product development, planning, and delivery.
          </JobDescription>
          <JobDescription>
            * First hands-on experience in fullstack architecture and working
            independently on a real-world product.
          </JobDescription>
        </JobSection>
        <JobSection>
          <JobPosition>Adventa | Fullstack Developer</JobPosition>
          <JobDate>Guadalajara, MX | Apr 2017 – Mar 2018</JobDate>
          <JobDescription>
            * Supported development of a point-based employee rewards platform
            for clients including Nestlé, Amex, GEPP (Pepsi), John Deere, and
            L'Oréal.
          </JobDescription>
          <JobDescription>
            * Built custom features on top of Joomla 3 CMS using HTML, CSS, PHP,
            and JavaScript, extending platform functionality for enterprise use.
          </JobDescription>
          <JobDescription>
            * Created a config-based customization tool for internal teams to
            launch temporary promotions — used in campaigns for brands like
            Coca-Cola.
          </JobDescription>
          <JobDescription>
            * Collaborated with developers and managers on a range of client
            projects; gained foundational experience in fullstack development
            and agile environments.
          </JobDescription>
        </JobSection>
      </Modal>
      <Modal open={openContact} setOpen={setOpenContact}>
        <ContactTitle>Contact</ContactTitle>
        <ContactSubtitle>* EMAIL</ContactSubtitle>
        <ContactText>othonparraalcantar@gmail.com</ContactText>
        <br />
        <ContactSubtitle>* LINKEDIN</ContactSubtitle>
        <ContactText
          onClick={() => openLink("https://www.linkedin.com/in/othon-parra/")}
          style={{ cursor: "pointer" }}
        >
          https://www.linkedin.com/in/othon-parra/
        </ContactText>
      </Modal>
    </StyledNavbar>
  );
}
