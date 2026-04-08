export default function Loading() {
    return (
        <div className="flex flex-col gap-2 py-4 px-4 animate-pulse">
            {/* back button skeleton */}
            <div className="h-4 w-20 bg-gray-200 rounded ml-4" />

            <div className="flex flex-col lg:flex-row gap-10 w-full px-4">
                {/* left - image + detail cards */}
                <div className="flex flex-col gap-2">
                    <div className="bg-gray-200 rounded-lg h-64 w-120" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="bg-gray-200 rounded-lg h-16 w-36" />
                        ))}
                    </div>
                </div>

                {/* right - title, narrative, amenities */}
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex justify-between">
                        <div className="bg-gray-200 rounded h-6 w-1/2" />
                        <div className="bg-gray-200 rounded h-6 w-20" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-gray-200 rounded h-3 w-full" />
                        <div className="bg-gray-200 rounded h-3 w-full" />
                        <div className="bg-gray-200 rounded h-3 w-3/4" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-gray-200 rounded h-8 w-36" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}