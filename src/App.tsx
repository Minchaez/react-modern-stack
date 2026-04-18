import "./App.css";

function App() {
  return (
    <>
      {/* 타이포그래피 */}
      <div className="text-xs text-red-500">xs</div>
      <div className="text-sm">sm</div>
      <div className="text-lg">lg</div>
      <div className="text-xl">xl</div>
      {/* 대괄호 안에 직접 value를 입력하며 세부 지정도 가능 */}
      <div className="text-[13px]">13픽셀</div>
      {/* 백그라운드 컬러 */}
      <div className="bg-amber-500">앰버 색 배경</div>
      {/* 사이즈: 입력한 수치 곱하기 4 */}
      <div className="w-20 bg-blue-500">80px box</div>
      <div className="w-[100px] bg-blue-500">100px box</div>

      {/* 여백(padding, margin) */}
      <div className="m-5 h-50 w-50 bg-red-500 p-5">
        <div className="h-full w-full bg-blue-500"></div>
      </div>

      {/* border */}
      <div className="m-5 w-40 border-b border-l-5 border-red-500 p-2">
        border
      </div>
      <div className="m-5 h-20 w-20 rounded-md border-4">box</div>

      {/* flex container */}
      <div className="m-5 flex items-center justify-center">
        <p className="mr-4">items-center</p>
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
      <div className="m-5 flex items-start justify-center">
        <p className="mr-4">items-start</p>
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </>
  );
}

export default App;
