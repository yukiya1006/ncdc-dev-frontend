import logoImage from "../../../images/logo.svg";
import styled from "styled-components";

export const TitleLogo = () => {
  return (
    <SContainer>
      <SImg src={logoImage} />
      <STitle>ServiceName</STitle>
    </SContainer>
  )
}

const SContainer = styled.section`
  display: flex;
  justfiy-content: center;
  align-items: center;
  padding: 30px 0 20px 0;
`;

const SImg = styled.img`
  width: 32px;
  height: 32px;
  background-color: #4CB3F8;
  border-radius: 50%;
`;

const STitle = styled.h1`
  width: 161px;
  height: 24px;
  color: #1A1A1A;
  font-family: GothamBold;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin: 0;
  padding-left: 4px;
`;

