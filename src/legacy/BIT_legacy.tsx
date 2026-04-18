import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
function BITPractice() {
  // B(utton) I(nput) T(extarea)에 대한 연습 파일
  const isActive = true;

  return (
    <>
      <Button>클릭</Button>
      {/* cn은 여러 스타일 class들을 묶어서 한 번에 관리할 수 있도록 해주는 것 */}
      <div
        className={cn(
          "w-10 text-sm",
          isActive ? "text-green-500" : "text-red-500",
        )}
      >
        isActive
      </div>
      {/* shadcn/ui Button */}
      <Button variant={"destructive"}>버튼</Button>
      <Button variant={"ghost"}>버튼</Button>
      <Button variant={"link"}>버튼</Button>
      <Button variant={"outline"}>버튼</Button>
      <Button variant={"secondary"}>버튼</Button>

      {/* shadcn/ui Input, Textarea
      이 둘은 HTML과 똑같은 prop들을 받기에 따로 부가적인 설명은 X
      */}
      <Input placeholder="입력..." />
      <Textarea />
    </>
  );
}

export default BITPractice;
