import { DUMMY_DATA, LOCATION_IMAGES } from "@/data/dummy.data"

export async function getRooms(state: string | null) {

    const PUNE_LOCATION_IMAGE = [...LOCATION_IMAGES].reverse()
    const DELHI_LOCATION_IMAGE = LOCATION_IMAGES.slice(4)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return DUMMY_DATA.map((dummy, index) => {

        if (state === "Pune") {
            return {
                ...dummy,
                price: dummy.price.toLocaleString("en-IN"),
                image: PUNE_LOCATION_IMAGE[index],
                location:
                    index >= 10 && index % 2 === 0
                        ? "Hinjewadi"
                        : index >= 7 && index % 2 !== 0
                            ? "Kothrud"
                            : index % 2 === 0
                                ? "Shivajinagar"
                                : "Wakad",
            }
        }

        if (state === "Delhi") {
            return {
                ...dummy,
                price: dummy.price.toLocaleString("en-IN"),
                image: DELHI_LOCATION_IMAGE[index],
                location:
                    index >= 10 && index % 2 === 0
                        ? "Rohini"
                        : index >= 7 && index % 2 !== 0
                            ? "Saket"
                            : index % 2 === 0
                                ? "Dwarka"
                                : "Karol Baug",
            }
        }

        return {
            ...dummy,
            price: dummy.price.toLocaleString("en-IN"),
            image: LOCATION_IMAGES[index],
            location:
                index >= 10 && index % 2 === 0
                    ? "Mulund"
                    : index >= 7 && index % 2 !== 0
                        ? "Dadar"
                        : index % 2 === 0
                            ? "Ghatkopar"
                            : "Thane",
        }
    })
}