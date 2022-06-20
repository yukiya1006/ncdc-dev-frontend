import logoImage from "../../../images/logo.svg";
import styled from "styled-components";

export const TitleLogo = () => {
  return (
    <SContainer>
      <SImg src={logoImage} />
      <STitle>TitleLogo</STitle>
    </SContainer>
  )
}

const SContainer = styled.section`
  display: flex;
  justfiy-content: center;
  align-items: center;
  padding-top: 20px;
`;

const SImg = styled.img`
  width: 32px;
  height: 32px;
  background-color: #4CB3F8;
  border-radius: 50%;
  margin: 8px 4px 0 0;
`;

const STitle = styled.h1`
  font-family: Gotham Bold;
  width: 161px;
  height: 24px;
  color: #1A1A1A;
`;

