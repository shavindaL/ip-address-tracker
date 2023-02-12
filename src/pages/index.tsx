import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Map = dynamic(() => import("../../components/map"), {
  ssr: false,
});

const SearchBar = dynamic(() => import("../../components/searchBar"), {
  ssr: false,
});

const DetailCard = dynamic(() => import("../../components/detailCard"), {
  ssr: false,
});

export default function Home() {

  const [userIp, setUserIp] = useState<string>(""); //User's current ip
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [isp, setIsp] = useState<string>("");
  const [timezone, setTimeZone] = useState<string>("");
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const apiKey = "at_H7NUTsozizJ5lrHJFaynZjYrKCWFG";
  
  const getSearchTerm = (data: string) => {
    setUserIp(data);
  };

  

  

  //* Get Geo Location Data
  const getLocationData = async (ip: string) => {
    const res: Response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
    );
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setCity(data.location.city);
      setCountry(data.location.country);
      setPostalCode(data.location.postalCode);
      setIsp(data.isp);
      setTimeZone(data.location.timezone);
      setUserIp(data.ip);
      setLat(data.location.lat);
      setLng(data.location.lng);
    }
  };

  useEffect(() => {
    if (isLoaded) 
    getLocationData(userIp);
    else 
    setIsLoaded(true);
  }, [getSearchTerm, isLoaded]);


  return (
    <>
      <div className="h-screen relative">
        <div className="bg-img-bg bg-cover h-1/3 ">
          <div className="flex justify-center ">
            <div className="items-center">
              <h1 className="text-6xl text-white font-weight-500 font-rubik mt-10 mb-10 text-center">
                IP Address Tracker
              </h1>

              <SearchBar setSearchTerm={getSearchTerm} />
            </div>
            <div className="absolute top-60 z-500">
              <DetailCard
                ip={userIp}
                city={city}
                country={country}
                timezone={timezone}
                postalCode={postalCode}
                isp={isp}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Map lat={lat} lng={lng} />
        </div>
      </div>
    </>
  );
}
