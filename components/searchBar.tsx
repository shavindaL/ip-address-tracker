import { useState } from "react";

interface CustomProp {
    setSearchTerm: Function;
}

const SearchBar = ({ setSearchTerm }: CustomProp) => {
    const [data, setData] = useState<string>('');

    const onClickSearch = () => {
        setSearchTerm(data);
    };

    return (
        <>
            <div className="relative">
                <div>
                    <input
                        type="text"
                        className="rounded-tl-lg rounded-bl-lg h-62px w-900 pl-4 pr-4 text-2xl placeholder:text-lg placeholder:text-center focus:outline-none"
                        placeholder="Search for any IP address or domain"
                        onInput={(event) => setData(event.currentTarget.value)}
                    />
                </div>
                <div
                    className="absolute left-900 top-0 bg-very-dark-grey rounded-tr-lg rounded-br-lg p-5 focus:border-none hover:cursor-pointer"
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
