import { MetricCard } from "../components/ui/metric-card";

export const FinancialOverview = ({ financialOverview }) => {
    if(!financialOverview) return;
    const { totalIncome, profit, totalViews, conversionRate } = financialOverview;

    // console.log('totalIncome', totalIncome);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* {loading && 'loading'} */}
            <MetricCard title="Total income" value={`$${totalIncome.amount}`} change={12.24} isPositive={true} />
            <MetricCard title="Profit" value={`$${profit.amount}`} change={2.63} isPositive={false} />
            <MetricCard title="Total views" value={totalViews.count} change={1.46} isPositive={true} />
            <MetricCard title="Conversion rate" value={`${conversionRate.rate}%`} change={8.75} isPositive={true} />
        </div>
    )
};