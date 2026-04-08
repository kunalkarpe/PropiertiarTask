import { getRooms } from "@/utility/getRooms/getRooms"
import RoomComponent from "./RoomComponent"

export default async function RoomServer({ state }: { state: string | null }) {
    const rooms = await getRooms(state)
    return <RoomComponent initialRooms={rooms} />
}