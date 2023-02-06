import {
  icons,
  skillWebsites,
  socialIcons,
  socialName,
  socialUrl,
} from "@/helper/static";
import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
// import Title from './Title';
// import TitleGenerate from "../Components/GenerateMarkDown"

const Generate = ({
  data,
  trophyData,
  StreaksData,
  StatsData,
  TopLangStatsData,
  theme,
}) => {


  const [copy, setCopy] = useState(false);
  const handleCopyToClipboard = () => {
    const range = document.createRange();
    range.selectNode(document.getElementById("markdown-content"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };
  return (
    <div className="text-slate-300 relative bg-slate-800 mt-5 p-2 rounded-md">
      <span className="absolute top-3 left-3 font-bold text-green-500 animate-pulse">
        ##CODE
      </span>
      <p
        className={`border-2 hover:border-slate-500 absolute right-4 cursor-pointer border-slate-700 ${
          copy && "text-green-500"
        } p-2 w-10 h-10 flex flex-col items-center rounded-md`}
      >
        {copy ? (
          <FiCheck />
        ) : (
          <BiCopy
            onClick={() => {
              handleCopyToClipboard();
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
            className="w-7 h-7  "
          />
        )}
      </p>
      <br />

      <div className="text-slate-400" id="markdown-content">
        <>
          <GenerateHeader
            name={data.title}
            subtitle={data.subtitle}
            themes={theme}
          />
          <br />
          <br />
        </>
        {data.addons["visitorBadge"] && (
          <>
            <GenerateVisitorCount
              username={data.socialConnection["github"]}
              visitorBadge={data.addons["visitorBadge"]}
            />
            <br />
            <br />
          </>
        )}
        <>
          {data.addons["showMemes"] && <GenerateMemes showMemes={data.addons['showMemes']} />}
          <br />
          <br />
        </>
        {data.addons["twiterBadge"] && (
          <>
            <GenerateTwiterBadge
              username={data.socialConnection["twitter"]}
              twitterBadge={data.addons["twiterBadge"]}
            />
            <br />
            <br />
          </>
        )}

        {data.addons["trophy"] && (
          <>
            <GenerateTrophy
          
              column={trophyData["column"]}
              noframe={trophyData["no_frames"]}
              theme={trophyData["theme"]}
              transparent={trophyData["background_transparent"]}
              username={data.socialConnection["github"]}
              trophy={data.addons["trophy"]}
            />
          </>
        )}

        {/* <>
        <SubTitleGenerate subtitle={data.subtitle} />
        <br />
        <br />
      </> */}
        <>
          <br />
          {data.project.length > 0 &&
            data.project.map((val, index) => {
              return <GenerateProjects key={index} projects={val} />;
            })}

          <br />

          <GenerateAdditionalInfo
            title={data.moreInfo.currentLearning}
            prefix="🌱 I’m currently learning"
          />
          <GenerateAdditionalInfo
            title={data.moreInfo.askme}
            prefix="💬 Ask me about"
          />
          <GenerateAdditionalInfo
            title={data.moreInfo.funfact}
            prefix="😂 Func Fact "
          />
          <GenerateAdditionalInfo
            title={data.moreInfo.reachme}
            prefix="📫 How to reach me "
          />
        </>

        <>
          <GenerateSocialConnect socialConnect={data.socialConnection} />
          <br />
          <br />
        </>
        <>
          <GenerateSkills skills={data.skills} />
          <br />
          <br />
        </>

        <>
          <GenerateGitStats
          githubProfileStats={data.addons['githubProfileStats']}
            hide_border={StatsData["hide_border"]}
            locale={StatsData["locale"].locale}
            themes={StatsData["theme"]}
            username={data.socialConnection["github"]}
          />
          <br />
          <br />
        </>
        <>
          <GenerateStreaks
        
            StreaksData={StreaksData}
            showStreakStats={data.addons["showStreakStats"]}
            hide_border={StreaksData["hide_border"]}
            locale={StreaksData["locale"]}
            mode={StreaksData["mode"]}
            theme={StreaksData["theme"]}
            username={data.socialConnection["github"]}
          />
          <br />
          <br />
        </>
        <>
          <TopLanguageUsed
          showMostLanguageUsed={data.addons['showMostLanguageUsed']}
            hide_border={TopLangStatsData["hide_border"]}
            theme={TopLangStatsData["theme"]}
            username={data.socialConnection["github"]}
          />
          <br />
          <br />
        </>
      </div>
    </div>
  );
};

const TitleGenerate = ({ title }) => {
  if (title.length > 0) {
    return <>{`<h1 align="center">Hi 👋, I'm ${title}</h1>`}</>;
  }

  return "";
};
const SubTitleGenerate = ({ subtitle }) => {
  if (subtitle.length > 0) {
    return <>{`<h1 align="center">Hi 👋, I'm ${subtitle}</h1>`}</>;
  }

  return "";
};

const GenerateProjects = ({ projects }) => {
  return (
    <>
      <br />
      {`- ${projects.workingFor} [${projects.pName}](${projects.pLink})`}
      <br />
    </>
  );
};

const GenerateSkills = ({ skills }) => {
  let skl = [];
  skills.map((val, index) => {
    skl.push(
      `<a href=${skillWebsites[val]} target="_blank" rel="noreferrer"> 
      <img src=${icons[val]} alt="android" width="40" height="40"/> 
      </a> `
    );
  });

  return skl.length > 0 ? (
    <>{`<h3 align="left">Languages and Tools:</h3>
  <p align="left"> ${skl.join(" ")}</p>`}</>
  ) : (
    <></>
  );
};

const GenerateSocialConnect = ({ socialConnect }) => {
  let social = [];
  socialName.map((val) => {
    if (socialConnect[val].length > 0) {
      social.push(`
            <a href="${socialUrl[val]}${socialConnect[val]}" target="blank"><img align="center" src=${socialIcons[val]} alt="profile-radme-generator" height="30" width="40" /></a>
            `);
    }
  });

  return social.length > 0 ? (
    <>{`<h3 align="left">Connect with me:</h3>
    <p align="left"> ${social.join(" ")} </p>`}</>
  ) : (
    <></>
  );
};

const GenerateAdditionalInfo = ({ prefix, title }) => {
  if (title.length > 0) {
    return (
      <>
        {`- ${prefix} **${title}**`}
        <br />
        <br />
      </>
    );
  }
  return "";
};

const GenerateHeader = ({ name, subtitle, themes }) => {
  return (
    <>
      <br />
      <br />
      {`
![SVG Banners](https://svg-banners.vercel.app/api?type=${themes}&text1=${name.replaceAll(
        " ",
        "%20"
      )}&text2=${subtitle.replaceAll(
        " ",
        "%20"
      )}&width=900&height=400)`}
    </>
  );
};

const GenerateVisitorCount = ({ username, visitorBadge }) => {
  if (visitorBadge && username.length > 0) {
    return (
      <>
        <br />

        {` 
        <img height="auto" src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat" alt="profile-radme-generator" />
        `}
      </>
    );
  }
};

const GenerateGitStats = ({githubProfileStats, username, themes, locale, hide_border }) => {
  if(githubProfileStats && username.length>0){
    return (
      <>
        <br />
        <br />
        {`
      <img align="left" height="auto" width={300} src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themes}&locale=${locale}&hide_border=${hide_border}" alt="profile-radme-generator" />
      `}
      </>
    );
  }
  
};
const GenerateStreaks = ({showStreakStats, username, theme, mode, hide_border, locale }) => {
  if(showStreakStats){

    return (
      <>
      <br />
      <br />
      {`
    <img align="left" height="auto" width={300} src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&mode=${mode}&hide_border=${hide_border}&locale=${locale.locale}" alt="profile-radme-generator" />
    `}
    </>
  );
}
};

const TopLanguageUsed = ({showMostLanguageUsed, username, theme, hide_border }) => {
  if(showMostLanguageUsed){

    return (
      <>
      <br />
      <br />
      {`
   <img align="left" height="auto" width={300} src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&hide_border=${hide_border}" alt="profile-radme-generator" />
   
   `}
    </>
  );
}
};

const GenerateMemes = ({showMemes}) => {
  if(showMemes){

    return (
      <>
      <br />
      <br />
      {`
   <p align="left">
   <img width="900" height="110" src="https://readme-jokes.vercel.app/api" alt ="tr"/>
   </p>
   
   `}
    </>
  );
}
};

export default Generate;

const GenerateTrophy = ({
  username,
  trophy,
  theme,
  column,
  noframe,
  transparent,
}) => {
  if (username.length > 0 && trophy) {
    return (
      <>
        <br />
        <br />
        {`<p align="left">
      <img 
      height="auto"
      src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&column=${column}&no-frame=${noframe}&no-bg=${transparent}&margin-w=19&margin-h=19"
      alt="image"
    />
      </p>`}
      </>
    );
  }
};

const GenerateTwiterBadge = ({ username, twitterBadge, themes }) => {
  if (username.length > 0 && twitterBadge) {
    return (
      <>
        <br />
        <br />
        {`
<p align="left"> <a href="https://twitter.com/${username}" target="blank"><img src="https://img.shields.io/twitter/follow/${username}?logo=twitter&style=for-the-badge" alt="profile-radme-generator" /></a> </p>`}
      </>
    );
  }
};

// if (additionalInfo.askme.length > 0) {
//     moreInfo.push(`-  **${additionalInfo.askme}**`);
//   }
//   if (additionalInfo.funfact.length > 0) {
//     moreInfo.push(`**${additionalInfo.funfact}**`);
//   }
//   if (additionalInfo.reachme.length > 0) {
//     moreInfo.push(`-  **${additionalInfo.reachme}**`);
//   }
