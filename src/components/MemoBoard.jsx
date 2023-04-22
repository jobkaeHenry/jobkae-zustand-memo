import { Children } from "react";
import styled from "styled-components";

const MemoBoard = (props) => {
  return (
    <MemoWrapper>
      {props.children}
      <LOL>떠든사람:잡캐헨리</LOL>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 16px;
  width: 800px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 240px;
  height: 450px;
  overflow-y: scroll;
  flex-wrap: wrap;
  border: 14px solid #875a36;
  background-color: #81b771;
  > span:first-child {
    color: #fff;
    padding: 4px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;
const LOL = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  bottom: 50px;
  right: 16px;
  transform: rotate(-8deg);
`;
export default MemoBoard;
