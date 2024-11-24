import React, { useEffect } from "react";
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
} from "./NavbarStyledComponent";
import { VscCode } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  // useEffect hook to handle window resize event
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavLink href="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                cursor: "pointer",
              }}
            >
              <VscCode size="3rem" /> <Span>Miguel Enrique</Span>
            </div>
          </NavLink>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">HOME</NavLink>
          <NavLink href="#skills">SKILL</NavLink>
          <NavLink href="#experience">EXPERIENCE</NavLink>
          <NavLink href="#projects">PROJECT</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#home"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              HOME
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              SKILL
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              EXPERIENCE
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              PROJECT
            </MobileLink>
            <GitHubButton
              style={{
                padding: "8px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
