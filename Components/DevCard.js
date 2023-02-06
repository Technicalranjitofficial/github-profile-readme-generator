import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";
import gsap from "gsap";
import { devSocial, devSocialTitle } from "@/helper/static";
import Image from "next/image";
const DevCard = () => {
  const [forksCount, setForksCount] = useState("");

  const getData = async () => {
   
      axios
        .get(
          "https://api.github.com/repos/Technicalranjitofficial/nothing/forks"
        )
        .then((res) => {
          setForksCount(res.data[0].forks_count);
        })
        .catch((err) => {
          console.log(err);
        });
     
  };

  useLayoutEffect(()=>{
    getData();
    setInterval(getData, 60000);
    gsap.set(".star, .fork", {
      transformOrigin: "center",
    });
    gsap.to(".star, .fork", {
      rotateZ: "360",
      duration: 2,
      ease: "elastic.inOut",
      repeat: -1,
      yoyo: true,
    });
  },[])
  return (
    <div className="w-full flex rounded-lg flex-col relative items-center justify-center animate-pulse border-dotted border-2  border-cyan-500 h-52 bg-slate-900">
      <span className="absolute top-5 text-md md:text-xl text-sm font-Alegreya font-bold text-slate-300">Github Profile Readme Generator</span>
      <div className="flex flex-row gap-6">
        <a href="https://github.com/Technicalranjitofficial/github-profile-readme-generator">
        <div className="flex items-center font-Alegreya text-slate-400 border-2 border-slate-500 rounded-md border-dotted py-2 px-1 md:px-4 gap-2 flex-col md:flex-row ">
          <StarIcon className="star" />
          <p className="text-xs md:text-sm">Star this repo</p>
        </div>
        </a>
        <a href="https://github.com/Technicalranjitofficial/github-profile-readme-generator">
        <div className="flex flex-col md:flex-row text-slate-400 gap-2 font-Alegreya  border-2 border-slate-500  rounded-md border-dotted py-2 px-1 md:px-4 justify-between items-center">
          <RepoForkedIcon className="fork justify-between" />
          <p className="text-xs md:text-sm">Fork this repo {forksCount}</p>
        </div>
        </a>
      </div>
      <div className="absolute bottom-5 flex gap-2 flex-row text-xs md:text-md font-bold font-Alegreya text-green-500">
        {devSocialTitle.map((val,index)=>{
          return <a key={index} href={devSocial[val].url}><Image  className={`border-2 border-slate-600 rounded-lg hover:border-slate-500 hover:translate-y-1`} src={devSocial[val].img} alt="" width={40} height={40}/></a>
        })}
      </div>
    </div>
  );
};

export default DevCard;
