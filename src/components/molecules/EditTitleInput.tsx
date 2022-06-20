import styled from "styled-components"; 

import { PrimaryButton } from 'components/atoms/button/standard/PrimaryButton'
import { MiniNormalButton } from "components/atoms/button/mini/MiniNormalButton";
import { MiniPrimaryButton } from "components/atoms/button/mini/MiniPrimaryButton";
import editImage from "../../images/edit.svg";
import cancelImage from "../../images/cancel.svg";
import saveImage from "../../images/save.svg";


export const EditTitleInput = () => {

  return (
    <SContainer>
      <SInput type="text" />

      {/* 参考演算子で表示切り替え */}
      <PrimaryButton src={editImage}>Edit</PrimaryButton>
      {/* or */}
      <MiniNormalButton src={cancelImage}>Cancel</MiniNormalButton>
      <MiniPrimaryButton src={saveImage}>Save</MiniPrimaryButton>
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
  background-color: #fff;
  outline: 1px solid #4CB3F8;
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
`;
