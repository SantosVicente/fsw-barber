import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex-col space-y-4 flex justify-center items-center">
      <h1>FSW Barber</h1>
      <Button variant={"default"}>Click me</Button>
    </div>
  );
}
