import React from 'react'
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
export default function SubscriptionsWidget() {
  return (
    <Card className="col-start-3">
      <CardHeader>
        <CardTitle>Recurring Payments</CardTitle>
        <CardDescription>
          View and manage your recurring payments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
