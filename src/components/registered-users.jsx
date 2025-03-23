import { Card } from "@/components/ui/card";
import { UserDonut } from '../user-donut';

export const RegisteredUsers = () => {
    return (
        <Card className="p-6 dark:bg-[#1F214A]">
            <h2 className="text-lg font-bold mb-6">Registered Users</h2>
            <div className="mx-auto">
                <UserDonut totalUsers={3201} premiumUsers={2804} basicUsers={397} />
            </div>
        </Card>
    )
};