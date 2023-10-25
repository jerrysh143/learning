import React, { useState } from "react";
import BannerImg from "../../images/Banner.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Select from "react-select";
import { options } from "./OptionsSelect";

export function Banner() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <section className="max-w-[1350px] mx-auto px-15px flex justify-start">
        <div>
          <img
            className="rounded-[30px] absolute -z-1"
            src={BannerImg}
            alt=""
          />
        </div>
        <div className="py-85px px-60px text-left">
          <div className="inline-block bg-white bg-opacity-20 rounded-[50px] border border-white border-opacity-25 py-5px px-25px">
            <h6 className="text-slate-900 text-sm">A Vision for Your Life</h6>
          </div>
          <h1 className="pt-15px">
            <span className="text-white text-[66px] font-bold font-['Open Sans'] leading-[80px]">
              Find Your Best
              <br />
            </span>
            <span className="text-violet-950 text-[66px] font-bold font-['Open Sans'] leading-[80px]">
              Real Estate
            </span>
          </h1>
          <p className="pt-30px text-slate-800 text-[15px] font-normal font-['Open Sans']">
            Nemo enim ipsam voluptatem quia voluptas sit aspernat
            <br />
            odit aut fugit, sed quia consequuntur magni dolores
            <br />
            qui ratione sequi nesciunt.
          </p>
          <div className="">
            <Tabs>
              <TabList className={"flex flex-wrap mt-70px ml-[13px]"}>
                <Tab
                  className={
                    "flex items-center justify-center mr-[8px] w-[55px] h-[29px] bg-white rounded-tl rounded-tr text-center text-violet-950 text-sm"
                  }
                  classID="1"
                >
                  Buy
                </Tab>
                <Tab
                  className={
                    "flex items-center justify-center mr-[8px] w-[55px] h-[29px] bg-white rounded-tl rounded-tr text-center text-violet-950 text-sm"
                  }
                  classID="2"
                >
                  Sell
                </Tab>
                <Tab
                  className={
                    "flex items-center justify-center mr-[8px] w-[55px] h-[29px] bg-white rounded-tl rounded-tr text-center text-violet-950 text-sm"
                  }
                  classID="3"
                >
                  Rent
                </Tab>
              </TabList>
              <TabPanel className={""} tabIndex={1}>
                <div className="flex flex-wrap bg-white bg-opacity-20 rounded-md border border-white border-opacity-25 p-15px">
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="mr-[12px] w-40 h-[38px] bg-white rounded"
                  />
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="mr-[12px] w-40 h-[38px] bg-white rounded"
                  />
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="mr-[12px] w-40 h-[38px] bg-white rounded"
                  />
                  <a href="#" className="flex items-center justify-center w-28 h-[38px] bg-violet-950 rounded shadow text-white text-base font-semibold">
                    Search
                  </a>
                </div>
              </TabPanel>
              <TabPanel tabIndex={2}>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
