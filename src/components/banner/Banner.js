import React from "react";
import BannerImg from "../../images/Banner.png";

function Banner() {
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
            <ul>
              <li>
                <a href="">Buy</a>
              </li>
              <li>
                <a href="">Sell</a>
              </li>
              <li>
                <a href="">Rent</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
