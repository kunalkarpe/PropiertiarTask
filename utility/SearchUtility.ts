"use client"
import { useRouter, useSearchParams } from "next/navigation"


function useHandleSearchParams() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const updateFilter = (allFilters: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString())

        Object.entries(allFilters).forEach(([key, value]) => {
            if (value) {
                params.set(key, value)
            } else {
                params.delete(key)
            }
        })
        router.push(`?${params.toString()}`)
    }


    return { searchParams, updateFilter }
}
export default useHandleSearchParams