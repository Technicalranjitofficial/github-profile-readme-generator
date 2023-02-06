import React from 'react'

const Message = ({msg,success,setMessage}) => {

    
  return (
    <div className={`fixed md:w-screen h-20 px-6 ${msg.length>0?"top-3":"-top-96"} duration-300 ease-linear z-50`}>
        <div className={`max-w-screen-sm  rounded-md ${msg.length>0 && success===null?"bg-yellow-800":success===true?"bg-green-800":"bg-red-800" }  relative h-full justify-center flex items-center mx-auto px-12`}>
            <button className='absolute top-3 text-slate-300 right-5' onClick={()=>setMessage({message:"",success:null})}>X</button>
        <span className='text-slate-200 text-xs font-Alegreya font-semibold'>{msg}</span>
        </div>
    </div>
  )
}

export default Message