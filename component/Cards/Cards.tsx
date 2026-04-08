"use client"

import { MapPin, MoveRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export default function Cards({ id, img,  amount, amountType, state, location, title }: { img: StaticImageData, roomType: string, amount: string, amountType: string, state: string, location: string | null, title: string, bhk: number, id: number }) {

    return (
        <div className="ring-1 ring-gray-300 hover:shadow-primary/20  rounded-lg flex flex-col gap-4 max-w-80 justify-center items-center h-80 hover:cursor-pointer hover:shadow-md p-2">
            <Image alt="location image" src={img} className="w-74 shrink h-44 rounded-lg" />
            <div className="flex flex-col gap-4 w-full px-2">
                <div className="flex flex-col">

                    <div className="flex justify-between text-gray-700 items-start ">

                        <span className="text-md w-52 font-semibold">{title} {location ?? ""}</span>

                        <span className="text-md font-semibold">₹ {amount} {amountType === "Cr" ? amountType : ""}  </span>


                    </div>
                    <div className="flex items-center text-sm text-gray-400 gap-1">
                        <MapPin className="size-4 fill-gray-400 text-white " />
                        <div className="flex gap-1">
                            <span>{state},</span>
                            <span>{location ?? ""}</span>
                        </div>

                    </div>
                </div>

                <div className="flex items-center  justify-between">
                    <Link href={`/room/${id}`} className="flex gap-1 items-center justify-center w-full h-8 cursor-pointer rounded-full hover:bg-primary hover:text-white text-primary ring-1 ring-primary" >

                        View details <MoveRight className="size-5" />


                    </Link>
                </div>
            </div>
        </div >
    )
}
