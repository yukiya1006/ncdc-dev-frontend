import axios from "axios";
import react, {useState, useEffect} from "react";
import styled from "styled-components";

import { DeleteButton } from "../button/DeleteButton"

export const MenuEdit = () => {
  const [ contents, setContents ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/content/1')
    .then(res => {
        setContents(res.data.title)
    })
  }, [])

  return (
    <>
      <SMenuEdit>
        <SMenu>{contents}</SMenu>
        <DeleteButton />
      </SMenuEdit>
    </>
  )
}

const SMenuEdit = styled.div`
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
  }
`;

const SMenu = styled.p`
  width: 186px;
  height: 24px;
  margin-right: 10px;
  padding-left: 10px;
`;
