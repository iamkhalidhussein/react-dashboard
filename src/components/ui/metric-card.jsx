import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

export function MetricCard({ title, value, change, isPositive }) {
  return (
    <Card className="p-6 dark:bg-[#1F214A]">
      <h3 className="text-base font-bold dark:text-gray-100 text-[#000]">{title}</h3>
      <p className="text-3xl text-[#000] font-bold dark:text-white">{value}</p>
      <div className="flex items-center">
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${
            isPositive ? "bg-[#B8E9D4] dark:bg-[#2CC483] text-positive-text" : "bg-[#FDD5DA] dark:bg-[#FF5E75] text-negative-text"
          }`}
        >
          {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
          <span>{change.toFixed(2)}%</span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-100 ml-2">Compared to last month</span>
      </div>
    </Card>
  )
}

