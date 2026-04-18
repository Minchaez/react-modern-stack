// carousel은 그 기능을 제대로 하기 위해
// 여러 개의 import가 필요한데, 이런 구조를 우리는
// Compound Component Pattern
// 합성 컴포넌트 패턴이라고 부른다.
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "./App.css";
function CarouselPractice() {
  // carousel
  // 보통 우리가 이미지 슬라이드를 마주하게 되었을 때
  // 볼 수 있는 ui
  // 이미지의 양 쪽에 화살표 버튼이 있는 구조
  return (
    <div className="p-5">
      <Carousel className="mx-20">
        <CarouselContent>
          {/* "basis-1/3은 화면의 3분의 1만큼만 차지하게끔 하는 것" */}
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselPractice;
