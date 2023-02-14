interface CustomProp {
  ip: string;
  city: string;
  country: string;
  postalCode: string;
  isp: string;
  timezone: string;
}

const DetailCard = (prop: CustomProp) => {
  return (
    <>
      <div className="bg-white desktop:h-36 tablet:h-32 mobile:h-80 desktop:w-1300 tablet:w-720 mobile:w-360 rounded-lg p-8 font-rubik mobile:grid  mobile:grid-rows-4 mobile:grid-cols-1 mobile:text-center">
        <div className="desktop:flex tablet:flex">
          <div className=" desktop:mr-4 tablet:mr-4 desktop:border-r-2 desktop:border-solid tablet:border-solid desktop:h-20 mobile:h-10 w-80 border-dark-grey mobile:mb-5 desktop:mt-0 tablet:mt-0">
            <p className="text-dark-grey text-sm mobile:text-xl">IP ADDRESS</p>
            <p className="font-weight-800 mobile:font-weight-800 desktop:text-3xl tablet:text-xl mobile:text-2xl">
              {prop.ip}
            </p>
          </div>
          <div className=" desktop:mr-4 tablet:mr-4 desktop:border-r-2 desktop:border-solid tablet:border-solid desktop:h-20 mobile:h-10 w-80 border-dark-grey mobile:mt-5 desktop:mt-0 tablet:mt-0">
            <p className="text-dark-grey text-sm mobile:text-xl">Location</p>
            <p className="font-weight-800 mobile:font-weight-800 desktop:text-3xl tablet:text-xl mobile:text-2xl">
              {prop.city}, {prop.country}{" "}
              {prop.postalCode ? prop.postalCode : null}
            </p>
          </div>
          <div className=" desktop:mr-4 tablet:mr-4 desktop:border-r-2 desktop:border-solid tablet:border-solid desktop:h-20 mobile:h-10 w-80 border-dark-grey mobile:mt-5 desktop:mt-0 tablet:mt-0">
            <p className="text-dark-grey text-sm mobile:text-xl">TIMEZONE </p>
            <p className="font-weight-800 mobile:font-weight-800 desktop:text-3xl tablet:text-xl mobile:text-2xl">
              UTC {prop.timezone}
            </p>
          </div>
          <div className=" desktop:mr-4 tablet:mr-4 w-80 mobile:desktop:h-20 mobile:h-10  mobile:mt-5 desktop:mt-0 tablet:mt-0">
            <p className="text-dark-grey text-sm mobile:text-xl">ISP </p>
            <p className="font-weight-800 mobile:font-weight-800 desktop:text-3xl tablet:text-xl mobile:text-2xl">
              {prop.isp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
