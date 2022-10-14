import '../styles/globals.css'
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Loading from '../components/utils/Loading';
import NextNProgress from "nextjs-progressbar";




function MyApp({ Component, pageProps }) {

  const {i18n}=useTranslation();
  const [loading,setLoading]=useState(true)


  useEffect(()=>{

    setLoading(false)
  },[loading])
  //loading
  if(loading){
    
    return(
        <Loading/>
    )
  }
  return(

      <div className={``} style={{direction:i18n.language==="ar"?"rtl":"ltr"}}>
        <NextNProgress color="#ff8700"/>
        <Component {...pageProps} />
      </div>

    )
}



export default appWithTranslation(MyApp)
