// create는 state, action 함수를 포함하는 객체인 store를 생성한다.
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  // zustand 미들웨어
  // 1. combine
  // combine은 분리된 상태 혹은 함수들을 합쳐 하나의 store로서 동작할 수 있게 해주는 것.
  // combine의 첫 번째 인자에는 활용할 state를 넣어주고
  // 두 번째 인자에는 set, get을 매개변수로 받는 리턴 값을 포함한 함수 등을 넣어주면 combine이 하나로 합쳐준다.

  // 2. immer
  // immer는 set 함수 내에서 콜백함수의 형태로 {count: number} 객체를 리턴해서 다시 할당하는 구조가 아니라
  // 값에 "직접" 접근할 수 있게 도와주는 함수
  // 사용하는 방법은 import 후, combine 함수 바깥에 immer()를 한 번 더 감싸주면 됨.
  immer(
    combine({ count: 0 }, (set, get) => ({
      actions: {
        // immer 사용 방식
        // count를 지정하지 않아도 count값에 접근할 수 있기에 간편해진다.
        // immer의 효용성은 이런 간단한 예시보다는 복잡한 로직에서 극대화 되기에,
        // 이런 역할을 수행하는구나 정도만 알고 넘어가도 됨.
        increase: () => {
          set((state) => {
            state.count += 1;
          });
        },
        // immer 사용 X 방식
        decrease: () => {
          set((state) => ({
            count: state.count - 1,
          }));
        },
      },
    })),
  ),
);

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
