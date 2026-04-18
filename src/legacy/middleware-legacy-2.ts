// create는 state, action 함수를 포함하는 객체인 store를 생성한다.
import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  // zustand 미들웨어
  // 3. subscribeWithSelector
  // 직역하면 셀렉터와 함께 구독한다.
  // 셀렉터 함수를 통해서 스토어의 특정 값을 구독함으로써
  // 해당 값이 "변경"될 때 마다 어떠한 기능을 추가로 수행하도록 하는 기능
  // 마치 react의 useEffect와 같은 역할

  // 사용 방법
  // 우리는 현재 create() 안에 immer()를 위치시키고 있는데 그 immer를
  // 감싸는 구조로 만들어주면 됨.
  subscribeWithSelector(
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
  ),
);

// 활용 방법
// .subscribe() 매서드를 사용한다.
// 괄호 안에는 selector 함수(내가 스토어의 어떤 값을 가져올 것인지)를 적어주면 된다.
// 여기서는 count 값을 구독(감시)한다는 의미
useCountStore.subscribe(
  (store) => store.count,
  // .subscribe 함수의 두 번째 인자 자리에는
  // selector 함수를 통해 구독한 값이 변경될 때 마다 실행되는 콜백함수가 들어간다.
  // 이를 우리는 Listener라고 부른다.
  // 이 Listener 함수에는 두 번째 매개변수로 우리가 선택한 값이 변경되기 이전의 값도 저장하는 기능이 있음.
  // 그래서 prevCount 이런 식으로 받아도 됨.
  (count, prevCount) => {
    console.log(count, prevCount);

    // 현재 count 값을 "store"라는 변수에다가 할당해, 변수로서의 역할로도 활용할 수 있음
    const store = useCountStore.getState();
    // .setState(콜백함수)로 .getState()를 통해 변수에 할당한 값을 수정할 수도 있다.
    // useCountStore.setState((store) => ({}))
  },
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
