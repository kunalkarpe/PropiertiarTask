import { useEffect, useState } from "react";


function useDebounce(query: string) {
    const [debounceQuery, setDebounceQuery] = useState(query)

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebounceQuery(query)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    },
        [query])

    return { debounceQuery }
}

export default useDebounce