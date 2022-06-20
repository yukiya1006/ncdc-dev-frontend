import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { EditTitleInput } from "components/molecules/main/EditTitleInput";
import { EditTextInput } from "components/molecules/main/EditTextInput";
import { useEffect, useState } from "react";

type Content = {
  body: string;
}

export const MainArea = () => {
  const id = useParams().id;

  const [ contents, setContents ] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/content/${id}`)
    .then(res => {
    setContents(res.data)
  })},[id])
  
  
  return (
    <SContainer>
      <EditTitleInput contents={contents}/>
      <EditTextInput contents={contents}/>
    </SContainer>
  )
}

const SContainer = styled.div`
height: 100%;
background-color: #F5F8FA ;
  border-radius: 16px;
  font-family: NotoSansJP-Regular;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
  padding: 30px;
  margin: 30px 30px 0 30px;
`;

const SMain = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const STesxArea = styled.div`
  width: 80%;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px 30px 0 30px ;

`;

const SP = styled.p`
  margin: 0;
`;
