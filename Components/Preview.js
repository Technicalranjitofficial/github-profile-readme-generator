import {
  ConstGitStatsThemes,
  icons,
  skills,
  socialIcons,
  socialName,
} from "@/helper/static";
import React from "react";

const Preview = ({
  name,
  subtitle,
  theme,
  onThemeChange,
  projects,
  moreInfo,
  socialConnect,
  skill,
  addons,
  gitstatsThemes,
  onGitStatsThemesChage,
  onDisplay,
  trophyData,
  StreaksData,
  StatsData,
  TopLangStatsData
}) => {
  const ab = "h1";

  return (
    <div className="md:p-5 p-2 bg-slate-900  border-r-2 border-b-2 border-slate-800  relative text-slate-400">
      <div className="absolute md:right-9 right-3 top-3 md:top-9">
        <select
          className="md:py-2 py-1   px-2 md:px-4 bg-transparent border-2 border-orange-200 text-slate-300 rounded-md font-bold text-sm md:text-xl"
          value={theme}
          onChange={(e) => onThemeChange(e)}
        >
          <option value="origin">ORIGIN</option>
          <option value="textBox">TEXTBOX</option>
          <option value="glitch">GLITCH</option>
          <option value="luminance">LUMINACE</option>
          <option value="typeWriter">TYPEWRITER</option>
          <option value="rainbow">RAINBOW</option>
        </select>
      </div>

      <img
        src={`https://svg-banners.vercel.app/api?type=${theme}&text1=${name}&text2=${subtitle}&width=800&height=400`}
      />
      {/*  */}
      <br />
      {theme !== "origin" && subtitle && (
      
        <img
          className="mt-2  font-Alegreya font-bold"
          src={`https://readme-typing-svg.demolab.com/?lines=${subtitle.replace(
            " ",
            "+"
          )}&duration=3500&size=30`}
          alt="profile-radme-generator"
        />
      )}
      <br />
      <ShowVisitorBadge
        username={socialConnect['github']}
        visitorBadge={addons["visitorBadge"]}
      />
      <br />
      <div className="flex flex-row justify-center">
        <ShowMemes memes={addons["showMemes"]} />
      </div>
   <br />
      <div>
        <ShowTwiterBadge username={socialConnect['twitter']} twitterBadge={addons['twiterBadge']} />
      </div>
      <br />
      <div>
      <ShowTrophy column={trophyData['column']} theme={trophyData['theme']} noframe={trophyData['no_frames']} transparent={trophyData['background_transparent']} onDisplay={onDisplay} trophy={addons['trophy']}  username={socialConnect['github']}/>
    
      </div>
      <div className="mt-5">
        <span className="font-Alegreya font-bold text-xl">Projects</span>
        <br />
        {projects &&
          projects.map((val, index) => {
            return (
              <ShowProjects
                key={index}
                prefix={val.workingFor}
                title={val.pName}
              />
            );
          })}
        {moreInfo && (
          <div>
            {moreInfo.currentLearning.length > 0 && (
              <ShowAdditionalInfo
                prefix="👩🏽‍💻 Currently Learning"
                title={moreInfo.currentLearning}
              />
            )}
            {moreInfo.askme.length > 0 && (
              <ShowAdditionalInfo
                prefix="💬 Ask me about"
                title={moreInfo.askme}
              />
            )}
            {moreInfo.reachme.length > 0 && (
              <ShowAdditionalInfo
                prefix="📫 How to reach me"
                title={moreInfo.reachme}
              />
            )}
            {moreInfo.funfact.length > 0 && (
              <ShowAdditionalInfo
                prefix="😂 Fun fact"
                title={moreInfo.funfact}
              />
            )}
          </div>
        )}
      </div>
      <br />
      <span className="font-Alegreya font-bold text-xl">Skills</span>
      <br />
      <div className="flex gap-3 flex-wrap flex-row ml-3 mt-2">
        {skills.map((val, index) => {
          if (skill[val]) {
            
            return <ShowSkills key={index} img={icons[val]} />;
          }
        })}
      </div>
      <br />
      <span className="font-Alegreya font-bold text-xl">SocialConnect</span>
      <br />
      <div className="flex gap-3 flex-wrap flex-row ml-3 mt-2">
        {socialName.map((val, index) => {
          if (socialConnect[val].length > 0) {
           
            return <ShowSocialConnect key={index} img={socialIcons[val]} />;
          }
        })}
      </div>
      <br />
      <div className="flex flex-row gap-4">
        <ShowGitStats
          onDisplay={onDisplay}
          hide_border={StatsData['hide_border']}
          locale={StatsData['locale'].locale}
          username={socialConnect['github']}
          themes={StatsData['theme']}
          gitstats={addons["githubProfileStats"]}
        />
        {/* <div className="flex flex-col justify-evenly ml-2">
        <select value={gitstatsThemes} onChange={(e)=>onGitStatsThemesChage(e)}>
           {ConstGitStatsThemes.map((val,index)=>{
            return <option key={index} value={val}>{val}</option>
           })}
        </select>
        <button>show</button>
        <button>show</button>
        
    </div> */}
        <ShowStreakStats
        onDisplay={onDisplay}
          username={socialConnect['github']}
          StreaksData ={StreaksData}
          showStreakStats={addons["showStreakStats"]}

          hide_border={StreaksData['hide_border']}
          locale={StreaksData['locale']}
          mode={StreaksData['mode']}
          theme={StreaksData['theme']}
        />
      </div>
      <br />
      <ShowMostLanguageUsed
      hide_border={TopLangStatsData['hide_border']}
      theme={TopLangStatsData['theme']}
      onDisplay={onDisplay}
      username={socialConnect['github']}
        showMostLanguageUsed={addons["showMostLanguageUsed"]}
       
      />
    </div>
  );
};

export default Preview;

const ShowProjects = ({ prefix, title, link }) => {
  return (
    <>
      <br />
      <li className="ml-7">
        {prefix}{" "}
        <a href={link}>
          <span className="text-blue-500">{title}</span>
        </a>
      </li>
    </>
  );
};

const ShowAdditionalInfo = ({ prefix, title }) => {
  return (
    <>
      <br />
      <li className="ml-7" typeof="">
        {prefix} <span className="text-white">{title}</span>
      </li>
    </>
  );
};

const ShowSocialConnect = ({ img }) => {
  return <img width={50} height={50} src={img} alt="profile-radme-generator" />;
};

const ShowSkills = ({ img }) => {
  return <img width={50} height={50} src={img} alt="profile-radme-generator" />;
};

const ShowMemes = ({ memes }) => {
  if (memes) {
    return (
      <img
        height="auto"
        width={500}
        src="https://readme-jokes.vercel.app/api?bgColor=%23073b4c&textColor=%2306d6a0&aColor=%2306d6a0&borderColor=%2306d6a0"
        alt="profile-radme-generator"
      />
    );
  }
};
const ShowGitStats = ({ gitstats, username, themes, onDisplay,locale,hide_border, }) => {
  
  if (gitstats && username.length>0) {
    return (
      <button onClick={()=>onDisplay('gitstats')}>
        {" "}
        <img
          height="auto"
          width={300}
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themes}&hide_border=${hide_border}&locale=${locale}`}
          alt="profile-radme-generator"
        />
      </button>
    );
  }
};

const ShowStreakStats = ({ showStreakStats, username,onDisplay,theme,mode,hide_border,locale }) => {
  if (showStreakStats && username) {
    return (
      <button onClick={()=>onDisplay('streakstats')}>
      <img
        height="auto"
        width={300}
        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&mode=${mode}&hide_border=${hide_border}&locale=${locale.locale}`}
        alt="profile-radme-generator"
      />
      </button>
    );
  }
};
const ShowMostLanguageUsed = ({ showMostLanguageUsed, username,onDisplay,theme,hide_border }) => {
  if (showMostLanguageUsed && username) {
    return (
      <button onClick={()=>onDisplay('toplanguage')}>
      <img
        height="auto"
        width={300}
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&hide_border=${hide_border}`}
        alt="profile-radme-generator"
      />
      </button>
    );
  }
};
const ShowVisitorBadge = ({ visitorBadge, username }) => {
  if (visitorBadge && username) {
    return (
      <img
        height="auto"
        src={`https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat`}
        alt="profile-radme-generator"
      />
    );
  }
};

const ShowTrophy = ({ username,trophy,onDisplay,theme,column,noframe,transparent }) => {
  if (username.length>0 && trophy) {
    return (
      <button onClick={()=>onDisplay('trophy')}>
      <img
        height="auto"
        src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&column=${column}&no-bg=${transparent}&no-frame=${noframe}&margin-w=19&margin-h=19`}
        alt="image"
      />
      </button>
    );
  }
};

const ShowTwiterBadge = ({ username, twitterBadge ,themes}) => {
  if (username.length>0 && twitterBadge) {
    return (
    
<p align="left"> <a href={`https://twitter.com/${username}`} target="blank"><img src={`https://img.shields.io/twitter/follow/${username}?logo=twitter&style=for-the-badge`} alt="technicalranjit" /></a> </p>
     
    );
  }
};

