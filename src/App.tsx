import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";


import { Footer } from "components/organisums/Footer";
import { MainArea } from "components/organisums/MainArea";
import { Sidebar } from "components/organisums/Sidebar";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:id"
          element={
            <SContainer>
              <Sidebar/>
              <SRightArea>
                <MainArea/>
                <Footer/>
              </SRightArea>
            </SContainer>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

const SContainer = styled.div`
  display: flex;
`;

const SRightArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
