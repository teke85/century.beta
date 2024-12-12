import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* 1st part */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              Icon
            </div>
            <h1 className="text-xl text-black font-semibold font-[family-name:var(--font-lora)]">
              Guaranted and certified
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
            A Student Management System you can depend on.
          </h1>
          <p className="mt-4 text-gray-600 font-[family-name:var(--font-rethink)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eius
            possimus veniam dignissimos dolores quisquam id repudiandae itaque
            deserunt.
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
            <span>Try Demo</span>
          </button>
        </div>
        {/* 2nd part */}
        <div>
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">
              01
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Ease of use
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                dolorem.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">
              02
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Secure Login and Authentication feature
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
