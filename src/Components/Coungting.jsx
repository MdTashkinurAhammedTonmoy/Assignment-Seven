import React from 'react';

const Coungting = ({issue}) => {
  console.log(issue)
    

    // const InProgress = data.filter((element) => element.status == "InProgress");
    // const Resolved = data.filter((element) => element.status == "Resolved");

    // console.log({InProgress,Resolved})


    return (



        <div className="grid grid-cols-2 gap-6 m-20">
        <div
          className="relative rounded-md p-7 text-white h-60 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #632EE3, #9F62F2)", // gradient ব্যাকগ্রাউন্ড
          }}
        >
          {/* বাম পাশের ইমেজ */}
          <img
            src="/vector1.png"
            alt="left design"
            className="absolute left-0 top-0 h-full opacity-40"
          />

          {/* ডান পাশের ইমেজ */}
          <img
            src="/vector1.png"
            alt="right design"
            className="absolute right-0 top-0 h-full opacity-40 transform scale-x-[-1]"
          />

          {/* ভেতরের কনটেন্ট */}
          <h3 className="text-2xl">In-Progress</h3>
          <h2 className="text-6xl font-semibold">{issue.length}</h2>
        </div>

        <div
          className="relative rounded-md p-7 text-white h-60 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #54CF68, #00827A)", // gradient ব্যাকগ্রাউন্ড
          }}
        >
          {/* বাম পাশের ইমেজ */}
          <img
            src="/vector1.png"
            alt="left design"
            className="absolute left-0 top-0 h-full opacity-40"
          />

          {/* ডান পাশের ইমেজ */}
          <img
            src="/vector1.png"
            alt="right design"
            className="absolute right-0 top-0 h-full opacity-40 transform scale-x-[-1]"
          />

          {/* ভেতরের কনটেন্ট */}
          <h3 className="text-2xl">Resolved</h3>
          <h2 className="text-6xl font-semibold">{}</h2>
        </div>
      </div>
    );
};

export default Coungting;






