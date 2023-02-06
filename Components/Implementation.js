import Image from "next/image";
import React from "react";

const Implementation = () => {
  return (
    <div>
      <div className="text-slate-300">
        <br />
        <h1 className="text-center animate-pulse font-Alegreya text-lg md:text-2xl  font-bold text-teal-500">
          Docs For Implementation
        </h1>
        <br />
        <h1 className="text-slate-300 font-Alegreya text-md font-bold">#STEP-1:</h1>
        <p className="text-slate-400 ml-3 text-sm mt-2 font-bold font-Alegreya">
          Create a Repository : <span className="text-pink-500">name</span> must
          be same as your <span className="text-pink-500">github username</span>{" "}
        </p>
        <div className="w-full justify-center flex flex-wrap">
          <Image
            width={500}
            className="w-full object-cover mt-5 rounded-md md:px-4"
            height={300}
            src="https://user-images.githubusercontent.com/87274287/216817137-325b3623-e838-4526-939f-824de97035fc.png"
            alt="profile-radme-generator"
          />
        </div>
        <br />
        <h1 className="text-slate-300 font-Alegreya text-md font-bold">#STEP-2</h1>
          <p className="text-slate-400 ml-3 text-sm mt-2 font-bold font-Alegreya">Make Sure Check the <span className="text-pink-500 font-bold">readme.md</span> </p>
          <div className="w-full justify-center flex flex-wrap">
          <Image
            width={500}
            className="w-full object-cover mt-5 rounded-md md:px-4"
            height={300}
            src="https://user-images.githubusercontent.com/87274287/216817142-43654aaa-993f-407e-947c-bfb0c78da7cb.png"
            alt="profile-radme-generator"
          />
        </div>
        <br />
        <h1 className="text-slate-300 font-Alegreya text-md font-bold">#STEP-3</h1>
          <p className="text-slate-400 ml-3 text-sm mt-2 font-bold font-Alegreya">Edit the <span className="text-pink-500 font-bold">readme.md</span> files which is present in the created repository. </p>
          <div className="w-full justify-center flex flex-wrap">
          <Image
            width={500}
            className="w-full object-cover mt-5 rounded-md md:px-4"
            height={300}
            src="https://user-images.githubusercontent.com/87274287/216817156-15f28207-a8c7-4832-9cb7-bc9c0072fabb.png"
            alt="profile-radme-generator"
          />

        </div>


        <h1 className="text-slate-300 font-Alegreya text-md font-bold">#STEP-4</h1>
          <p className="text-slate-400 ml-3 text-sm mt-2 font-bold font-Alegreya">Copy the  <span className="text-pink-500 font-bold">#Code</span> given below. </p>        
      </div>
    </div>
  );
};

export default Implementation;
