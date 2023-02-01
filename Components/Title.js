import React from 'react'

const Title = ({title,input,setInput}) => {
  return (
    <div className='pt-6 flex flex-col md:w-3/4 gap-1'>
        <label htmlFor="name" className='font-Alegreya  text-slate-300 font-bold' id="floating_filled">{title}</label>
        <input className='py-2 outline-none text-slate-200 font-Alegreya font-semibold bg-slate-900 border-2 border-slate-800  rounded-md pl-2' type="text" id='name' placeholder='Enter your title..' />
    </div>
  )
}

export default Title
