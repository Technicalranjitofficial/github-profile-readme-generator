import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Title from "../Components/Title";
import Works from "../Components/Works";
import MoreInfo from "../Components/MoreInfo";

import {categories, categorizedSkills, initialSkillState, skills,icons} from "../helper/static"
import SkillsCard from "../Components/skillsCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [works, setWorks] = useState([
    { workingFor: "", pName: "", pLink: "" },
  ]);
  const [moreInfo,setMoreInfo] = useState({currentLearning:"",
  askme:"",
  reachme:"",
  funfact:""
});

const [skill,setSkills]= useState(initialSkillState);
  const onChange = (e, i) => {
    const newData = [...works];
    works[i][e.target.name] = [e.target.value];
    setWorks(newData);
  };

  const handleOnAddMore = () => {
    const addNew = [...works, { workingFor: "", pName: "", pLink: "" }];
    setWorks(addNew);
  };

  const handleOnRemove = (i) => {
    const prevData = [...works];
    prevData.splice(i, 1);
    setWorks(prevData);
  };


  const handleOnMoreInfoChnage=(e)=>{
    setMoreInfo({...moreInfo,[e.target.name]:e.target.value})

  }


  const handleOnCheck=(sfiled)=>{
    const newsk = {...skill};
    newsk[sfiled]=!newsk[sfiled];
    setSkills(newsk);
  }


  const [newsk,setnewsk] = useState([]);
  const handleOnGenerate=()=>{
    skills.forEach((val)=>{
      if(skill[val]){
        newsk.push(val);
      }
    })

    if(newsk){
      console.log(newsk);
    }
  }

  // console.log(skill);
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900">
        <div className="max-w-screen-lg mx-auto">
          <Title title="Name" />
          <Title title="Subtitle" />
          <div className="mt-3">
            <span className="text-slate-200 font-bold font-Alegreya">
              Projects
            </span>
            {works.map((val, index) => {
              return (
                <Works
                  handleOnRemove={handleOnRemove}
                  index={index}
                  onChange={onChange}
                  val={val}
                  key={index}
                />
              );
            })}
            <button
              onClick={handleOnAddMore}
              className="text-slate-300 bg-teal-900 py-2 px-3 mt-3 w-full font-Alegreya font-semibold hover:bg-teal-800 "
            >
              ADD MORE
            </button>
          </div>
          <div className="mt-5">
            <span className="text-slate-300 font-bold font-Alegreya ">Additional Info</span>
          <MoreInfo val={moreInfo} onChange={handleOnMoreInfoChnage} />
          </div>

          {Object.keys(categorizedSkills).map((val,index)=>{
           return<>
           <span key={index} className="text-slate-300 font-bold text-xl font-Alegreya">{val}</span>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-2"> 
            {categorizedSkills[val].skills.map((val,ind)=>{
              console.log(icons[val]);
              return<SkillsCard skill={val} icons={icons[val]} skills={skill} key={ind} onChange={handleOnCheck}/>
            })}
            </div>

            </>
          })}
          
          <button onClick={handleOnGenerate}>Generate</button>
        </div>
      </div>
    </>
  );
}
