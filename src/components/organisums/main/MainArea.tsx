import react, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios'

import { EditTitleInput } from "components/molecules/EditTitleInput";
import { EditTextInput } from "components/molecules/EditTextInput";

export const MainArea = () => {
  const [post, setPost] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/content/1')
    .then(res => {
        setPost(res.data.body)
    })
}, [])

  return (
    <SContainer>
      <EditTitleInput/>
      <EditTextInput />
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
