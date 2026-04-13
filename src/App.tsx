import { Outlet, Route, Routes } from "react-router";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import "./App.css";
import Counter from "./pages/counter-page";

/* 
  Zustand: 전역 상태 관리를 도와주는 라이브러리
  그럼 Context API와의 차이는?
  사실 Context API는 전역 상태 관리를 위한 것이라기보다
  Props Drilling을 막기 위한 하나의 수단 같은 거다.
  <Context Provider />를 통해 Props Drilling 없이 한 번에 값을
  전달할 수 있지만, 하위 상태 중 하나가 바뀔 경우, Context API의 값이 바뀌며
  전체가 리렌더링 되는 치명적인 단점이 존재한다. 그래서 Context API는 보통
  범용적인 전역 상태 관리보다는 국소적인 데이터 공유를 위해 더 자주 사용되곤한다.
 */

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
