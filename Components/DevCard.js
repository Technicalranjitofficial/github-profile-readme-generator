import axios from "axios";
import React, { useState } from "react";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";
import gsap from "gsap";
const DevCard = () => {
  const [forksCount, setForksCount] = useState("-0");

  const shouldRequestStats = () => {
    const isVisible = window.document.visibilityState === "visible";
    const hasFocus = window.document.hasFocus();
    return isVisible && hasFocus;
  };
  const getData = async () => {
    if (shouldRequestStats()) {
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
    }
  };

  useState(async () => {
    await getData();
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
  }, []);
  return (
    <div className="w-full flex rounded-lg flex-col relative items-center justify-center animate-pulse border-dotted border-2  border-cyan-500 h-52 bg-slate-900">
      <span className="absolute top-4 text-md md:text-xl font-Alegreya font-bold text-slate-300">Best Github Profile Readme Generator</span>
      <div className="flex flex-row gap-6">
        <a href="">
        <div className="flex items-center font-Alegreya text-slate-400 border-2 border-slate-500 rounded-md border-dotted py-2 px-4 gap-2 flex-col md:flex-row ">
          <StarIcon className="star" />
          <p className="text-xs md:text-sm">Star this repo {182}</p>
        </div>
        </a>
        <a href="">
        <div className="flex flex-col md:flex-row text-slate-400 gap-2 font-Alegreya  border-2 border-slate-500  rounded-md border-dotted py-2 px-4 justify-between items-center">
          <RepoForkedIcon className="fork justify-between" />
          <p className="text-xs md:text-sm">Fork this repo {forksCount}</p>
        </div>
        </a>
      </div>
      <div className="absolute bottom-5 text-xs md:text-md font-bold font-Alegreya text-green-500">
        ** Don't forget to fork and star this Repo **
      </div>
    </div>
  );
};

export default DevCard;