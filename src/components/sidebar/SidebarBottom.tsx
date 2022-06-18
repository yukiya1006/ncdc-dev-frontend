import styled from "styled-components";

import { PrimaryButton } from "../button/PrimaryButton"
import { SecondaryButton } from "../button/SecondaryButton"
import doneImage from "../../images/done.svg";
import editImage from "../../images/edit.svg";

export const SidebarBottom = () => {

  return (
    <SContainer>
      <SecondaryButton>New page</SecondaryButton>
      <PrimaryButton src={doneImage}>Done</PrimaryButton>
      {/* <PrimaryButton src={editImage}>Edit</PrimaryButton> */}
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
