import { useEffect, useState } from "react";
import { UsersIntegration } from '@/components/users-integration';
import { SalesInsights } from "./components/sales-insights";
import { FinancialOverview } from './components/financial-overview';
import { DashboardHeader } from './components/dashboard-header';
import { DashboardSidebar } from "./components/dashboard-sidebar";
import useDashboardData from "./hooks/useDashboardData";
import { LoadingSkeleton } from "./components/ui/loading-skeleton";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("dashboard")
  const { fetchData, dashboardData, loading } = useDashboardData();

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(dashboardData)

  const showDashboard = () => {
    return (
      <>
        <FinancialOverview 
            financialOverview={dashboardData[0]?.dashboardStats}
            />
          <SalesInsights/>
          <UsersIntegration/>
      </>
    )
  };

  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      <DashboardSidebar activeNav={activeNav}/>
      
      <div className="flex-1 overflow-auto">
        <DashboardHeader/>

        <main className="p-6 dark:bg-[rgba(255,255,215,0.40)]">
          {loading ? <LoadingSkeleton/> : showDashboard()}
        </main>
      </div>

    </div>
  )
};