import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { DeleteButton } from "../../atoms/button/standard/DeleteButton"
import { PrimaryButton } from "../../atoms/button/standard/PrimaryButton"
import { SecondaryButton } from "../../atoms/button/standard/SecondaryButton"
import doneImage from "../../../images/done.svg";
import plusImage from "../../../images/plus.svg";
import editImage from "../../../images/edit.svg";

type contentsType = {
  map: any;
}

export const MenuArea = () => {
  const [ contents, setContents ] = useState<contentsType>([]);
  const [ isEdit, setIsEdit ] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    axios.get('http://localhost:3000/content')
    .then(res => {
    setContents(res.data)
  })
  },[])

  const onClickEditButton = () => {
    setIsEdit(!isEdit)
  }

  const onClickDeleteTitle = (content) => {
    if (window.confirm("削除しますか？")) {
      axios.delete(`http://localhost:3000/content/${content.id}`)
      .then(res => {
        axios.get('http://localhost:3000/content')
        .then(res => {
          setContents(res.data)
        })
      })
    }
  }
  
  const onClickNewPage = () => {
    axios.post(`http://localhost:3000/content`, {title: "Title", body: "Body"})
      .then(res => {
      axios.get(`http://localhost:3000/content`)
      .then(res => {
        setContents(res.data)
      })
    })
  }
  
  return (
    <>
      {contents.map((content, index) => (
        <SMenuArea key={content.id}>
          <Link to={`/${content.id}`}>
            <SInput value={content.title} disabled={true} className="input"/>
          </Link>
          <SDeleteButton className={isEdit ? "open" : "close"}>
            <DeleteButton onClick={() => onClickDeleteTitle(content)}/>
          </SDeleteButton>
        </SMenuArea>
       ))}
      <SBottomArea>
         <>
         {isEdit 
         ?
         <>
           <SecondaryButton src={plusImage} onClick={onClickNewPage}>New page</SecondaryButton>
           <SecondaryButton src={doneImage} onClick={onClickEditButton}>Done</SecondaryButton>
         </>
         :  
         <SEditButton>
           <PrimaryButton src={editImage} onClick={onClickEditButton}>Edit</PrimaryButton>
          </SEditButton>}
        </>
      </SBottomArea>
    </>
  )
}

const SMenuArea = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  font-family: NotoSansJP-Regular;
  color: #333333;
  font-weight: 400;
  &:hover{
    background-color: #F5F8FA;
    border-radius: 4px;
    color: #32A8F8;
    font-weight: 700;
    cursor: pointer;
    .input {
      background-color: #F5F8FA;
    }
  }
`;

const SInput = styled.input`
  width: 186px;
  height: 24px;
  margin: 0 10px;
  padding: 0;
  border: none;
  font-family: NotoSansJP-Bold;
  font-size: 16px;
  letter-spacing: 0;
  font-weight: 700;
  background-color: #fff;
  &:focus {
    outline: none;
    color: #32A8F8;
  }
  &:hover {
    cursor: pointer;
  }
  `;

const SDeleteButton = styled.span`
  &.open {
    opacity: 1;
  }
  &.close {
    opacity: 0;
  }
`;

const SEditButton = styled.span`
  margin: 0 auto;
`;

const SBottomArea = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 30px;
  position: fixed;
  bottom: 0;
  background-color: #F6F8FA;
  transform: translateX(-40px);
`;
