import "./App.css";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
function ShadcnPractice() {
  return (
    <>
      {/*
        sonner? 이름은 생소하지만 Toast라고 생각하면 된다.
        App 컴포넌트 같은 모든 컴포넌트의 부모 역할을 하는 컴포넌트의 위치에
        <Toaster />
        이렇게 넣어주면 된다.

        그 뒤 Toast 기능을 원하는 부분에서
        import { toast } from "sonner"
        이런 식으로 불러와서 
        toast("Event가 생성되었습니다.")
        이렇게 호출하면 된다.
      */}
      <Toaster />
      {/* 
        만약 토스트 메세지가 보이는 위치를 바꾸고 싶으면 
        toast()의 두 번째 인수로
        { position:"top-center" }
        뭐 이렇게 바꿔주면 됨.
      */}
      <Button
        onClick={() => {
          toast("토스트 메세지!", { position: "top-center" });
        }}
      >
        toast버튼
      </Button>
    </>
  );
}

export default ShadcnPractice;
