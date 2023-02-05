const TitleGenerate = ({title})=>{
    if(title.length>0){
        return<>
         {`<p align="center">${title}</p>`}
        </>
    }

    return "";
}

export default TitleGenerate;