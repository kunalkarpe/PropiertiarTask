"use client"

import useHandleSearchParams from "@/utility/SearchUtility"
import { Bed } from "lucide-react"
import { useMemo } from "react"
import Cards from "../Cards/Cards"
import { StaticImageData } from "next/image"

interface Room {
    id: number
    title: string
    location: string
    price: string
    priceCountIn: string
    type: string
    bhk: number
    image: StaticImageData
}
export default function RoomComponent({ initialRooms }: { initialRooms: Room[] }) {
    const { searchParams, updateFilter } = useHandleSearchParams()

    const state = searchParams?.get("state")
    const location = searchParams?.get("location")
    const type = searchParams?.get("type")
    const bhk = searchParams?.get("bhk")


    // Filtering logic
    const filteredCards = useMemo(() => {
        return initialRooms?.filter((card) => {
            if (location && card.location !== location) return false
            if (type && card.type !== type) return false
            if (bhk && card.bhk !== Number(bhk)) return false
            return true
        })
    }, [initialRooms, location, type, bhk])
    return (
            <div className="flex flex-col lg:grid lg:grid-cols-10 gap-4 py-4 w-full font-sans divide-x divide-gray-300">

                {/* FILTERS */}
                <div className="lg:col-span-2 flex lg:flex  flex-col sm:flex-col xs:flex-col  gap-4 px-4">

                    {/* TYPE */}

                    <div className="flex flex-col min-w-50 gap-2">
                        <p className="text-lg font-semibold text-gray-600">Type</p>

                        <div className="flex gap-2 w-full">
                            {["Buy", "Rent"].map((typeUnit) => {
                                const value = typeUnit === "Buy" ? "Sell" : "Rent"

                                return (
                                    <button
                                        key={typeUnit}
                                        onClick={() => updateFilter({ type: value })}
                                        className={`text-xs outline-none min-w-20 px-3 h-8 w-24 rounded-xl font-semibold ring-1 transition
                    ${type === value
                                                ? "ring-primary shine-wrapper bg-primary/30 text-primary"
                                                : "bg-gray-100 text-gray-500 ring-gray-300"
                                            }`}
                                    >
                                        {typeUnit}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* BHK */}
                    <div className="flex flex-col min-w-48">
                        <p className="text-lg font-semibold text-gray-600">BHK</p>

                        <div className="flex gap-2 overflow-x-auto p-1   h-full py-2 no-scrollbar">
                            {["1", "2", "3"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => updateFilter({ bhk: item })}
                                    className={`flex outline-none items-center gap-1 justify-center rounded-full cursor-pointer h-8 w-20 text-sm ring-1 transition
                    ${bhk === item
                                            ? "bg-primary text-white ring-primarys"
                                            : "text-gray-400 ring-gray-400"
                                        }`}
                                >
                                    {item} <Bed className="size-4" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/*  CARDS */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:h-[calc(100vh-110px)] lg:overflow-y-auto no-scrollbar justify-items-center ">

                    {filteredCards.length > 0 ? (
                        filteredCards.map((card) => (
                            <Cards
                                key={card.id}
                                id={card?.id}
                                bhk={card.bhk}
                                state={String(state)}
                                location={card.location}
                                amountType={card.priceCountIn}
                                amount={card.price}
                                roomType={card.type}
                                img={card.image}
                                title={card.title}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-400 mt-10">
                            No properties found
                        </div>
                    )}
                </div>
            </div>
    )
}
