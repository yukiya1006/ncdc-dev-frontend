import styled from "styled-components"; 
import { useEffect, useState } from "react";
import axios from "axios";

import { PrimaryButton } from 'components/atoms/button/standard/PrimaryButton'
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../../images/edit.svg";
import cancelImage from "../../../images/cancel.svg";
import saveImage from "../../../images/save.svg";
import { useParams } from "react-router-dom";
import { stringify } from "querystring";


export const EditTitleInput = (props) => {
  const { contents } = props;
  const id = useParams().id;

  const [ isEdit, setIsEdit ] = useState(true);

  const onClickEditTitleButton = () => {
    setIsEdit(!isEdit);
    console.log(isEdit);
  }

  const [value, setValue] = useState(contents.title);
  console.log(value);

  useEffect(() => {
    setValue(contents.title);
  },[contents])


  const onClickSaveEditButton = () => {
    setIsEdit(!isEdit);  
    axios.put(`http://localhost:3000/content/${id}`, {title: value})
  }  

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
  background-color: #F5F8FA;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: #fff;
    outline: 1px solid #4CB3F8;
  }
`;
