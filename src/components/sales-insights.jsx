import { Card } from "@/components/ui/card";
import { SalesChart } from "../sales-chart";
import { RegionChart } from "../region-chart";

export const SalesInsights = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SalesOverview/>
            <SalesByRegion/>
        </div>
    )
};

const SalesOverview = () => {
    return (
        <Card className="p-6 dark:bg-[#1F214A]">
            <h2 className="text-lg font-bold mb-6">Sales Overview</h2>
            <div className="flex justify-end gap-8 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-blue"></div>
                <span className="text-sm text-gray-600">Total Revenue</span>
                <span className="text-sm font-medium">$ 50,345.67</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-orange"></div>
                <span className="text-sm text-gray-600">Total Target</span>
                <span className="text-sm font-medium">$ 70,321.45</span>
              </div>
            </div>
            <SalesChart />
        </Card>
    )
};

const SalesByRegion = () => {
    return (
        <Card className="p-6 dark:bg-[#1F214A]">
            <h2 className="text-lg font-bold mb-6">Sales by Region</h2>
            <RegionChart />
        </Card>
    )
};