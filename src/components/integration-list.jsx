import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

export const IntegrationList = () => {
  const lists = [
    { id: 1, name: "Stripe", type: "Finance", rate: 33, profit: "$10,998.28", color: "#635bff", initial: "S" },
    { id: 2, name: "Zapier", type: "CRM", rate: 27, profit: "$8,998.59", color: "#ff4a00", initial: "Z" },
    { id: 3, name: "Shopify", type: "Marketplace", rate: 40, profit: "$13,331.24", color: "#95bf46", initial: "S" }
  ];

    return (
      <Card className="p-6 dark:bg-[#1F214A]">
      <h2 className="text-lg font-bold mb-6">List of Integration</h2>
      <div className="overflow-hidden">
        
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#f8f9fa] dark:bg-[#FFFFFF29]">
              <th className="w-8 py-3 px-4 text-left"><Checkbox /></th>
              {["Application", "Type", "Rate", "Profit"].map((heading) => (
                <th key={heading} className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {lists.map(({ id, name, type, rate, profit, color, initial }) => (
              <tr key={id} className="border-b">
                <td className="py-3 px-4"><Checkbox /></td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded flex items-center justify-center text-white text-xs" style={{ backgroundColor: color }}>
                      {initial}
                    </div>
                    <span>{name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{type}</td>
                <td className="py-3 px-4">
                  <Progress value={rate} className="h-2 w-32" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{rate}%</span>
                </td>
                <td className="py-3 px-4 font-medium">{profit}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Card>
    )
};