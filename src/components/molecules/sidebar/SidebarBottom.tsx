import styled from "styled-components";

import { PrimaryButton } from "../../atoms/button/standard/PrimaryButton"
import { SecondaryButton } from "../../atoms/button/standard/SecondaryButton"
import doneImage from "../../../images/done.svg";
import plusImage from "../../../images/plus.svg";
import editImage from "../../../images/edit.svg";

export const SidebarBottom = () => {
  
  const onClickNewPage = () => {
    alert("hoge");
  }
  const onClickEditButton = () => {
    alert("hoge");
  }
  
  const onClickDone = () => {
    alert("hoge");
  }

  return (
    <SContainer>
      <PrimaryButton src={editImage} onClick={onClickEditButton}>Edit</PrimaryButton>
      <SecondaryButton src={plusImage} onClick={onClickNewPage}>New page</SecondaryButton>
      <SecondaryButton src={doneImage} onClick={onClickDone}>Done</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
