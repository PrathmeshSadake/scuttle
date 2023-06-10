import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <div className='bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto h-full w-full'>
      <Header>
        <div className='mb-2'>
          <h1 className='text-white font-semibold text-3xl'>Welcome back</h1>
        </div>
      </Header>
    </div>
  );
};

export default Home;
