import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t  bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full md:justify-between justify-center">
        <Logo />
        <div className="text-xs">
          © 2024 Sarthak Sarangi. All Rights Reserved
        </div>
        <div className="hidden md:flex flex-col items-center w-36">
          <Button size="xs" variant="link">
            Privacy Notice
          </Button>
          <Button size="xs" variant="link">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
