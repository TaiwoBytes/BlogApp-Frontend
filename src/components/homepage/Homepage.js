import React from 'react';
import poster from '../assets/images/poster.png';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    let path = '/register';
    navigate(path);
  };
  return (
    <div className="bg-yellow-600 h-screen ">
      <div className="flex flex-wrap items-center mx-4 mb-10 2xl:mb-14">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <span className="text-green-900 font-bold">
            Create posts to educate
          </span>
          <h1 className="text-6xl 2xl:text-8xl font-bold text-white mt-10">
            Pen down your ideas
            <p className="font-bold   ">
              <span className="text-green-900"> By creating a post</span>
            </p>
          </h1>
          <p className="text-white  mb-12 lg:mb-16 2xl:mb-24 text-xl mt-20">
            Your post must be free from racism and unhealthy words
          </p>
          <div>
            <button className="bg-gray-800 mt-[20px]  border-gray-900 rounded-[10px] ml-2 px-12 py-5 font-bold text-lg hover:bg-slate-600 transition duration-200 " onClick={handleNavigate}>
              <p className="text-white">Get Started</p>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4  ">
          <img className=" h-screen -mx-20" src={poster} alt={poster} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
