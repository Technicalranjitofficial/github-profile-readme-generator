import React from 'react'
// import { skills } from '../helper/static'

const SkillsCard = ({skill,onChange,skills,icons}) => {
  return (
    <div onClick={()=>onChange(skill)} className='flex flex-row border-2 bg-slate-800  border-slate-700 rounded-md h-28 items-center relative'>
        <input type="checkbox" className='z-50 absolute top-2 left-2'  id={skill} onChange={()=>onChange(skill)} checked={skills[skill]} />
      <div className='relative h-full w-full items-center flex justify-center flex-row'>
      <span className='text-slate-300 text-xs absolute top-1.5 flex-wrap left-6 font-bold font-serif'>{skill.charAt(0).toUpperCase()+skill.slice(1)}</span>
        <img className=' h-20 w-20 md:w-16 md:h-16  object-cover object-center' src={icons} alt="img" />
      </div>
    </div>
  )
}

export default SkillsCard