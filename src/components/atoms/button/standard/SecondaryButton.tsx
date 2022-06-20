import React, { FC, ReactNode } from 'react'
import styled from "styled-components";

import { BaseButton } from '../base/BaseButton';
import { BaseText } from '../base/BaseText';


type Props = {
  children: ReactNode;
  src: string;
}


export const SecondaryButton: FC<Props> = (props) => {
  const { children, src } = props;
  
  return (
    <SButton>
      <SImg src={src} />
      <SText>{children}</SText>
    </SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #fff;
  border: 3px solid #4CB3F8;
  color: #4CB3F8;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }  
  &:active {
    background-color: #B3B3B3; 
  }
`;

const SText = styled(BaseText)`
`;

const SImg = styled.img`
  margin-top: 2px;
`;
