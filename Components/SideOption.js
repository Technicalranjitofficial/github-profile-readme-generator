import { ConstGitStats, ConstStreaksData, locale, locale2 } from "@/helper/static";
import React, { useState } from "react";

import {AiOutlineCloseSquare} from "react-icons/ai"

const SideOption = ({ display, onDisplay, events, template,onDataUpdate ,trophyData,closeSide,StreaksData,StatsData,StatsLoc,streakLoc,TopLangStatsData}) => {

  const dnone = "w-0 hidden ";
  const dflex = " md:w-96";
  return (
    <div
      className={`max-h-screen p-2   bg-slate-900 h-screen z-50 absolute overflow-y-auto  right-0 md:border-2 border-dotted border-teal-400   top-0   duration-900 ease-linear  ${
        display ? dflex : dnone
      } `}
    >
      <span onClick={closeSide}  className="absolute md:top-5 top-6 cursor-pointer right-7 md:left-5 text-red-600 font-bold font-Alegreya text-xl">

        <AiOutlineCloseSquare className="text-red-600 w-9 h-9"/>
      </span>
      {events === "trophy" && (
        <>
          <TrophySec trophyData={trophyData} template={template} onDataUpdate={onDataUpdate} />
        </>
      )}
      
      {events === "streakstats" && (
        <>
          <StreakSec streakLoc={streakLoc} StreaksData={StreaksData} template={template} onDataUpdate={onDataUpdate} />
        </>
      )}
      {events === "gitstats" && (
        <>
          <GitStats StatsLoc={StatsLoc} StatsData={StatsData} template={template} onDataUpdate={onDataUpdate} />
        </>
      )} 
      {events === "toplanguage" && (
        <>
          <TopLanguage  TopLangStatsData={TopLangStatsData} template={template} onDataUpdate={onDataUpdate} />
        </>
      )}



    </div>
  );
};

export default SideOption;



const TrophySec = ({trophyData,template,onDataUpdate})=>{
  return <div className="w-full">
  <div className="flex flex-row justify-center pt-5">
  <span className="text-center text-slate-300 font-bold font-Alegreya ">Trophy Section</span>
  </div>
  <br />
  <br />
  <div className=" flex flex-col ">
    <div className="flex flex-row ml-3 gap-3">
      <input className="w-5 " type="checkbox" value={trophyData['no_frames']} checked={trophyData['no_frames']} onChange={(e)=>onDataUpdate('no_frames',!trophyData['no_frames'])} />
      <p className="text-slate-400  font-semibold " >Hide Frames</p>
    </div>
    <div className="flex ml-3 flex-row gap-3">
      <input className="w-5 " checked={trophyData['background_transparent']} onChange={(e)=>onDataUpdate("background_transparent",!trophyData['background_transparent'])} type="checkbox" />
      <p className="text-slate-400  font-semibold " >Background Transparent</p>
    
    </div>
   
    <div className="flex flex-col gap-3">
      <br />
      <p className="text-slate-300 font-bold ">Column Size</p>
      <br />
      <div className="flex justify-around flex-row gap-3">
      {template.data.column.map((val,index)=>{
        return <span key={index} onClick={()=>onDataUpdate("column",val)} className={`${trophyData['column']===val?"bg-teal-600":"bg-pink-500"} text-slate-200 font-bold font-Alegreya w-full rounded-lg flex justify-center items-center h-10 md:h-20`}><span>
          {val}</span></span>
      })}
      </div>
    </div>
  </div>
  <br />
    <span className="font-Alegreya font-bold text-slate-300 ">Themes</span>
  <div className="mt-5 text-white ">
    
    <div className="grid  grid-cols-2 gap-5  z-10 ">
      {template.data.themes.map((val,index)=>{
        return <button key={index} onClick={()=>onDataUpdate('theme',val)}>
        <div className="relative">
        {trophyData['theme']===val && <div className="bg-slate-700/80 shadow-lg items-center justify-center flex flex-col font-bold font-Alegreya z-50 w-full h-full absolute">
          
          <p className="text-slate-300 ease-linear duration-500">Current</p>
          </div>}
        <img
          height="auto"
          src={`https://github-profile-trophy.vercel.app/?username=technicalranjitofficial&theme=${val}&column=3`}
          alt="image"
          loading="lazy"
        />
       
        </div>
        </button>
      })}
    </div>
  </div>
</div>
}



const StreakSec = ({StreaksData,template,onDataUpdate,streakLoc})=>{
  return <div className="w-full">
  <div className="flex flex-row justify-center pt-5">
  <span className="text-center text-slate-300 font-bold font-Alegreya ">Stats Section</span>
  </div>
  <br />
  <br />
  <div className=" ml-3 flex flex-col ">
    <div className="flex flex-row gap-3">
      <input className="w-5 " type="checkbox" value={StreaksData['hide_border']} checked={StreaksData['hide_border']} onChange={(e)=>onDataUpdate('hide_border',!StreaksData['hide_border'])} />
      <p className="text-slate-400  font-semibold " >Hide Border</p>
    </div>
     <div className="flex flex-row mt-2 gap-3">
      <p className="text-slate-400  font-semibold " >Language Mode</p>
      <select className="py-1 px-2 bg-slate-900 text-slate-300 border-2 border-slate-600 border-dashed rounded-md" value={streakLoc} onChange={(e)=>onDataUpdate("locale",locale[e.target.value],e.target.value)}>
        {ConstStreaksData.locale.map((val,index)=>{
          return <option key={index} value={index}>{val.name}</option>
        })}
      </select>
    </div>
    <div className="flex flex-row mt-2 gap-3">
      <p className="text-slate-400  font-semibold " >Streaks Mode</p>
      <input className="w-5 " checked={StreaksData['mode']==="daily"} onChange={(e)=>onDataUpdate("mode","daily")} name="daily" type="radio" /> <span className="text-slate-400 font-Alegreya">Daily</span>
      <input className="w-5 " checked={StreaksData['mode']==="weekly"} onChange={(e)=>onDataUpdate("mode","weekly")} name="weekly" type="radio" /> <span className="text-slate-400 font-Alegreya">Weekly</span>
    
    </div>
   
   
  </div>
  <br />
    <span className="font-Alegreya font-bold text-slate-300 ">Themes</span>
  <div className="mt-5 text-white ">
    
    <div className="grid  grid-cols-2 gap-5  z-10 ">
      {template.data.themes.map((val,index)=>{
        return <button key={index} onClick={()=>onDataUpdate('theme',val)}>
        <div className="relative">
        {StreaksData['theme']===val && <div className="bg-slate-700/80 shadow-lg items-center justify-center flex flex-col font-bold font-Alegreya z-50 w-full h-full absolute">
          
          <p className="text-slate-300 ease-linear duration-500">Current</p>
          </div>}
        <img
          height="auto"
          src={`https://github-readme-streak-stats.herokuapp.com/?user=technicalranjitofficial&theme=${val}`}
          alt="image"
          loading="lazy"
        />
       
        </div>
        </button>
      })}
    </div>
  </div>
</div>
}


const GitStats = ({StatsData,template,onDataUpdate,StatsLoc})=>{
  return <div className="w=full">
  <div className="flex flex-row justify-center pt-5">
  <span className="text-center text-slate-300 font-bold font-Alegreya ">Stats Section</span>
  </div>
  <br />
  <br />
  <div className=" ml-3 flex flex-col ">
    <div className="flex flex-row gap-3">
      <input className="w-5 " type="checkbox" value={StatsData['hide_border']} checked={StatsData['hide_border']} onChange={(e)=>onDataUpdate('hide_border',!StatsData['hide_border'])} />
      <p className="text-slate-400  font-semibold " >Hide Border</p>
    </div>
    <div className="flex flex-row mt-2 gap-3">
      <p className="text-slate-400  font-semibold " >Language Mode</p>
      <select className="py-1 px-2 bg-slate-900 text-slate-300 border-2 border-slate-600 border-dashed rounded-md" value={StatsLoc} onChange={(e)=>onDataUpdate("locale",locale2[e.target.value],e.target.value)}>
        {ConstGitStats.locale.map((val,index)=>{
          return <option key={index} value={index}>{val.name}</option>
        })}
      </select>
      
    </div>
   
   
  </div>
  <br />
    <span className="font-Alegreya font-bold text-slate-300 ">Themes</span>
  <div className="mt-5 text-white ">
    
    <div className="grid  grid-cols-2 gap-5  z-10 ">
      {template.data.themes.map((val,index)=>{
        return <button key={index} onClick={()=>onDataUpdate('theme',val)}>
        <div className="relative">
        {StatsData['theme']===val && <div className="bg-slate-700/80 shadow-lg items-center justify-center flex flex-col font-bold font-Alegreya z-50 w-full h-full absolute">
          
          <p className="text-slate-300 ease-linear duration-500">Current</p>
          </div>}
        <img
          height="auto"
          src={`https://github-readme-stats.vercel.app/api?username=technicalranjitofficial&theme=${val}&show_icons`}
          alt="image"
          loading="lazy"
        />
       {/* https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themes}&hide_border=${hide_border}&locale-${locale}} */}
        </div>
        </button>
      })}
    </div>
  </div>
</div>
}

const TopLanguage = ({TopLangStatsData,template,onDataUpdate})=>{
  return <div className="w-full">
  <div className="flex flex-row justify-center pt-5">
  <span className="text-center text-slate-300 font-bold font-Alegreya ">Stats Section</span>
  </div>
  <br />
  <br />
  <div className=" flex ml-3 flex-col ">
    <div className="flex flex-row gap-3">
      <input className="w-5 " type="checkbox" value={TopLangStatsData['hide_border']} checked={TopLangStatsData['hide_border']} onChange={(e)=>onDataUpdate('hide_border',!TopLangStatsData['hide_border'])} />
      <p className="text-slate-400  font-semibold " >Hide Border</p>
    </div>
    {/* <div className="flex flex-row mt-2 gap-3">
      <p className="text-slate-400  font-semibold " >Language Mode</p>
      <select className="py-1 px-2 bg-slate-900 text-slate-300 border-2 border-slate-600 border-dashed rounded-md" value={StatsLoc} onChange={(e)=>onDataUpdate("locale",locale2[e.target.value],e.target.value)}>
        {ConstGitStats.locale.map((val,index)=>{
          return <option key={index} value={index}>{val.name}</option>
        })}
      </select>
      
    </div> */}
   
   
  </div>
  <br />
    <span className="font-Alegreya font-bold text-slate-300 ">Themes</span>
  <div className="mt-5 text-white ">
    
    <div className="grid  grid-cols-2 gap-5  z-10 ">
      {template.data.themes.map((val,index)=>{
        return <button key={index} onClick={()=>onDataUpdate('theme',val)}>
        <div className="relative">
        {TopLangStatsData['theme']===val && <div className="bg-slate-700/80 shadow-lg items-center justify-center flex flex-col font-bold font-Alegreya z-50 w-full h-full absolute">
          
          <p className="text-slate-300 ease-linear duration-500">Current</p>
          </div>}
        <img
          height="auto"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=technicalranjitofficial&theme=${val}`}
          alt="image"
          loading="lazy"
        />
       {/* https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themes}&hide_border=${hide_border}&locale-${locale}} */}
        </div>
        </button>
      })}
    </div>
  </div>
</div>
}