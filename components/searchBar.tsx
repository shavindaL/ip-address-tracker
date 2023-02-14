import { useState } from "react";

interface CustomProp {
    setSearchTerm: Function;
}

const SearchBar = ({ setSearchTerm }: CustomProp) => {
    const [data, setData] = useState<string>('');

    const onClickSearch = () => {
        const re = new RegExp('^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$');
        if(re.test(data))
        setSearchTerm(data)
        else
        alert("invalid ipv4 address")        
    };

    return (
        <>
            <div className="relative">
                <div>
                    <input
                        type="text"
                        className="rounded-tl-lg rounded-bl-lg h-62px desktop:w-900  tablet:w-720 mobile:w-280 pl-4 pr-4 text-2xl placeholder:text-lg placeholder:text-center focus:outline-none"
                        placeholder="Search for any IP address or domain"
                        onInput={(event) => setData(event.currentTarget.value)}
                    />
                </div>
                <div
                    className="absolute desktop:left-900 tablet:left-720 mobile:left-280 top-0 bg-very-dark-grey rounded-tr-lg rounded-br-lg p-5 focus:border-none hover:cursor-pointer"
                    onClick={() => {
                        onClickSearch();
                    }}
                >
                    <button type="button" id="searchTerm" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
