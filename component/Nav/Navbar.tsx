"use client"
import Image from "next/image";
import Search from "../Search/Search";
import LOGO from "../../public/company-logo.png"
import { useState } from "react";
import useDebounce from "@/utility/Debounce/Debounce";
import { CircleUser, SearchIcon } from "lucide-react";
export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("")
    const { debounceQuery } = useDebounce(searchQuery)
    return (
        <nav className="flex items-center h-14 px-4 justify-between w-full border border-b border-gray-300">
            <Image alt="comapny logo" src={LOGO} className="w-44 h-8" />
            <div className="hidden sm:flex items-center gap-1  ">
                <Search setQuery={setSearchQuery} debounceQuery={debounceQuery} placeholder={"Search by location..."} />
                <CircleUser className="text-white fill-gray-300 size-11" />
            </div>
            <button type="button" onClick={() => { }} className="sm:hidden flex ring-1 ring-gray-300 rounded-full p-2">
                <SearchIcon className="size-4 text-gray-400" />
            </button>
        </nav>
    )
}
