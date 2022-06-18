import react, {useState, useEffect} from "react";
import styled from "styled-components";
import { FC } from "react"
import { Scrollbars } from 'rc-scrollbars'
import axios from 'axios'

import { PrimaryButton } from "components/button/PrimaryButton";
import editImage from "../../images/edit.svg";
import cancelImage from "../../images/cancel.svg";
import saveImage from "../../images/save.svg";
import { MiniPrimaryButton } from "components/button/mini/MiniPrimaryButton";
import { MiniNormalButton } from "components/button/mini/MiniNormalButton";

// type Props = {
//   "id": number;
//   "title": string;
//   "body": Text;
// }

export const TextArea = () => {
  // const { id, title, body  } = props;
  const [post, setPost] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/content/1')
    .then(res => {
        setPost(res.data.body)
    })
}, [])

  return (
    <SContainer>
      <STop>
        <STitle>坊ちゃん</STitle>
        <PrimaryButton src={editImage}>Edit</PrimaryButton>
      </STop>
      <SMain>
        <STesxArea>
        <Scrollbars autoHeight autoHeightMin={500} autoHeightMax={100}>
          <SP>
           {post}
          </SP>
          </Scrollbars>
        </STesxArea>
        <PrimaryButton src={editImage}>Edit</PrimaryButton>
        <MiniPrimaryButton src={saveImage}>save</MiniPrimaryButton>
      </SMain>
      <MiniNormalButton src={cancelImage}>Cancel</MiniNormalButton>
      <MiniPrimaryButton src={saveImage}>save</MiniPrimaryButton>
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

const STop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const STitle = styled.h2`
  width: 83%;
  height: 33px;
  background-color: #fff;
  outline: 1px solid #4CB3F8;
  margin: 0 0 20px 0;
  padding: 0 0 0 30px;
  border-radius: 8px;
`;

const SMain = styled.div`
  display: flex;
  justify-content: space-between;
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
