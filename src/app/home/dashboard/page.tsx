import IncomeGraphs from '@/components/dashboard/income-graphs'
import ExpenseGraphs from '@/components/dashboard/expense-graphs'
import MiscGraphs from '@/components/dashboard/misc-graphs'
import BudgetWidget from '@/components/dashboard/budget-widget'
import TransactionWidget from '@/components/dashboard/transaction-widget'
import GoalWidget from '@/components/dashboard/goal-widget'
import SubscriptionsWidget from '@/components/dashboard/subs-widget'
import SummaryWidget from '@/components/dashboard/summary-widget'

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 h-full">
      <section className='flex-grow bg-primaryColor h-full rounded-lg flex justify-center items-center'>
        <div className=''>
          <h1 className='text-4xl text-center text-secondaryColor'>No Data Yet.</h1>
        </div>
      </section>
      <div className="w-full">
        {/* <SummaryWidget /> */}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* <IncomeGraphs /> */}
        {/* <ExpenseGraphs /> */}
        {/* <MiscGraphs /> */}
      </div>
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* <BudgetWidget /> */}
          {/* <TransactionWidget /> */}
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          {/* <GoalWidget /> */}
          {/* <SubscriptionsWidget /> */}
        </div>
      </div>
    </main>
  )
}
