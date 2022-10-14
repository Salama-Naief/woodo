import Image from 'next/image';
import Layout from '../components/utils/Layout';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { url } from '../utils/api';
import Banner from '../components/home/Banner';
import Slider from '../components/home/Slider';



  function Home({errMsg,pages,banner}) {
   const {t,i18n} =useTranslation();
   const router=useRouter();
   const {pathname,asPath,query}=router
    
    useEffect(()=>{
      router.push({pathname,query},asPath,{locale:i18n.language})
    },[i18n.language])

useEffect(()=>{
//   console.log("banner",banner)
},[])

    //error
    if(errMsg){
      return(
        <Layout  title="error page">
          <div className='text-3xl w-full h-screen flex justify-center items-center text-secondary'><div>error in back end connection</div></div>  
      </Layout>
      )
    }


    return (
      <Layout title="homePage"  description="homePage" pages={pages}>
          <Banner banner={banner.length>0?banner:[]}/>
          <div className="h-96 w-full"></div>
          <Slider banner={banner.length>0?banner:[]}/>
      </Layout>
    )
  }

  export async function getStaticProps({locale}) {
    try{
           const pagesRes=await fetch(`${url}/api/pages?locale=${locale}`)
           const pages=await pagesRes.json();

           const bannerRes=await fetch(`${url}/api/banner-sections?locale=${locale}&populate=*`)
           const banner=await bannerRes.json();
           

          return {
            props: {
              pages:pages.data||[],
              banner:banner.data||[],
              errMsg:false,
              ...(await serverSideTranslations(locale, ['common',"product","policies"]))
            }
          }
    }catch(err){
      return {
        props: {
          errMsg:true,
          ...(await serverSideTranslations(locale, ['common',"product","policies"]))
        }
      }
  }
  }
  export default Home;