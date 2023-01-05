import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
          <p className="text-[40px] text-sky-400"> Who Am I:</p> <br />
          I'm a entry-level profesional Full Stack Developer aspiring to learn
          new technolegies with a passion for innovation and perfection. Having
          great communication skills from years of experience with people.
          Always open to try new things!
        </p>

        <br />

        <p className="text-xl">
          <p className="text-[40px] text-sky-400"> What I Did:</p> <br />I have
          years of experience in the IT support field. Worked with many kind of
          technolegies over the years that gave me a real boost when trying to
          pick up coding. Granted me the skills to understand new and evolving
          technolegies and adapt myself with the ever-evolving tech world!
        </p>
      </div>
    </div>
  );
};

export default About;
