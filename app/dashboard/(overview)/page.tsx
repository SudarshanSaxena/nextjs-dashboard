import React, { Suspense } from 'react'
import { jacques_francois } from '../../ui/fonts'
import CardWrapper, { Card } from '../../ui/dashboard/cards'
import RevenueChart from '../../ui/dashboard/revenue-chart'
import LatestInvoices from '../../ui/dashboard/latest-invoices'
import { fetchRevenue, fetchCardData, fetchLatestInvoices } from '@/app/lib/data';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons'

const Page = async () => {
  const latestInvoices = await fetchLatestInvoices()
  
  return (
    <main>
      <h1 className={`${jacques_francois.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton></CardsSkeleton>}>
          <CardWrapper></CardWrapper>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton></RevenueChartSkeleton>}>
        <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton></LatestInvoicesSkeleton>}>
        <LatestInvoices  />
        </Suspense>
      </div>
    </main>
  )
}

export default Page