"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className="relative h-[1.2rem] w-[1.2rem]
             text-black
             transition-all duration-300
             hover:scale-125 hover:rotate-12
             hover:text-yellow-600
             hover:drop-shadow-[0_0_14px_rgba(260,180,50,0.9)]
             dark:scale-0 dark:-rotate-90"
            />
          <Moon 
          className="absolute h-[1.2rem] w-[1.2rem] 
          scale-0 rotate-90 
          transition-all duration-300
          hover:scale-125 hover:rotate-12
          dark:scale-100 dark:rotate-0" 
          />
          
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
