import { Outlet, Route, Routes } from "react-router";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import "./App.css";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      {/*
        (여기서)Outlet의 역할
        Auth와 관련된 페이지들의 공용 레이아웃을 잡으려고 한다.
        "Auth!"문구가 들어가있는 헤더는 항상 나오도록하고
        헤더 밑에 페이지들을 보여주려고 한다.

        그런 상황에서 다음과 같은 구조는 아래와 같은 의미를 가진다.
        Route의 element prop으로 AuthLayout을 넣은 페이지들을 렌더링할 때,
        header는 항상 보여주고 각 주소에 맞는 페이지들의 내용을 header 밑에
        렌더링하여 보여주도록 해라.
       */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
