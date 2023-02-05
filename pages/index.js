import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Title from "../Components/Title";
import Works from "../Components/Works";
import MoreInfo from "../Components/MoreInfo";
import Preview from "../Components/Preview";
import DevCard from "../Components/DevCard";
import Message from "../Components/Message";

import {
  categories,
  socialName,
  socialIcons,
  categorizedSkills,
  initialSkillState,
  skills,
  icons,
  socialConst,
  initialAddon,
  initialTheme,
  gitStatsInitialThemes,
  initialTemplateData,
  initialTrophyData,
  initialStreaksData,
  initialGitStats,
  initialTopLangStats,
} from "../helper/static";
import SkillsCard from "../Components/skillsCard";
import SocialInfo from "../Components/SocialInfo";
import AddOns from "../Components/AddOns";
import Generate from "../Components/Generate";
import SideOption from "../Components/SideOption";

import Implementation from "../Components/Implementation";

import ProgressBar from "@ramonak/react-progress-bar";
import { BiCopy } from "react-icons/bi";
import { SlCloudDownload } from "react-icons/sl";
import { MdArrowBackIos, MdOutlineArrowBackIos } from "react-icons/md";
import { FiCheck } from "react-icons/fi";

import {FaRegEdit} from "react-icons/fa"

// const { docco } = require("react-syntax-highlighter/dist/esm/styles/hljs");

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  const [works, setWorks] = useState([
    {
      workingFor: "💪🏼 Working on",
      pName: "Github Profile Readme Generator",
      pLink: "https://github.com/",
    },
  ]);
  const [moreInfo, setMoreInfo] = useState({
    currentLearning: "Reactjs & Nextjs",
    askme: "Reactjs",
    reachme: "technicalranjit@gmail.com",
    funfact: "Bats are the only mammal that can actually fly.",
  });
  const [socialData, setSocialData] = useState(socialConst);
  const [title, setTitle] = useState("Ranjit Das 🤠");
  const [subTitle, setSubTitle] = useState(
    "💖 A Passionate Coder,Developer & Debugger"
  );
  const [addOns, setAddOns] = useState(initialAddon);
  const [genClick, setGenClick] = useState(false);
  const [gitStatsThemes, setGitStatsThemes] = useState(gitStatsInitialThemes);
  const [display, setDisplay] = useState(false);
  const [events, setEvents] = useState("");
  const [Template, setTemplate] = useState([]);
  const [statsLoc, setStatsLoc] = useState(0);
  const [streakLoc, setStreakLoc] = useState(0);
  const [Msg, setMsg] = useState({ message: "", success: null });
  const [Gen, setGen] = useState(false);
  const [onGenerating, setOnGenerating] = useState(false);
  const [loadingbar, setLoadingBar] = useState(0);
  const [GenData, setGendata] = useState({
    title: "",
    subtitle: "",
    project: [],
    additionalInfo: [],
    skills: [],
    socialConnection: [],
    addons: [],
    moreInfo: [],
  });
  const [skill, setSkills] = useState(initialSkillState);
  const [theme, setTheme] = useState(initialTheme);

  // for template

  const [trophyData, setTrophyData] = useState(initialTrophyData);
  const [StreaksData, setStreaksData] = useState(initialStreaksData);
  const [StatsData, setStatsData] = useState(initialGitStats);
  const [TopLangStatsData, setTopLangStatsData] = useState(initialTopLangStats);
  const [viewMode, setViewMode] = useState(false);
  const [copy,setCopy] = useState(false);
  const [download,setDownload] = useState(false);

  // useEffect(()=>{
  //   if(socialData.github.length<=0){
  //     setMsg({message:"Github is requied",success:false});
  //   }
  //   setTimeout(() => {

  //   }, timeout);
  // },[socialData.github])





  const handleDownloadMarkdown = () => {
    const markdownContent = document.getElementById('markdown-content');
    const tempElement = document.createElement('a');
    tempElement.setAttribute(
      'href',
      `data:text/markdown;charset=utf-8,${encodeURIComponent(markdownContent.innerText)}`,
    );
    tempElement.setAttribute('download', 'README.md');
    tempElement.style.display = 'none';
    document.body.appendChild(tempElement);
    tempElement.click();
    document.body.removeChild(tempElement);
  };

  const handleCopyToClipboard = () => {
    const range = document.createRange();
    range.selectNode(document.getElementById('markdown-content'));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

  };

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

  const handleOnMoreInfoChnage = (e) => {
    setMoreInfo({ ...moreInfo, [e.target.name]: e.target.value });
  };

  const handleOnCheck = (sfiled) => {
    const newsk = { ...skill };
    newsk[sfiled] = !newsk[sfiled];
    setSkills(newsk);
  };

  const [newsk, setnewsk] = useState([]);
  const [so, setSo] = useState([]);
  const [wt, setWt] = useState([]);
  const handleOnGenerate = () => {
    if(socialData['github'].length<=0){
      return setMsg({message:"Github Username is required!!",success:false});
    }
    setOnGenerating(true);

    if (newsk.length > 0) {
      setnewsk([]);
    }
    skills.forEach((val) => {
      if (skill[val]) {
        newsk.push(val);
      }
    });

    const newd = { ...GenData };
    if (title.length > 0) {
      newd["title"] = title;
    }
    if (subTitle.length > 0) {
      newd["subtitle"] = subTitle;
    }
    if (newsk.length > 0) {
      newd["skills"] = newsk;
    }
    if (works.length > 0) {
      newd["project"] = works;
    }

    newd["socialConnection"] = socialData;
    newd["addons"] = addOns;
    newd["moreInfo"] = moreInfo;

    setGendata(newd);

    setTimeout(() => {
      setGenClick(true);
      setGen(true);
      setOnGenerating(false);
      setMsg({message:"Generated Sucessfully!!",success:true})
      setTimeout(()=>{
        setMsg({message:"",success:null});
      },3000)
    }, 3000);
  };


  

  const onSetSoical = (field, event) => {
    if (field === "github" && event.target.value.length <= 0) {
      setMsg({ message: "Github Username is required", success: false });
    }

    if (field === "github" && event.target.value.length > 0) {
      setMsg({ message: "", success: null });
    }

    const newData = { ...socialData };
    newData[field] = event.target.value;
    setSocialData(newData);
  };

  const onCheckAddons = (fields) => {
    const newAddons = { ...addOns };
    newAddons[fields] = !newAddons[fields];
    setAddOns(newAddons);
  };

  const onThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const onGitStatsThemeChange = (event) => {
    setGitStatsThemes(event.target.value);
  };

  const closeSide = () => {
    setDisplay(false);
  };

  const onDisplay = (e) => {
    setTemplate(initialTemplateData[e]);
    if (e === events) {
      setDisplay((prev) => !prev);
    } else {
      setEvents(e);
      setDisplay(true);
    }
  };



  const onDataUpdate = (field, val, ind) => {
    if (events === "trophy") {
      const newT = { ...trophyData };
      newT[field] = val;
      setTrophyData(newT);
    }

    if (events === "streakstats") {
      const newS = { ...StreaksData };
      newS[field] = val;
      setStreakLoc(ind);
      setStreaksData(newS);
    }
    if (events === "gitstats") {
      const newG = { ...StatsData };
      newG[field] = val;
      setStatsLoc(ind);
      setStatsData(newG);
    }
    if (events === "toplanguage") {
      const newTL = { ...TopLangStatsData };
      newTL[field] = val;
      setTopLangStatsData(newTL);
    }
  };

  return (
    
    
    <>
  
      <div className=" min-h-screen relative overflow-hidden bg-slate-900  ">
        <div className="max-w-screen-2xl overflow-hidden pb-2   max-h-screen gap-5  mx-auto p-2 md:p-0 grid grid-cols-1  md:grid-cols-2">
          <div className="w-full max-h-screen p-5 border-2 border-slate-600   overflow-y-auto overflow-x-hidden">
            <DevCard />
            <br />
            {Gen ? (
              ""
            ) : (
              <div className="">
                <div className="w-full md:hidden justify-center h-20 flex flex-col relative">
                  <div className="border-2 rounded-md h-16 border-slate-800"></div>
                  <div className="absolute  h-16 w-40 justify-between flex rounded-lg flex-row gap-0 bg-slate-800 right-0">
                    <button
                      onClick={() => setViewMode(false)}
                      className={` ${
                        viewMode ? "bg-slate-800" : "bg-slate-700"
                      } duration-300 ease-linear py-2 w-full text-slate-400  px-3`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setViewMode(true)}
                      className={` ${
                        viewMode ? "bg-slate-700" : "bg-slate-800"
                      } duration-200 ease-linear w-full py-2 rounded-tr-md rounded-br-md  text-slate-400  px-3`}
                    >
                      View
                    </button>
                  </div>
                </div>

                {viewMode ? (
                  <div className="max-h-screen   md:flex">
                    <aside className=" bg-slate-700 overflow-y-auto max-h-screen">
                      <Preview
                        TopLangStatsData={TopLangStatsData}
                        StatsData={StatsData}
                        trophyData={trophyData}
                        StreaksData={StreaksData}
                        onDisplay={onDisplay}
                        gitstatsThemes={gitStatsThemes}
                        onGitStatsThemesChage={onGitStatsThemeChange}
                        addons={addOns}
                        skill={skill}
                        socialConnect={socialData}
                        projects={works}
                        theme={theme}
                        onThemeChange={onThemeChange}
                        moreInfo={moreInfo}
                        name={title && title}
                        subtitle={subTitle && subTitle}
                      />
                    </aside>
                  </div>
                ) : (
                  <div className="h-screen md:overflow-x-hidden overflow-y-auto">
                    <Title label="Name" title={title} setTitle={setTitle} />
                    <Title
                      title={subTitle}
                      label="Subtitle"
                      setTitle={setSubTitle}
                    />
                    <div className="mt-3">
                      <span className="text-cyan-500 text-xl font-bold font-Alegreya">
                        Projects
                      </span>
                      {works.map((val, index) => {
                        return (
                          <Works
                            handleOnRemove={()=>handleOnRemove(index)}
                            index={index}
                            onChange={onChange}
                            val={val}
                            key={index}
                          />
                        );
                      })}
                      <button
                        onClick={handleOnAddMore}
                        className="text-slate-400 bg-teal-900 py-2 px-3 mt-3 w-full font-Alegreya font-semibold hover:bg-teal-800 "
                      >
                        Add more
                      </button>
                    </div>
                    <div className="mt-5">
                      <span className="text-cyan-500 text-lg font-bold font-Alegreya ">
                        Additional Info
                      </span>
                      <MoreInfo
                        val={moreInfo}
                        onChange={handleOnMoreInfoChnage}
                      />
                    </div>

                    <br />
                    <span className="text-cyan-500 text-lg font-bold font-Alegreya ">
                      Additional Info
                    </span>
                    <br />
                    <br />

                    {Object.keys(categorizedSkills).map((val, index) => {
                      return (
                        <div key={index}>
                          <span
                            key={index}
                            className="text-pink-500 text-md font-bold  font-Alegreya"
                          >
                            {val.charAt(0).toUpperCase()}
                            {val.slice(1)}
                          </span>
                          <div className="grid grid-cols-2 my-5 md:grid-cols-6 gap-2">
                            {categorizedSkills[val].skills.map((val, ind) => {
                              
                              return (
                                <SkillsCard
                                  skill={val}
                                  icons={icons[val]}
                                  skills={skill}
                                  key={ind}
                                  onChange={handleOnCheck}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    <div className=" mt-5">
                      <span className="text-slate-300 font-bold font-Alegreya text-xl">
                        Social Connections{" "}
                        <span className="text-red-400 animate-pulse">
                          [Github username is requird]
                        </span>
                      </span>
                      <div className="grid grid-cols-2 border-2 border-slate-800 p-2 drop-shadow-lg rounded-md bg-slate-900 gap-2 mt-5">
                        {socialName.map((val, index) => {
                          return (
                            <SocialInfo
                              key={index}
                              onSetSoical={onSetSoical}
                              placeholder={val}
                              value={socialData[val]}
                              icons={socialIcons[val]}
                              setMsg={setMsg}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-300 font-bold font-Alegreya text-xl">
                        Addons
                      </span>
                      <AddOns onCheckAddons={onCheckAddons} addOns={addOns} />
                    </div>
                  </div>
                )}
              </div>
            )}
            {onGenerating && !Gen ? (
              // <button
              //   className="my-5 text-slate-300 bg-teal-600 py-3 px-5"
              //   onClick={handleOnGenerate}
              // >

              // </button>
              <div className="w-full flex justify-center items-center h-20">
                <Image
                  className="animate-spin"
                  src="/loading.png"
                  alt="loading.."
                  width={40}
                  height={40}
                />
              </div>
            ) : !onGenerating && !Gen ? (
              <div className="w-full justify-center flex-col flex">
                <div>
                  <p className=""> <span className="text-yellow-300 font-bold font-Alegreya ">NOTE</span> : <span className="text-slate-300 text-xs font-Alegreya font-bold">[Customizable] (ViewMode) Click on the item to Customize the item.</span> </p>
                </div>
                <br />
                <button
                  className="my-5 text-slate-300 rounded-md font-bold font-Alegreya hover:bg-teal-700 bg-teal-800 py-3 px-5"
                  onClick={handleOnGenerate}
                >
                  GENERATE README
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-row justify-between rounded-t-md items-center bg-slate-700">
                <span className="ml-2 font-Alegreya  font-bold text-slate-400">
                  Read Implementations
                </span>
                <div className="  items-center justify-end mr-3 flex flex-row gap-2 ">
                  {/* <button
                    className="py-3"
                    onClick={() => {
                      setGen(false);
                      setOnGenerating(false);
                      setGenClick(false);
                    }}
                  > */}
                    <p onClick={()=>{
                      setGen(false);
                      setOnGenerating(false);
                      setGenClick(false);
                    }}
                      className={`border-2 hover:border-slate-500 cursor-pointer border-slate-600 
                      } p-2 w-10 h-10 flex flex-row justify-center items-center rounded-md`}
                    >
                      <MdOutlineArrowBackIos className="w-7 h-7 text-slate-400  " />
                    </p>

                  {/* </button> */}
                  <p onClick={()=>{
                    handleCopyToClipboard();
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 2000);
                  }}
                      className={`border-2 hover:border-slate-500 cursor-pointer border-slate-600 ${
                        copy && "text-green-500"
                      } p-2 w-10 h-10 flex flex-col items-center rounded-md`}
                    >
                     {copy?<FiCheck   />: <BiCopy className="w-7 h-7 text-slate-400  " />}
                    </p>
                  <button className="py-3">
                  <p onClick={()=>{
                    handleDownloadMarkdown();
                    setDownload(true);
                    setTimeout(() => {
                      setDownload(false);
                    }, 2000);
                  }}
                      className={`border-2 hover:border-slate-500 cursor-pointer border-slate-600 ${download && "text-green-500"
                      } p-2 w-10 h-10 flex flex-col items-center rounded-md`}
                    >
                     {download?<FiCheck   />: <SlCloudDownload  className="w-7 h-7 text-slate-400   " />}
                    </p>
                  </button>
                </div>
              </div>
            )}
            {genClick ? (
              <div className="border-2 overflow-x-hidden flex-wrap h-screen overflow-y-auto border-slate-700 p-2 ">
                <Implementation />
                <Generate
                  theme={theme}
                  StatsData={StatsData}
                  StreaksData={StreaksData}
                  TopLangStatsData={TopLangStatsData}
                  trophyData={trophyData}
                  data={GenData}
                />

                <div className="text-slate-300">
                  <h1 className="text-slate-300 font-Alegreya text-md font-bold">
                    #STEP-5
                  </h1>
                  <p className="text-slate-400 ml-3 text-sm mt-2 font-bold font-Alegreya">
                    Paste the code in the{" "}
                    <span className="text-pink-400 font-bold">readme.md</span>{" "}
                    file and that&apos;s it, you can see the result
                  </p>
                  <div className="w-full rounded-md justify-center flex flex-wrap">
                    <br />

                    <Image
                      width={500}
                      className="w-full object-cover mt-5 rounded-md md:px-4"
                      height={300}
                      src="https://user-images.githubusercontent.com/87274287/216817160-6f4829ed-f1b9-4c54-8cd2-df55506accb6.png"
                      alt="img"
                    />
                    <br />
                  </div>
                  <div>
                    <br />
                    <h1 className="text-slate-300 font-Alegreya text-md font-bold">
                      #STEP-6
                    </h1>

                    <p className="text-slate-400 ml-3 text-sm mt-2 font-bold font-Alegreya">
                      Click on the <span className="text-green-500">Commit</span> button
                    </p>
                    <Image
                      width={500}
                      className="w-full   object-cover mt-5 rounded-md md:px-4"
                      height={300}
                      src="https://user-images.githubusercontent.com/87274287/216817182-450c3cf3-2b16-48ce-b1bd-30981132fa98.png"
                      alt="img"
                    />
                  </div>

                  <div>
                    <br />
                    <span>
                      <span className="text-green-600 ml-3 text-xl font-bold font-Alegreya">
                        Congrat&apos;s
                      </span>{" "}
                      You have Successfully Created your Github Readme Profile..
                    </span>
                    <Image
                      width={500}
                      className="w-full   object-cover mt-5 rounded-md md:px-4"
                      height={300}
                      src="https://user-images.githubusercontent.com/87274287/216818040-956e0b41-1d95-4df2-a784-a5d8c157bc88.png"
                      alt="img"
                    />
                  </div>
                  <br />
                  <div className="flex flex-col md:flex-row  md:items-center md:justify-center gap-2">
                   <span className="font-bold text-md text-xl text-green-600"> Contribute: </span> 
                   <p>Create pull request and Don&apos;t forget to <a className="text-blue-500 no-underline  font-bold" href="">Fork</a> and <a className="text-blue-500 no-underline font-bold" href="">Star</a> this repo.</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="max-h-screen hidden md:flex">
            <aside className=" bg-slate-700 overflow-y-auto max-h-screen">
              <Preview
                TopLangStatsData={TopLangStatsData}
                StatsData={StatsData}
                trophyData={trophyData}
                StreaksData={StreaksData}
                onDisplay={onDisplay}
                gitstatsThemes={gitStatsThemes}
                onGitStatsThemesChage={onGitStatsThemeChange}
                addons={addOns}
                skill={skill}
                socialConnect={socialData}
                projects={works}
                theme={theme}
                onThemeChange={onThemeChange}
                moreInfo={moreInfo}
                name={title && title}
                subtitle={subTitle && subTitle}
              />
            </aside>
          </div>
        </div>
        <SideOption
          TopLangStatsData={TopLangStatsData}
          streakLoc={streakLoc}
          StatsLoc={statsLoc}
          StatsData={StatsData && events === "gitstats" && StatsData}
          StreaksData={StreaksData && events === "streakstats" && StreaksData}
          closeSide={closeSide}
          trophyData={trophyData && events === "trophy" && trophyData}
          onDataUpdate={onDataUpdate}
          template={Template}
          events={events}
          display={display}
          setDisplay={() => setDisplay((prev) => prev != prev)}
        />
      </div>

      <div className="bg-red-300 w-screen flex flex-row justify-center">
        <Message setMessage={setMsg} msg={Msg.message} success={Msg.success} />
      </div>

      {/* <p className="text-white">Hello</p> */}
    </>
  );
}
