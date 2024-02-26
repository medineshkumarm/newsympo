import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardFrontProps {
  title: string;
  description: string;
  ImgSrc: string;
}

export function CardFront({ title, description, ImgSrc }: CardFrontProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-6 items-center">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <img src={ImgSrc} alt="robotImage" className="w-full rounded-lg " />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Know more</Button>
        <Button variant="secondary">Register</Button>
      </CardFooter>
    </Card>
  );
}

interface CardBackProps {
  title: string;
  description: string;
}

export function CardBack({ title, description }: CardBackProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-6 items-center">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>{/* Add your content here */}</CardContent>
      <CardFooter className="flex justify-between">
        {/* Add your content here */}
      </CardFooter>
    </Card>
  );
}
