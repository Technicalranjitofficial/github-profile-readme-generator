import Image from "next/image";
import React from "react";

const AddOns = ({addOns,onCheckAddons}) => {
  return (
    <div className="mt-2 text-slate-300 flex flex-col gap-2">
      <div onClick={()=>onCheckAddons('visitorBadge')} className="w-full border-2 rounded-md border-slate-800 flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('visitorBadge')} type="checkbox" checked={addOns.visitorBadge} className="w-10 h-auto accent-green-600 bg-red-400 " name="" id="" />
        <span className="font-Alegreya text-sm">Display Visitors Count Badge</span>
      </div>
      <div onClick={()=>onCheckAddons('twiterBadge')} className="w-full border-2 rounded-md  border-slate-800 flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('twiterBadge')} type="checkbox" checked={addOns.twiterBadge} className="w-10 h-auto accent-green-600 " name="" id="" />
        <span className="font-Alegreya text-sm">Display Twiter Badge</span>
      </div> 
      <div onClick={()=>onCheckAddons('trophy')}  className="w-full border-2 border-slate-800 rounded-md flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('trophy')} type="checkbox" checked={addOns.trophy} className="w-10 h-auto accent-green-600 " name="" id="" />
        <span className="font-Alegreya text-sm">Display Trophy  </span>
      </div>
      {/* <div onClick={()=>onCheckAddons('topSkills')} className="w-full border-2 border-slate-800 flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('topSkills')} type="checkbox" checked={addOns.topSkills} className="w-10 h-auto accent-green-600 " name="" id="" />
        <span>Display Top Skills</span>
      </div> */}
      <div onClick={()=>onCheckAddons('githubProfileStats')} className="w-full rounded-md border-2 border-slate-800 flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('githubProfileStats')} type="checkbox" checked={addOns.githubProfileStats} className="w-10  h-auto accent-green-600 " name="" id="" />
        <span className="font-Alegreya text-sm">Display Profile Stats  </span>
      </div>
      <div onClick={()=>onCheckAddons('showMemes')} className="w-full border-2 border-slate-800 rounded-md flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('showMemes')} type="checkbox" checked={addOns.showMemes} className="w-10 h-auto accent-green-600 " name="" id="" />
        <span className="font-Alegreya text-sm">Display Memes</span>
      </div>
      <div onClick={()=>onCheckAddons('showStreakStats')} className="w-full border-2 border-slate-800 rounded-md flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('showStreakStats')} type="checkbox" checked={addOns.showStreakStats} className="w-10 h-auto accent-green-600 " name="" id="" />
        <span className="font-Alegreya text-sm">Show Streak Stats</span>
      </div> 
      <div onClick={()=>onCheckAddons('showMostLanguageUsed')} className="w-full border-2 border-slate-800 rounded-md flex flex-row gap-1 py-3 hover:bg-slate-700 cursor-pointer">
        <input onChange={(e)=>onCheckAddons('showMostLanguageUsed')} type="checkbox" checked={addOns.showMostLanguageUsed} className="w-10 h-auto accent-green-600 " name="" id="" />
        <span className="font-Alegreya text-sm">Show Top Language  </span>
      </div>
     
    </div>
  );
};

export default AddOns;
