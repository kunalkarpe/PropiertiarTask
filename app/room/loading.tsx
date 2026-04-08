export default function Loading() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-10 gap-4 py-4 w-full divide-x divide-gray-200 animate-pulse">

            {/* FILTER SKELETON */}
            <div className="lg:col-span-2 flex flex-col gap-6 px-4">

                {/* Type skeleton */}
                <div className="flex flex-col gap-3">
                    <div className="h-5 w-12 bg-gray-200 rounded" />
                    <div className="flex gap-2">
                        <div className="h-8 w-24 bg-gray-200 rounded-xl" />
                        <div className="h-8 w-24 bg-gray-200 rounded-xl" />
                    </div>
                </div>

                {/* BHK skeleton */}
                <div className="flex flex-col gap-3">
                    <div className="h-5 w-10 bg-gray-200 rounded" />
                    <div className="flex gap-2">
                        <div className="h-8 w-20 bg-gray-200 rounded-full" />
                        <div className="h-8 w-20 bg-gray-200 rounded-full" />
                        <div className="h-8 w-20 bg-gray-200 rounded-full" />
                    </div>
                </div>
            </div>

            {/* CARDS SKELETON */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-items-center lg:h-[calc(100vh-110px)] lg:overflow-y-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="ring-1 ring-gray-200 rounded-lg flex flex-col gap-4 max-w-80 w-full h-80 p-2"
                    >
                        {/* image */}
                        <div className="w-full h-44 bg-gray-200 rounded-lg" />

                        <div className="flex flex-col gap-3 px-2">
                            {/* title + price row */}
                            <div className="flex justify-between items-start gap-2">
                                <div className="h-4 w-36 bg-gray-200 rounded" />
                                <div className="h-4 w-16 bg-gray-200 rounded" />
                            </div>

                            {/* location row */}
                            <div className="h-3 w-28 bg-gray-200 rounded" />

                            {/* button */}
                            <div className="h-8 w-full bg-gray-200 rounded-full mt-1" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}