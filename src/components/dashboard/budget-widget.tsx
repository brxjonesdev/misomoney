import React from 'react'
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
export default function BudgetWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budgets</CardTitle>
        <CardDescription>Set and manage your spending budgets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="font-medium">Food</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">
                $500 / $600
              </span>
              <Button size="icon" variant="ghost">
                <FilePenIcon className="h-4 w-4" />
                <span className="sr-only">Edit budget</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-medium">Housing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">
                $1,200 / $1,200
              </span>
              <Button size="icon" variant="ghost">
                <FilePenIcon className="h-4 w-4" />
                <span className="sr-only">Edit budget</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="font-medium">Entertainment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">
                $150 / $200
              </span>
              <Button size="icon" variant="ghost">
                <FilePenIcon className="h-4 w-4" />
                <span className="sr-only">Edit budget</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="font-medium">Transportation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">
                $150 / $200
              </span>
              <Button size="icon" variant="ghost">
                <FilePenIcon className="h-4 w-4" />
                <span className="sr-only">Edit budget</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function FilePenIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}
