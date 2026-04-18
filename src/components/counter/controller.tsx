import { useDecreaseCount, useIncreaseCount } from "../../store/count";

export default function Controller() {
  // const { increase, decrease } = useCountStore();
  // 이 방식엔 렌더링에 있어 문제가 존재한다. useCountStore함수는 store를 반환한다고 했는데,
  // store에는 count도 존재하기 때문에, count가 바뀌면
  // Store 타입에 들어가있는 increase, decrease를 사용하는
  // controller.tsx도 리렌더링 되게 된다.
  // 이런 불필요한 리렌더링을 막기 위해서는 어떤 값을 가져올지를 선언하는
  // selector함수를 useCountStore()안에 인수로 넣어주어야 한다.
  // const { increase, decrease } = useCountStore((store) => store.actions);

  // 근데 이렇게 사용하는 곳에서 selector함수로 그때그때 빼서 사용하는 구조는
  // increase나 decrease의 이름이 바뀌게 되면 이걸 사용하는 파일들의 이름들을 전부 바꿔야 한다는 단점이 존재한다.
  // 이를 해결하기 위해 selector함수를 통해 store에서 꺼내는 과정까지를 커스텀 훅으로 만들어 이를 해결할 수 있다.
  // count.ts의 useCount, useIncreaseCount, useDecreaseCount 참고
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div className="flex justify-center gap-10">
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
