import { ThemeSwitcher } from "@/components/theme-switcher";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md dark:bg-black">
      <CardContent className="flex flex-col items-center">
        <h1 className="text-5xl">Next.js Starter</h1>
        <p className="mb-10 text-xl">A simple starter for Next.js</p>
        <ThemeSwitcher />
      </CardContent>
    </Card>
  );
}
