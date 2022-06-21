import styled from "styled-components";

import { TitleLogo } from "components/molecules/sidebar/TitleLogo";
import { InputMenuWidthDelete } from '../molecules/sidebar/InputMenuWidthDelete';
import { SidebarBottom } from '../molecules/sidebar/SidebarBottom';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export const Sidebar = () => {
  const [ contents, setContents ] = useState([]);
  const id = useParams().id;
  
  useEffect(() => {
    axios.get('http://localhost:3000/content')
    .then(res => {
    setContents(res.data)
  })},[])
  

  return ( 
    <SContainer>
      <TitleLogo/>
      <InputMenuWidthDelete/>
      <SBottom>
        <SidebarBottom content={contents}/>
      </SBottom>
    </SContainer>
  )
}

const SContainer = styled.section`
  width: 240px;
  height: 100vh;
  border-right: 1px solid #F6F8FA;
  position: relative;
  padding-left: 40px;
`;

const SBottom = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  background-color:#F6F8FA ; 
  padding: 10px 0;
  padding-left: 20px;
`;
