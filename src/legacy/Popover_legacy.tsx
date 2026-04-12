import "./App.css";
import { Button } from "@/components/ui/button";
// Compound Component Pattern
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
function PopoverPractice() {
  return (
    <div className="p-5">
      <Popover>
        {/* Popover 창을 여는 버튼의 역할 */}
        <PopoverTrigger>Open</PopoverTrigger>
        {/*
          만약 Shadcn/ui로 만든 Button 컴포넌트를 트리거로 사용하고 싶다면?
          asChild prop을 활용하기!
          asChild: PopoverTrigger의 props와 동작을
          Button 컴포넌트로 병합하겠다.

          결론은 asChild가 없어도 동작은 하겠지만, 
          PopoverTrigger로 생성된 버튼 하나와
          Button 컴포넌트 선언으로 생성된 버튼이 둘 다 생성되어
          불필요한 렌더링으로 인한 성능 저하가 있을 수 있다.
        */}

        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        {/* 버튼을 눌렀을 때 보여질 내용들에 대한 부분 */}
        <PopoverContent>content</PopoverContent>
      </Popover>
    </div>
  );
}

export default PopoverPractice;
