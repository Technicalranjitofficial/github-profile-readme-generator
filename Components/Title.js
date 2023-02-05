import React from 'react'

const Title = ({label,title,setTitle}) => {
  return (
    <div className='pt-6 flex flex-col md:w-3/4 gap-1'>
        <label htmlFor="name" className='font-Alegreya text-lg text-cyan-500 font-bold' id="floating_filled">{label}</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} className='py-2 outline-none text-slate-400 font-Alegreya font-semibold text-sm bg-slate-900 border-2 border-slate-800  rounded-md pl-2' type="text" id='name' placeholder='Enter your title..' />
    </div>
  )
}

export default Title
