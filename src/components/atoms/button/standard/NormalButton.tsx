import React, { FC, ReactNode } from 'react'
import styled from "styled-components";
import { BaseButton } from '../base/BaseButton';



type Props = {
  children: ReactNode;
}


export const NormalButton: FC<Props> = (props) => {
  const { children } = props;
  
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #B3B3B3;
  border: none;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #999;
  }  
  &:active {
    background-color: #808080; 
  }
`;
