import Controller from "../components/counter/controller";
import Viewer from "../components/counter/viewer";
import { useCountStore } from "../store/count";

export default function CounterPage() {
  // useCountStore라는 함수(Store를 반환하는)를 실행하고 구조분해할당으로 각 변수에 할당한다.
  return (
    <div className="text-center">
      <h1>Counter</h1>
      <div className="justify-center gap-10">
        <Viewer />
        <Controller />
      </div>
    </div>
  );
}
