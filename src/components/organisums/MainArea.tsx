import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { EditTitleInput } from "components/molecules/main/EditTitleInput";
import { EditTextInput } from "components/molecules/main/EditTextInput";

export const MainArea = () => {
  const [ contents, setContents ] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:3000/content/${id}`)
    .then(res => {
      setContents(res.data)
    })
  },[
    id
  ])
  
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
  margin: 30px 40px 0 40px;
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
