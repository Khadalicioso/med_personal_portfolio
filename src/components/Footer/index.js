import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Copyright = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>
          &copy; 2024 Miguel Enrique Dasalla. All Rights Reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
