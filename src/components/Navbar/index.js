import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./navComponents";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../my_data/mydata";
import { BsExplicitFill } from "react-icons/bs";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
              textDecoration : "none",
            }}
          >
            {" "}
              {" "}
              <BsExplicitFill size="1.5rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          {" "}
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          {/* <NavLink href="#experience">Experience</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton
            href={Bio.github}
            style={{ marginRight: "10px" }}
            target="_blank"
          >
            <IconContext.Provider value={{ color: "#854CE6", size: "1.6em" }}>
              <AiFillGithub />
            </IconContext.Provider>
          </GitHubButton>
          <GitHubButton
            href={Bio.linkedin}
            style={{ marginRight: "10px" }}
            target="_blank"
          >
            <IconContext.Provider value={{ color: "#854CE6", size: "1.6em" }}>
              <AiFillLinkedin />
            </IconContext.Provider>
          </GitHubButton>
          <GitHubButton
            href={Bio.geeksforgeeks}
            style={{ marginRight: "10px" }}
            target="_blank"
          >
            <IconContext.Provider value={{ color: "#854CE6", size: "1.6em" }}>
              <SiGeeksforgeeks />
            </IconContext.Provider>
          </GitHubButton>
          <GitHubButton
            href={Bio.leetcode}
            style={{ marginRight: "10px" }}
            target="_blank"
          >
            <IconContext.Provider value={{ color: "#854CE6", size: "1.6em" }}>
              <SiLeetcode />
            </IconContext.Provider>
          </GitHubButton>
          <GitHubButton href={Bio.codechef} target="_blank">
            <IconContext.Provider value={{ color: "#854CE6", size: "1.6em" }}>
              <SiCodechef />
            </IconContext.Provider>
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {" "}
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            {/* <MobileLink
                href="#experience"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Experience
              </MobileLink> */}
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education 
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            {/* <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton> */}
            <GitHubButton
              href={Bio.linkedin}
              style={{
                padding: "10px 16px",
                color: "white",
                width: "max-content",
              }}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "1.6em" }}>
                <AiFillLinkedin />
              </IconContext.Provider>
            </GitHubButton>
            <GitHubButton
              href={Bio.github}
              style={{
                padding: "10px 16px",
                color: "white",
                width: "max-content",
              }}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "1.6em" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </GitHubButton>
            <GitHubButton
              href={Bio.gfg}
              style={{
                padding: "10px 16px",
                color: "white",
                width: "max-content",
              }}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "1.6em" }}>
                <SiGeeksforgeeks />
              </IconContext.Provider>
            </GitHubButton>
            <GitHubButton
              href={Bio.leetcode}
              style={{
                padding: "10px 16px",
                color: "white",
                width: "max-content",
              }}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "1.6em" }}>
                <SiLeetcode />
              </IconContext.Provider>
            </GitHubButton>
            <GitHubButton
              href={Bio.codechef}
              style={{
                padding: "10px 16px",
                color: "white",
                width: "max-content",
              }}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "1.6em" }}>
                <SiCodechef />
              </IconContext.Provider>
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;