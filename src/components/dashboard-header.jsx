import { User } from 'lucide-react';

export const DashboardHeader = () => {
    return (
        <header className="bg-white dark:bg-[#1F214A] border-b px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#000] dark:text-white">Dashboard</h1>
            <div className="w-10 h-10 rounded-full bg-[#ffd74b] flex items-center justify-center text-white">
                <User className="h-5 w-5" />
            </div>
        </header>
    )
};