import { create } from "zustand";

export const useMemoStore = create((set) => ({
  memoList: [],
  addMemo: (content) =>
    set((prev) => ({
      memoList: [...prev.memoList, { content, id: new Date() }],
    })),

  removeMemo: (id) =>
    set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
}));
