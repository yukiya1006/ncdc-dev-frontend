import styled from "styled-components";

import { PrimaryButton } from "../../atoms/button/standard/PrimaryButton"
import { SecondaryButton } from "../../atoms/button/standard/SecondaryButton"
import doneImage from "../../../images/done.svg";
import plusImage from "../../../images/plus.svg";
import editImage from "../../../images/edit.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SidebarBottom = (props) => {
  const { contents, setContents } = props;
  const [ isEdit, setIsEdit ] = useState(false);
  const id = useParams().id;

  const onClickEditButton = () => {
    setIsEdit(!isEdit)
  }

    const onClickNewPage = () => {
      axios.post(`http://localhost:3000/content`, {title: "Title", body: "Body"})
      .then(res => {
      setContents(res.data)
      })
    }

  return (
    <SContainer>
      {isEdit 
      ?
      <>
        <SecondaryButton src={plusImage} onClick={onClickNewPage}>New page</SecondaryButton>
        <SecondaryButton src={doneImage} onClick={onClickEditButton}>Done</SecondaryButton>
      </>
      :
      <PrimaryButton src={editImage} onClick={onClickEditButton}>Edit</PrimaryButton>}
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
