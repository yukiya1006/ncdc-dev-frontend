import { ReactComponent as Delete } from '../../images/delete.svg';
import styled from "styled-components";

export const DeleteButton = () => {
  const onClickMenuDelete = () => {
    alert('delete')
  };

  return (

    <SIcon onClick={onClickMenuDelete}>
      <Delete/>
    </SIcon>
  )
}

const SIcon = styled.p`
  width: 20px;
  height: 20px;
  padding: 2px 2px;
  &:hover {
    background-color: #E6E6E6;
    border-radius: 4px;
  }
  &:active {
    background-color: #CCCCCC;
    border-radius: 4px;
  }
`;
