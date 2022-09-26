import React from "react";

const FinanceAbout = () => {
  return (
    <section className="mt-8 ml-20 mr-20">
      <div className="flex flex-row content-center">
        <div className="flex flex-1 flex-col ml-40">
          <h3 className="text-4xl font-semibold">What is SimpleFinance?</h3>
          <ul className="about_list">
            <li className=" wow fadeInDown">
              <div className="text">
                <p className="mt-10">
                  We are a financial and accounting consultancy helping
                  businesses realise their ambitious ideas for change and define
                  their future. We operate in Central and Eastern Europe with
                  our clients as one team, sharing a common vision to deliver
                  exceptional results and grow industries.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <img
                src="/images/icons/target-dynamic-gradient copy.png"
                alt="img"
                className=" h-12 w-12"
              />
              <div className="text">
                <p className="mb-0">
                  You will have the opportunity to connect with big American
                  companies and establish yourself on the international market.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1">
          <div className=" wow fadeInLeft">
            <img
              src="/images/about/workingwomen1.png"
              alt="img"
              className="image-fit image_1 rounded-circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceAbout;
