import RoomServer from "@/component/Room/RoomServer"
import { Suspense } from "react"
import Loading from "./loading"

export default function Room({ searchParams }: { searchParams: { state?: string } }) {
    return (
        <Suspense fallback={<Loading />}>
            <RoomServer state={searchParams?.state ?? null} />
        </Suspense>
    )
}