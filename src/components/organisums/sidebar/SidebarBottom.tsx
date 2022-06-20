import styled from "styled-components";

import { PrimaryButton } from "../../atoms/button/standard/PrimaryButton"
import { SecondaryButton } from "../../atoms/button/standard/SecondaryButton"

import doneImage from "../../../images/done.svg";
import plusImage from "../../../images/plus.svg";
import editImage from "../../../images/edit.svg";


export const SidebarBottom = () => {

  return (
    <SContainer>
      <PrimaryButton src={editImage}>Edit</PrimaryButton>
      <SecondaryButton src={plusImage}>New page</SecondaryButton>
      <SecondaryButton src={doneImage}>Done</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
