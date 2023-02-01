import React from 'react'
// import { skills } from '../helper/static'

const SkillsCard = ({skill,onChange,skills,icons}) => {
  return (
    <div onClick={()=>onChange(skill)} className='flex flex-row border-2 bg-slate-800  border-slate-700 rounded-md h-40 items-center relative'>
        <input type="checkbox" className='absolute top-2 left-2'  id={skill} onChange={()=>onChange(skill)} checked={skills[skill]} />
      <div className='relative h-full w-full items-center flex justify-center flex-row'>
      <span className='text-slate-300 absolute top-1 left-7 font-bold font-Alegreya'>{skill.charAt(0).toUpperCase()+skill.slice(1)}</span>
        <img className='h-full object-cover object-center' src={icons} alt="img" />
      </div>
    </div>
  )
}

export default SkillsCard