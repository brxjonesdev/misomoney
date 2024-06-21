import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function SummaryWidget() {
  return (
    <Card className="w-full flex items-center">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Budget Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex gap-12 mx-auto flex-wrap">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-md dark:bg-green-900/20">
            <WalletIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Income
            </p>
            <p className="font-medium">$4,500.00</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-md dark:bg-red-900/20">
            <ReceiptIcon className="w-5 h-5 text-red-500 dark:text-red-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Expenses
            </p>
            <p className="font-medium">$3,200.00</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Current Balance
          </p>
          <p className="text-md font-medium">$1,300.00</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">Net Worth</p>
          <p className="text-md font-medium">$5,800.00</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ReceiptIcon(
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}

function WalletIcon(
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
