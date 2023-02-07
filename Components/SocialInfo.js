import React from 'react'
import Image from 'next/image'

const SocialInfo = ({value,onSetSoical,icons,placeholder,setMsg}) => {
 
  return (
    <div className='flex flex-row w-full border-2  rounded-md gap-3  border-slate-700'>
     
       {value.length>0 ? <Image width={50}   height={50} className={` `}  src={icons} alt="social" />:
       
       <Image width={50}   height={50} className={` `}  src={icons} alt="social" />
       }
        <input value={value}   onChange={(e)=>onSetSoical(`${placeholder}`,e)} type="text" className={`w-full bg-slate-900 outline-none   font-semibold ${placeholder==="github" &&"animate-pulse"} text-slate-300 placeholder:text-slate-500 placeholder:text-sm placeholder:font-OpenSans placeholder:${placeholder==="github"?"animate-pulse":"animate-none"} placeholder:${placeholder==="github"?"text-red-500":" text-slate-300"}`} placeholder={`${placeholder.charAt(0).toUpperCase()}${placeholder.slice(1)} username`} />
    </div>
  )
}

export default SocialInfo