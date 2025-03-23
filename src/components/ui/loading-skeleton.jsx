export const LoadingSkeleton = () => {
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {Array.from({ length: 4}).map((_, index) => (
                <div key={index} className="p-6 dark:bg-[#1F214A] bg-gray-200 rounded-lg animate-pulse">
                    <div className="h-5 w-32 mb-2 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="h-8 w-24 mb-4 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="flex items-center">
                        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-md" />
                        <div className="h-4 w-40 ml-2 bg-gray-300 dark:bg-gray-700 rounded" />
                    </div>
                </div>
            ))} 
            </div>

            <div className="flex justify-between gap-9">
            {Array.from({ length: 2}).map((_, index) => (
                <div key={index} className="p-6 dark:bg-[#1F214A] w-full h-96 border bg-gray-200 rounded-lg animate-pulse">
                    <div className="h-5 w-32 mb-2 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="h-8 w-24 mb-4 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="flex items-center">
                        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-md" />
                        <div className="h-4 w-40 ml-2 bg-gray-300 dark:bg-gray-700 rounded" />
                    </div>
                </div>
            ))}
            </div>

            <div className="flex justify-between mt-10 gap-9">
            {Array.from({ length: 2}).map((_, index) => (
                <div key={index} className="p-6 dark:bg-[#1F214A] w-full h-96 border bg-gray-200 rounded-lg animate-pulse">
                    <div className="h-5 w-32 mb-2 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="h-8 w-24 mb-4 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="flex items-center">
                        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-md" />
                        <div className="h-4 w-40 ml-2 bg-gray-300 dark:bg-gray-700 rounded" />
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
};