import styled from "styled-components";

import { Footer } from "components/organisums/footer/Footer";
import { MainArea } from "components/organisums/main/MainArea";
import { Sidebar } from "components/organisums/sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <SContainer>
        <Sidebar/>
        <SRightArea>
          <MainArea/>
          <Footer/>
        </SRightArea>
      </SContainer>
    </div>
  );
}

const SContainer = styled.div`
  display: flex;
`;

const SRightArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
