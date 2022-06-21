import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PrimaryButton } from "components/atoms/button/standard/PrimaryButton";
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../../images/edit.svg";
import cancelImage from "../../../images/cancel.svg";
import saveImage from "../../../images/save.svg";

export const EditTextInput = (props) => {
  const { contents } = props;
  const id = useParams().id; 
  const [ isEdit, setIsEdit ] = useState(true);
  const [ value, setValue ] = useState(contents.body);

  useEffect(() => {
    setValue(contents.body);
  },[contents])

  const onClickSaveEditButton = () => {
    setIsEdit(!isEdit);  
    axios.put(`http://localhost:3000/content/${id}`, {body: value})
  }
  
  const onClickTextButton = () => {
    setIsEdit(!isEdit);
  }
  
  return (
    <>
    <SContainer>
      <SText value={value} disabled={isEdit} onChange={(e) => setValue(e.target.value)}></SText>
      { isEdit
      ? <PrimaryButton src={editImage} onClick={onClickTextButton}>Edit</PrimaryButton>
      : <>
          <MiniNormalButton src={cancelImage} onClick={onClickTextButton}>Cancel</MiniNormalButton>
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
