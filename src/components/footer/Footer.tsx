import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <div>Copyright © 2021 Sample</div>
      <p>運営会社</p>
    </SFooter>
  )
}

const SFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;
