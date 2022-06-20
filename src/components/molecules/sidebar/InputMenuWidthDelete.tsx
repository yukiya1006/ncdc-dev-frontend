import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { DeleteButton } from "../../atoms/button/standard/DeleteButton"

type Content = {
  id: number;
  title: string;
  body: string;
}

export const InputMenuWidthDelete = () => {
  const [ contents, setContents ] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/content')
    .then(res => {
    setContents(res.data)
  })},[])

  return (
    <>
      {contents.map((content: Content) => (
        <SContainer>
          <Link to={`/${content.id}`}>
            <SInput value={content.title} className="input"/>
          </Link>
          <DeleteButton />
        </SContainer>
      ))}
    </>
  )
}

const SContainer = styled.div`
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
  border: none;
  font-family: NotoSansJP-Bold;
  font-size: 16px;
  letter-spacing: 0;
  font-weight: 700;
  &:focus {
    outline: none;
    color: #32A8F8;
  }
  &:hover {
    cursor: pointer;
  }
  `;
