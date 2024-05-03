import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-l from-[#330066] to-[#3A1078]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Muhammad Ilham Virnanda
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className="mr-2">I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("UI/UX designer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Junior Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          With a passion for creating captivating user experiences, I specialize
          in developing Web using Javascript while incorporating appealing
          design principles.
        </p>
      </div>
    </div>
  );
};

export default Home;
