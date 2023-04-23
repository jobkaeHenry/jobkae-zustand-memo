import styled from "styled-components";
import { useMemoStore } from "../store/MemoList";

const MemoElem = (props) => {
  const { children, id } = props;
  const { removeMemo } = useMemoStore();

  return (
    <MemoWrapper>
      <div>{children}</div>
      <RemoveButton onClick={() => removeMemo(id)}>삭제</RemoveButton>
    </MemoWrapper>
  );
};

export default MemoElem;

const MemoWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  padding: 16px;
  border: 1px solid orange;
  background-color: lightyellow;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  z-index: 999;
`;

const RemoveButton = styled.button`
  padding: 4px 7px;
  background-color: transparent;
  border: 1px solid #ccc;
  color: #999;
  position: absolute;
  top: 4px;
  right: 4px;
`;
