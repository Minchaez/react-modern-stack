import "./App.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
function ShadcnPractice() {
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
    </>
  );
}

export default ShadcnPractice;
