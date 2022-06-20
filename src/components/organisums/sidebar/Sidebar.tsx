import styled from "styled-components";

import logoImage from "../../../images/logo.svg";
import { MenuEdit } from './SidebarMenu';
import { SidebarBottom } from './SidebarBottom';

export const Sidebar = () => {
  return (
    <SSidebar>
      <STop>
       <SImg src={logoImage} />
       <STitle>ServiceName</STitle>
      </STop>
      <SMain>
        <MenuEdit/>
      </SMain>
      <SBottom>
        <SidebarBottom />
      </SBottom>
    </SSidebar>
  )
}

const SSidebar = styled.section`
  width: 240px;
  height: 100vh;
  border-right: 1px solid #F6F8FA;
  position: relative;
  padding-left: 40px;
`;

const STop = styled.div`
  display: flex;
  justfiy-content: center;
  align-items: center;
  padding-top: 20px;
`;

const SImg = styled.img`
  width: 32px;
  height: 32px;
  background-color: #4CB3F8;
  border-radius: 50%;
  margin: 8px 4px 0 0;
`;

const STitle = styled.h1`
  font-family: Gotham Bold;
  width: 161px;
  height: 24px;
  color: #1A1A1A;
`;

const SMain = styled.div`
  
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
