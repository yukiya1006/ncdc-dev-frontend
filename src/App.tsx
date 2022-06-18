import styled from "styled-components";

import {Sidebar} from './components/sidebar/Sidebar';
import {TextArea}  from 'components/main/TextArea';
import {Footer}  from 'components/footer/Footer';

function App() {
  return (
    <div className="App">
      <SContainer>
        <Sidebar/>
        <SRightArea>
          <TextArea/>
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
