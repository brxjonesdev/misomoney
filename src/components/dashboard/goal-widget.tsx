import React from 'react'
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
export default function GoalWidget() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Goals</CardTitle>
        <CardDescription>Set and track your financial goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-medium">Save for Vacation</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress className="w-32" value={75} />
              <span className="text-gray-500 dark:text-gray-400">
                $3,750 / $5,000
              </span>
              <Button size="icon" variant="ghost">
                {/* <FilePenIcon className="h-4 w-4" /> */}
                <span className="sr-only">Edit goal</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="font-medium">Pay off Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress className="w-32" value={50} />
              <span className="text-gray-500 dark:text-gray-400">
                $2,500 / $5,000
              </span>
              <Button size="icon" variant="ghost">
                {/* <FilePenIcon className="h-4 w-4" /> */}
                <span className="sr-only">Edit goal</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="font-medium">Build Emergency Fund</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress className="w-32" value={25} />
              <span className="text-gray-500 dark:text-gray-400">
                $1,250 / $5,000
              </span>
              <Button size="icon" variant="ghost">
                {/* <FilePenIcon className="h-4 w-4" /> */}
                <span className="sr-only">Edit goal</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
