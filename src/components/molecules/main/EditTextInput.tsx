import styled from "styled-components";

import { PrimaryButton } from "components/atoms/button/standard/PrimaryButton";
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../../images/edit.svg";
import cancelImage from "../../../images/cancel.svg";
import saveImage from "../../../images/save.svg";
import { useState } from "react";

export const EditTextInput = (props) => {
  const { contents } = props;

  const [ isEdit, setIsEdit ] = useState(true);

  const onClickTitleButton = () => {
    setIsEdit(!isEdit);  
  }

  const onClickCanselEditButton = () => {
    setIsEdit(isEdit);
  }

  const onClickSaveEditButton = () => {
    alert("hoge");
  }

  return (
    <>
    <SContainer>
      <SText value={contents.body} disabled={isEdit}></SText>
      { isEdit
      ? <PrimaryButton src={editImage} onClick={onClickTitleButton}>Edit</PrimaryButton>
      : <>
          <MiniNormalButton src={cancelImage} onClick={onClickCanselEditButton}>Cancel</MiniNormalButton>
          <MiniPrimaryButton src={saveImage} onClick={onClickSaveEditButton}>Save</MiniPrimaryButton>
        </>
      }  
    </SContainer>
    </>
  )
}

const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SText = styled.textarea`
  width: 85%;
  height: 500px;
  margin: 0;
  border: none;
  border-radius: 8px;
  padding: 30px 30px 0 30px ;
  font-family: NotoSansJP-Regular;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
  overflow-y: scroll;
  background-color: #fff;
  &:focus {
    outline: 2px solid #4CB3F8;
  }
`;
