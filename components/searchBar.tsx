import Image from "next/image";

const SearchBar = () => {
    return (
        <>
            <div className="">
                <div>
                    <input type="text" className="rounded-lg h-14 w-1/2 placeholder:text-lg placeholder:text-center text-2xl" placeholder="Search for any IP address or domain" />
                </div>
                <div>
                    <button type="submit" className=""> <Image src="./icon-arrow.svg" alt="arrow-image" width={36} height={56} /> </button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;