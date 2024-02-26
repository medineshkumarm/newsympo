import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carousels() {
  return (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  {/* Adjust the image size as needed */}
                  <img
                    src="/img/1.png"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
