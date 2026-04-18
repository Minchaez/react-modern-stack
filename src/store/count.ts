// create는 state, action 함수를 포함하는 객체인 store를 생성한다.
import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  // zustand 미들웨어
  // 개발자 도구를 통해서 스토어를 디버깅할 수 있도록 도와주는 tool
  devtools(
    persist(
      // 4. persist
      // 현재 스토어의 값을 브라우저의 스토리지, 뭐 로컬이나 세션에 저장해주는 역할을 하는 미들웨어
      // 사용 방법
      // 기존 미들웨어의 사용과 동일하게 create() 안쪽에 위치시켜주면 됨.
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
      // persist: 어떤 스토어를 보관할 것인지 두 번째 인수로 결정해라({이름: "asd"}의 형태로).
      // 그러면 그 값을 로컬 스토리지에 자동으로 넣어줄게.
      // 지금의 경우는 countStore라는 이름으로 count, actions객체가 들어가있다.
      // actions객체 안에 있는 함수(increase, decrease)들은 json파싱이 되지 않기에,
      // 빈 객체로 저장이 되는데, persist는 새로고침시, 로컬 스토리지에서 객체를 가져와 그대로 사용하기에
      // 새로고침이 1회 일어나면 actions 버튼을 눌러도 함수가 사라져버려서 아무런 동작을 하지 않는다.
      // 그래서 partialize 함수를 통해서 어떤 값을 스토리지에 보관해줄 것인지를 지정해주는 것이 안전하다.
      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count,
        }),
        // persist 미들웨어가 지금처럼 로컬 스토리지 대신에 세션 스토리지에 담을 수 있게 하는 방법
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    // Redux Dev Tools 에서 확인할 수 있음
    { name: "countStore" },
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
