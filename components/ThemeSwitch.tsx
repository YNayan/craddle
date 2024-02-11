"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  let content: React.ReactNode;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src={
          "data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        }
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  if (resolvedTheme === "dark") {
    content = <FaSun className="h-8 w-8" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    content = <FaMoon className="h-8 w-8" onClick={() => setTheme("dark")} />;
  }
  return (
    <div className="flexCenter h-12 w-12 l:h-5 l:w-5 cursor-pointer hover:bg-gray-60 dark:hover:bg-black-20 transition-all rounded-full text-purple-500 dark:text-blue-20">
      {content}
    </div>
  );
}
