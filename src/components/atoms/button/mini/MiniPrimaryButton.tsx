import React, { FC, ReactNode } from 'react'
import styled from "styled-components";
import { MiniBaseButton } from '../base/MiniBaseButton';
import { BaseText } from '../base/BaseText';

type Props = {
  children: ReactNode;
  src: string;
}


export const MiniPrimaryButton: FC<Props> = (props) => {
  const { children, src } = props;

  return (
    <SButton>
      <img src={src} />
      <SText>{children}</SText>
    </SButton>
  )
}

const SButton = styled(MiniBaseButton)`
  background-color: #4CB3F8;
  font-weight: 2px;
  border: none;
  color: #fff;
  border-radius: 4px;

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


