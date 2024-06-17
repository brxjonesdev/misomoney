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

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("coolgrey-light")}>
            Cool Grey Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("coolgrey-dark")}>
            Cool Grey Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("purple-light")}>
            Purple Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("purple-dark")}>
            Purple Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("coolblues-light")}>
            Cool Blues Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("coolblues-dark")}>
            Cool Blues Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunburst-light")}>
            Sunburst Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunburst-dark")}>
            Sunburst Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rose-light")}>
            Rose Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rose-dark")}>
            Rose Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
