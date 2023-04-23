import MemoElem from "./components/MemoElem";
import MemoInput from "./components/MemoInput";
import MemoBoard from "./components/MemoBoard";
import { useMemoStore } from "./store/MemoList";

const App = () => {
  const { memoList } = useMemoStore();
  return (
    <>
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElem key={e.id} id={e.id}>
                {e.content}
              </MemoElem>
            );
          })
        ) : (
          <span>메모를 입력해주세요</span>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  );
};

export default App;
