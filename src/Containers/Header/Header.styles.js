import styled from 'styled-components';

export const TabText = styled.p`
  color: black;
  text-decoration: none;
  border: black solid 1px;
  margin: 5px 0px 0px 10px;
  padding: 5px;
  border-radius: 10px;
  &:hover{
      background-color: cornsilk ;
  }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: burlywood;
    width: 100%;
    padding: 10px;
`;
export const Selections = styled.div`
    display: flex;
    flex-direction: row;
`;