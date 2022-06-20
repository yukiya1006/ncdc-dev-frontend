import styled from "styled-components"; 
import { useState } from "react";

import { PrimaryButton } from 'components/atoms/button/standard/PrimaryButton'
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../../images/edit.svg";
import cancelImage from "../../../images/cancel.svg";
import saveImage from "../../../images/save.svg";


export const EditTitleInput = (props) => {
  const { contents } = props;

  const [ isEdit, setIsEdit ] = useState(true);

  const onClickEditTextButton = () => {
    setIsEdit(!isEdit);
  }
  const onClickCancelEditButton = () => {
    setIsEdit(true);
  }
  const onClickSaveEditButton = () => {
    alert("hoge");
  }

  return (
    <SContainer>
      <SInput type="text" value={contents.title} disabled={isEdit}/>
      { isEdit 
      ? <PrimaryButton onClick={onClickEditTextButton} src={editImage}>Edit</PrimaryButton>
      :<><MiniNormalButton src={cancelImage} onClick={onClickCancelEditButton}>Cancel</MiniNormalButton>
         <MiniPrimaryButton src={saveImage} onClick={onClickSaveEditButton}>Save</MiniPrimaryButton>
       </>
      }
    </SContainer>
  )
}

const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SInput = styled.input`
  width: 87%;
  height: 40px;
  border: none;
  margin: 0 0 20px 0;
  padding: 0 0 0 30px;
  border-radius: 8px;
  font-family: NotoSansJP-Bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 700;
  padding-right: 7px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: #fff;
    outline: 1px solid #4CB3F8;
  }
`;
