import { Inter } from "@next/font/google";
import SearchBar from "components/searchBar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import MyMap from 'components/map';
import DetailCard from "components/detailCard";

const inter = Inter({ subsets: ["latin"] });

const Map = dynamic(() => import('../../components/map'), {
  ssr: false,
});

export default function Home() {

  const [searchTerm, setSearchTerm] = useState<string>();

  useEffect(() => {
  }, [searchTerm, setSearchTerm]);

  const getSearchTerm = (data: string) => {
    setSearchTerm(data);
    console.log(data);
  };

  return (
    <>
      <div className="h-screen">
        <div className="bg-img-bg bg-cover h-1/3">
          <div className="flex justify-center ">
            <div className="items-center">
              <SearchBar setSearchTerm={getSearchTerm} />
            </div>
          </div>
        </div>
        <div>
          <DetailCard />
        </div>
        <div className="">
          <Map />
        </div>
      </div>
    </>
  );
}
