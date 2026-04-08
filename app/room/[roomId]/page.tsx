
import { getRooms } from "@/utility/getRooms/getRooms"
import { Bed, Building, Compass, SquaresIntersect } from "lucide-react"
import Image from "next/image"


const DETAILS_ARRAY = [
    {
        id: 1,
        icon: Bed,
        title: "BHK",
        desc: "Configuration"
    }, {
        id: 2,
        icon: SquaresIntersect,
        title: "500 Sq.ft",
        desc: "Carpet Area"


    },
    {
        id: 3,
        icon: Compass,
        title: "East Facing",
        desc: "Orientation"


    },
    {
        id: 4,
        icon: Building,
        title: "4th Floor",
        desc: "Floor Level"
    }
]
export default async function SingleRoomDetails({ params }: { params: Promise<{ roomId: string }> }) {
    const { roomId } = await params
    const rooms = getRooms(null) // or pass state if needed

    const room = rooms?.find(r => r.id === Number(roomId))

    return (
        <div className="sm:flex sm:flex-col gap-4   w-full items-center justify-center rounded-lg px-4 pt-4 py-4">
            <Image alt="image of rooms" width={400} height={300} className="rounded-xl" src={room?.image ?? ""} />
            <div className="flex flex-col items-center gap-4">
                <div className="flex justify-between gap-2" style={{ width: 400 }}>
                    <span className="text-3xl text-gray-400 font-semibold flex items-center gap-1 " > {room?.title}  <span> {room?.location ?? ""}</span></span>
                    <span className="font-semibold text-primary">₹ {room?.price} {room?.priceCountIn === "Cr" ? "Cr" : ""}</span>
                </div>

                <div className="flex sm:grid-cols-2 sm:grid gap-4">
                    {DETAILS_ARRAY?.map((detailUnit) => {
                        const Icon = detailUnit?.icon
                        return (
                            <div className="flex flex-col gap-2 w-12 ring-1 ring-gray-300 rounded-lg justify-center p-2 " style={{
                                backgroundColor: "#f2f2f2"
                            }} key={detailUnit?.id}>
                                <Icon className="size-4 text-gray-600" />
                                <div className="flex flex-col w-40">

                                    <span className="uppercase text-xs font-semibold text-gray-500">{detailUnit?.desc}</span>
                                    <span className="text-sm text-gray-800 font-semibold">{detailUnit?.title === "BHK" ? room?.bhk : ""} {detailUnit?.title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className=" flex-col gap-2  flex" style={{
                    width: 800
                }}>
                    <p className="text-sm font-semibold">Property Narative</p>
                    <p className="font-semibold  text-xs text-gray-600">Designed for the modern professional, this residence at Emerald Heights represents the pinnacle of architectural finesse in Thane. Every square foot has been curated to maximize natural light and airflow, featuring premium Italian marble flooring and bespoke cabinetry.

                        The open-plan living area flows seamlessly into a private balcony that offers panoramic views of the Yeoor Hills, providing a tranquil sanctuary from the urban pulse. This is more than a residence; it is a curated lifestyle statement for the discerning individual.</p>
                </div>
            </div>
        </div>
    )
}
