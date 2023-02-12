interface CustomProp {
  ip: string;
  city : string;
  country: string;
  postalCode: string;
  isp: string;
  timezone: string;
}

const DetailCard = (prop: CustomProp) => {

  return (
    <>
      <div className="bg-white h-36 w-1500 rounded-lg p-8 font-rubik">
        <div className="flex">
          <div className=" mr-4 border-r-2 border-solid h-20 w-80 border-dark-grey">
            <p className="text-dark-grey">IP ADDRESS</p>
            <p className="font-weight-800 text-3xl">{prop.ip}</p>
          </div>
          <div className=" mr-4 border-r-2 border-solid h-20 w-80 border-dark-grey ">
            <p className="text-dark-grey">Location</p>
            <p className="font-weight-800 text-3xl">{prop.city}, {prop.country} {prop.postalCode?prop.postalCode:null}</p>
          </div>
          <div className=" mr-4 border-r-2 border-solid h-20 w-80 border-dark-grey ">
            <p className="text-dark-grey">TIMEZONE </p>
            <p className="font-weight-800 text-3xl">UTC {prop.timezone}</p>
          </div>
          <div className=" mr-4 w-80 ">
            <p className="text-dark-grey">ISP </p>
            <p className="font-weight-800 text-3xl">{prop.isp}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
