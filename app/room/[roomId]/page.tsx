

import { getRooms } from "@/utility/getRooms/getRooms"
import { Bed, CircleParking, Compass, Dumbbell, MoveLeft, ShieldPlus, Snowflake, SquaresIntersect, WavesLadder, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


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
    // {
    //     id: 4,
    //     icon: Building,
    //     title: "4th Floor",
    //     desc: "Floor Level"
    // }
]

const CURRATED_AMENTIES = [
    {
        id: 1,
        icon: Wifi,
        title: "Wifi"
    },
    {
        id: 2,
        icon: Snowflake,
        title: "Central HVAC"
    }, {
        id: 3,
        icon: CircleParking,
        title: "Parking"
    },
    {
        id: 4,
        icon: Dumbbell,
        title: "GYM"
    },
    {
        id: 5,
        icon: WavesLadder,
        title: "Pool"
    },
    {
        id: 6,
        icon: ShieldPlus,
        title: "24/7 Concierge"
    },
]
export default async function SingleRoomDetails({ params }: { params: Promise<{ roomId: string }> }) {
    const { roomId } = await params
    const rooms = await getRooms(null) // or pass state if needed

    const room = rooms?.find(r => r.id === Number(roomId))

    return (
        <div className="flex  flex-col gap-2 py-4 px-4">
            <div className="flex px-4">

                <Link href={"/room"} className="flex gap-1 font-semibold text-sm text-primary items-center justify-center"><MoveLeft className="size-4 text-primary" /> Go back</Link>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 w-full items-center justi fy-center rounded-lg px-4 h-100">
                <div className="flex flex-col gap-2">
                    <Image alt="image of rooms" className="rounded-lg h-64 w-120" src={room?.image ?? ""} />

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {DETAILS_ARRAY?.map((detailUnit) => {
                            const Icon = detailUnit?.icon
                            return (
                                <div key={detailUnit?.id} className=" bg-gray-200/80 col-span-1 w-36">
                                    <div className="  flex flex-col gap-2 ring-1 ring-gray-300 rounded-lg justify-center p-2" >
                                        <Icon className="size-4 text-gray-600" />
                                        <div className="flex flex-col">
                                            <span className="uppercase text-xs  text-gray-500">{detailUnit?.desc}</span>
                                            <span className="text-sm text-gray-800 font-semibold">{detailUnit?.title === "BHK" ? room?.bhk : ""} {detailUnit?.title}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="flex flex-col gap-2 h-84 justify-between min-w-40 sm:w-150 md:w-200">

                    <div className="flex justify-between items-center gap-2 min-w-44 sm:w-150 md:w-200" >
                        <span className="md:text-2xl sm:text-lg text-gray-600 font-semibold flex items-center gap-1 text-wrap w-52 md:w-full  " > {room?.title}  <span> {room?.location ?? ""}</span></span>
                        <span className="font-semibold text-primary text-sm md:text-lg sm:text-md sm:w-20 md:w-30">₹ {room?.price} {room?.priceCountIn === "Cr" ? "Cr" : ""}</span>
                    </div>


                    <div className="flex flex-col gap-2 min-w-40 sm:w-130 md:w-200 text-wrap">
                        <p className=" font-semibold">Property Narative</p>
                        <p className="font-semibold  text-xs text-gray-600">Designed for the modern professional, this residence at Emerald Heights represents the pinnacle of architectural finesse in Thane. Every square foot has been curated to maximize natural light and airflow, featuring premium Italian marble flooring and bespoke cabinetry.

                        </p>
                        <p className="font-semibold  text-xs text-gray-600"> The open-plan living area flows seamlessly into a private balcony that offers panoramic views of the Yeoor Hills, providing a tranquil sanctuary from the urban pulse. This is more than a residence; it is a curated lifestyle statement for the discerning individual.</p>
                        <p className="font-semibold  text-xs text-gray-600">Designed for the modern professional, this residence at Emerald Heights represents the pinnacle of architectural finesse in Thane. Every square foot has been curated to maximize natural light and airflow, featuring premium Italian marble flooring and bespoke cabinetry.

                        </p>
                    </div>

                    <div className="flex flex-col gap-4 min-w-40 sm:w-150 md:w-200">
                        <p className="font-semibold">Curated Amentites</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
                            {CURRATED_AMENTIES?.map((curUnit) => {
                                const ICON = curUnit.icon
                                return (
                                    <div key={curUnit.id} className="flex gap-4 w-36 md:w-40">
                                        <div className="flex ring-1  bg-gray-200 ring-gray-300 w-8 items-center justify-center rounded-md  h-8">

                                            <ICON className="size-4 text-primary/70" />
                                        </div>
                                        <span className="text-sm h-8 flex items-center font-semibold text-gray-700 text-center">{curUnit?.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
