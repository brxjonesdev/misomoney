import React from 'react'
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

export default function TransactionWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>View your recent transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jun 15, 2023</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell>$124.56</TableCell>
              <TableCell>Food</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jun 12, 2023</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell>$1,200.00</TableCell>
              <TableCell>Housing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jun 10, 2023</TableCell>
              <TableCell>Netflix Subscription</TableCell>
              <TableCell>$14.99</TableCell>
              <TableCell>Entertainment</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jun 05, 2023</TableCell>
              <TableCell>Gas Refill</TableCell>
              <TableCell>$45.78</TableCell>
              <TableCell>Transportation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jun 01, 2023</TableCell>
              <TableCell>Paycheck</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>Income</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
