import axios from "axios";
import styled from "styled-components"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PrimaryButton } from 'components/atoms/button/standard/PrimaryButton'
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../../images/edit.svg";
import cancelImage from "../../../images/cancel.svg";
import saveImage from "../../../images/save.svg";


export const EditTitleInput = (props) => {
  const { contents } = props;
  const [ isEdit, setIsEdit ] = useState(true);
  const [value, setValue] = useState(contents.title);
  const id = useParams().id;

  const onClickEditTitleButton = () => {
    setIsEdit(!isEdit);
  }

  const onClickSaveEditButton = () => {
    setIsEdit(!isEdit);  
    axios.put(`http://localhost:3000/content/${id}`, {title: value})
  }  
  
  useEffect(() => {
    setValue(contents.title);
  },[contents])
  
  

  return (
    <SContainer>
      <SInput type="text" value={value} disabled={isEdit} onChange={(e) => setValue(e.target.value)}/>
      { isEdit 
      ? <PrimaryButton onClick={onClickEditTitleButton} src={editImage}>Edit</PrimaryButton>
      :<><MiniNormalButton src={cancelImage} onClick={onClickEditTitleButton}>Cancel</MiniNormalButton>
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
  gap: 20px;
`;

const SInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  margin: 0 0 20px 0;
  padding: 0 30px 0 30px;
  border-radius: 8px;
  font-family: NotoSansJP-Bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 700;
  padding-right: 7px;
  background-color: #F5F8FA;
  &:focus {
    background-color: #fff;
    outline: 1px solid #4CB3F8;
  }
`;
