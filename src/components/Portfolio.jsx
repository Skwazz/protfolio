import React from "react";
import memories from "../assets/portfolio/memories.png";
import workinprogress from "../assets/portfolio/workinprogress.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: memories,
      ref: "http://memori3s.netlify.app",
      code: "https://github.com/Skwazz/finalProjectDi",
    },
    {
      id: 2,
      src: workinprogress,
    },
    {
      id: 3,
      src: workinprogress,
    },
    {
      id: 4,
      src: workinprogress,
    },
    {
      id: 5,
      src: workinprogress,
    },
    {
      id: 6,
      src: workinprogress,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, ref, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={ref} alt="Demo" target={"_blank"}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} alt="Code" target={"_blank"}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
