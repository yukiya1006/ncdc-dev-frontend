import React, { FC, ReactNode } from 'react'
import styled from "styled-components";
import { MiniBaseButton } from '../base/MiniBaseButton';
import { BaseText } from '../base/BaseText';

type Props = {
  children: ReactNode;
  src: string;
  onClick: any;
}


export const MiniNormalButton: FC<Props> = (props) => {
  const { children, src, onClick } = props;

  return (
    <SButton>
      <img src={src} />
      <SText>{children}</SText>
    </SButton>
  )
}

const SButton = styled(MiniBaseButton)`
  background-color: #B3B3B3;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #999;
  }  
  &:active {
    background-color: #808080; 
  }
  `;

const SText = styled(BaseText)`
  font-size: 10px;
`;

const SImg = styled.img`
  margin-top: 2px;
`;

