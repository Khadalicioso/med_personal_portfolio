import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 961px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 50px;
  gap: 25px;
  margin-top: 30px;
  justify-content: center;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const SkillName = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills.</Title>
        <Desc>TECHNOLOGIES</Desc>
        <SkillsContainer>
          {skills[0].skills.map((item) => (
            <SkillItem key={item.name}>
              <SkillImage src={item.image} alt={item.name} />
              <SkillName>{item.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
