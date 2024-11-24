import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SocialMediaIcons,
  SocialMediaIcon,
} from "./HeroStyle";
import HeroImg from "../../images/profile.jpg";
import Typewriter from "typewriter-effect";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";
import HeroBgAnimation from "../HeroBgAnimation"; // Ensure this import is correct

const HeroSection = () => {
  const helloText = "Hello, I'm";
  const nameText = `${Bio.name},`;

  const splitText = (text) => {
    return text
      .split("")
      .map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ));
  };

  return (
    <div id="home">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              <div>{splitText(helloText)}</div>
              <div>{splitText(nameText)}</div>
            </Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.facebook} target="display">
                <FacebookIcon style={{ fontSize: 48 }} />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.instagram} target="display">
                <InstagramIcon style={{ fontSize: 48 }} />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon style={{ fontSize: 48 }} />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
