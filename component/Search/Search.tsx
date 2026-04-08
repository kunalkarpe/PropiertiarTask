"use client"

import { LOCATION } from '@/data/dummy.data'
import useHandleSearchParams from '@/utility/SearchUtility'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { SearchIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type LocationKeys = keyof typeof LOCATION
const Search = ({ placeholder, setQuery, debounceQuery }: { placeholder: string, debounceQuery: string, setQuery: Dispatch<SetStateAction<string>> }) => {
    const [selected, setSelected] = useState<string | null>("")
    const locationArray = Object.keys(LOCATION) as LocationKeys[]
    const [selectLocation, setSelectLocation] = useState<LocationKeys>("Mumbai")

    const { updateFilter } = useHandleSearchParams()
    const filteredValues = debounceQuery === "" ? LOCATION[selectLocation] : LOCATION[selectLocation]?.filter((locUnit: string) => locUnit.toLocaleLowerCase()?.includes(debounceQuery.toLocaleLowerCase()))



    useEffect(() => {

        updateFilter({
            "state": selectLocation,
            "location": selected,

        })

    }, [selected, selectLocation])

    return (
        <div className='ring-1 ring-gray-300 py-0.5 rounded-full h-fit flex items-center w-full'>
            <div className="w-32 border-r border-gray-300 flex items-center">
                <Combobox value={selectLocation} onChange={(value) => {
                    setSelectLocation(value as LocationKeys); setSelected(""); updateFilter({
                        "state": selectLocation,

                    })
                }} onClose={() => setQuery('')}>
                    <div className="relative">
                        <ComboboxButton className="group  px-3">
                            <ComboboxInput
                                className={
                                    'w-full rounded-lg border-none bg-white text-sm text-pimary py-1.5 focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25 text-center'
                                }
                                displayValue={(person: string) => person}

                            />
                        </ComboboxButton>
                    </div>

                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className='w-30 mt-1 rounded-lg ring-1 ring-gray-300 bg-white px-2 py-1.5 empty:invisible transition duration-100 ease-in data-leave:data-closed:opacity-0'

                    >
                        {locationArray.map((city) => (
                            <ComboboxOption
                                key={city}
                                value={city}
                                className="group flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-primary/80 data-focus:text-white data-focus:font-semibold"
                            >

                                <div className="text-sm">{city}</div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
            </div>
            <div className="w-52">
                <Combobox value={selected} onChange={(value) => {
                    setSelected(value); updateFilter({
                        "location": selected,
                    })
                }} onClose={() => setQuery('')}>
                    <div className="relative">

                        <ComboboxButton className="group px-3 flex items-center">
                            <ComboboxInput
                                className={
                                    'w-full rounded-lg border-none bg-white py-1.5 text-sm text-pimary focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                                }
                                displayValue={(person: string) => person ?? ""}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder={placeholder}
                            />
                            <SearchIcon className='size-4 text-gray-400' />
                        </ComboboxButton>
                    </div>

                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className={
                            'w-52   rounded-xl ring-1 mt-1 ring-gray-300 bg-white px-2 py-1.5 [--anchor-gap:--spacing(1)] empty:invisible transition duration-100 ease-in data-leave:data-closed:opacity-0'
                        }
                    >
                        {filteredValues?.map((loc: string) => (
                            <ComboboxOption
                                key={loc}
                                value={loc}
                                className="group flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-primary/80 data-focus:text-white data-focus:font-semibold"
                            >

                                <div className="text-sm">{loc}</div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
            </div>
        </div>
    )
}

export default Search
