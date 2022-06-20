import { FC, ReactNode } from "react";
import styled from "styled-components";

import { BaseButton } from "../base/BaseButton";
import { BaseText } from "../base/BaseText";

type Props = {
  children: ReactNode;
  src: string;
  onClick: any;
}

export const PrimaryButton: FC<Props> = (props) => {
  const { children, src, onClick } = props;

  return (
    <SButton  onClick={onClick}>
      <img src={src} />
      <SText>{children}</SText>
    </SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #4CB3F8;
  border: none;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #3C8EC4;
  }  
  &:active {
    background-color: #347CAB; 
  }
`;

const SText = styled(BaseText)`
`;

const SImg = styled.img`
  margin-top: 2px;
`;

