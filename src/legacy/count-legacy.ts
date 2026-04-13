// create는 state, action 함수를 포함하는 객체인 store를 생성한다.
import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
    increase: () => {
      // get() 메서드는 내가 create로 선언한 객체(count, increase, decrease)를 의미한다.
      // 그렇기에, get().count 형태의 프로퍼티 접근법으로 접근해 변수에 할당하면 된다.
      // const count = get().count;
      // // set() 메서드는 get()으로 가져온 객체의 특정 프로퍼티만을 수정할 수 있는 메서드임.
      // set({
      //   count: count + 1,
      // });

      // 근데 set은 함수형 선언 방식으로도 선언할 수 있는데, 이 떄의 장점은
      // set((store) => {}) 이런 식으로 store라는 매개변수를 통해
      // store를 통해 생성된 객체에 바로 접근할 수 있다는 점이다.
      // 그렇기에 get() 메서드도 사실 쓸 필요가 없는거지.
      set((store) => ({
        count: store.count + 1,
      }));
    },
    decrease: () => {
      set((store) => ({
        count: store.count - 1,
      }));
    },
  },
}));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
