import React from "react";

const Works = ({index,handleOnRemove, onChange,val}) => {
  return (
    <div className="w-full mt-5  flex flex-col md:flex-col justify-between">
        <span className="text-slate-300 font-Montserrat font-semibold text-md">Project-{index+1}</span>
      <div className="flex justify-between flex-col gap-1 md:flex-row mt-2">
      <div className=" w-full flex flex-col mt-2">
        <label htmlFor="Workname" className="mb-1  text-slate-400 text-md font-Montserrat">Prefix</label>
        <input onChange={(e)=>onChange(e,index)} name="workingFor"  value={val.workingFor} className="bg-slate-900 border-2 text-slate-400 text-sm  rounded-md  font-OpenSans outline-none border-slate-800 py-2  px-2" type="text" />
        
      </div>{" "}
      <div className=" w-full flex flex-col mt-2">
        <label htmlFor="Workname" className="mb-1  text-slate-400 text-md font-Montserrat">Project Name</label>
        <input onChange={(e)=>onChange(e,index)} value={val.pName} name="pName" className="bg-slate-900 border-2 text-slate-400 text-sm font-OpenSans   rounded-md outline-none border-slate-800 py-2  px-2" type="text" />
      </div>{" "}
      <div className=" w-full flex flex-col mt-2">
        <label htmlFor="Workname" className="mb-1  text-slate-400 text-md font-Montserrat">Project Link</label>
        <input onChange={(e)=>onChange(e,index)} value={val.pLink} name="pLink" className="bg-slate-900 border-2 text-slate-400 text-sm font-OpenSans  rounded-md  outline-none border-slate-800 py-2  px-2" type="text" />
      </div>
      </div>
      <button onClick={(i)=>handleOnRemove(i)} className=" bg-red-900 rounded-md py-2 mt-3 hover:bg-red-800 text-slate-400 font-bold font-Alegreya ">Delete</button>
    </div>
  );
};

export default Works;
