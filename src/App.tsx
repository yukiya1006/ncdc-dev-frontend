import styled from "styled-components";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";

import { Footer } from "components/organisums/Footer";
import { MainArea } from "components/organisums/MainArea";
import { Sidebar } from "components/organisums/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path=""
          element = {
            <SContainer>
              <Sidebar/>
              <SRightArea>
                <MainArea/>
                <Footer/>
              </SRightArea>
            </SContainer>
          }
          />
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
