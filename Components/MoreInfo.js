import React from 'react'

const MoreInfo = ({val,onChange}) => {
  return (
    <div className='w-full mt-1 flex flex-col md:flex-col justify-between'>
        <div className='w-full flex flex-col mt-2'>
            <label htmlFor='currently ' className='mb-1  text-slate-300 text-md font-Alegreya font-semibold'>👩🏽‍💻 Currently Learning</label>
            <input className="bg-slate-900 border-2 rounded-md text-slate-300 text-sm px-2  font-OpenSans outline-none border-slate-800 py-2" type="text" name="currentLearning" id="currently" value={val.currentLearning}  onChange={(e)=>onChange(e)}  />
        </div> <div className='w-full flex flex-col mt-2'>
            <label htmlFor='currently ' className='mb-1  text-slate-300 text-md font-Alegreya font-semibold'>💬 Ask me about</label>
            <input className="bg-slate-900 border-2 rounded-md text-slate-300 text-sm px-2  font-OpenSans outline-none border-slate-800 py-2" type="text" name="askme" id="currently"  value={val.askme}  onChange={(e)=>onChange(e)} />
        </div> <div className='w-full flex flex-col mt-2'>
            <label htmlFor='currently ' className='mb-1  text-slate-300 text-md font-Alegreya font-semibold'>📫 How to reach me</label>
            <input className="bg-slate-900 border-2 rounded-md text-slate-300 text-sm px-2  font-OpenSans outline-none border-slate-800 py-2" type="text" name="reachme" id="currently"  value={val.reachme}  onChange={(e)=>onChange(e)} />
        </div><div className='w-full flex flex-col mt-2'>
            <label htmlFor='currently ' className='mb-1  text-slate-300 text-md font-Alegreya font-semibold'>⚡ Fun fact</label>
            <input className="bg-slate-900 border-2 rounded-md text-slate-300 text-sm px-2  font-OpenSans outline-none border-slate-800 py-2" type="text" name="funfact" id="currently"  value={val.funfact}  onChange={(e)=>onChange(e)} />
        </div>
    </div>
  )
}

export default MoreInfo