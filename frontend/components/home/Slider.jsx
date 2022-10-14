import Image from 'next/image'
import {motion} from 'framer-motion'
//import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import {MdArrowForwardIos,MdArrowBackIos} from 'react-icons/md'
import { url } from '../../utils/api';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useEffect } from 'react';





export default function Slider({banner}) {
  const [hover,setHover]=useState(false)
  const [index,setIndex]=useState(0)
  const [interVal,setinterVal]=useState(false)


  let bannerIndex=index
   useEffect(()=>{
    if(index<0&&banner.length>0){
      setIndex(banner.length)
    }
    if(index>=banner.length&&banner.length>0){
      setIndex(0)
    }
    console.log("index",index)
   },[index])

  /*setInterval(()=>{
    bannerIndex=bannerIndex+1
    if(bannerIndex<0&&banner.length>0){
      setIndex(banner.length)
      return;
    }
    if(bannerIndex>=banner.length&&banner.length>0){
      if(bannerIndex<0&&banner.length>0){
        setIndex(banner.length)
        return;
      }
      setIndex(0)
      return;
    }
      setIndex(bannerIndex)

},10000)*/

  


  const handleLeft=()=>{
       const count=index+1
        setIndex(count) 

  }
  const handleRight=()=>{
    const count=index-1
     setIndex(count)    
  }
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="relative overflow-hidden">
        {
        banner.length>0&&banner.map((item,i)=>
         <motion.div initial={{display:"none"}} animate={index===i?{display:"block"}:{display:"none"}} key={item.id} onClick={()=>setIndex(i)}  className='relative h-96 md:h-96 lg:h-screen overflow-hidden'>
            <motion.div whileHover={()=>setHover(true)} initial={{scale:1.25,opacity:0.8}} animate={index===i?{scale:1,opacity:1}:{scale:1.25,opacity:0.8}} transition={{duration:0.2}} className="relative w-full h-full">
                <Image src={`${url}${item.attributes.image.data.attributes.url}`} layout="fill"  objectFit='cover'  objectPosition="center" alt={""}/>
            </motion.div>
            <div  className="absolute w-full h-full text-center text-white flex  items-center  top-0 left-1 md:left-2 lg:left-32 z-20 overflow-hidden">
                <div className="">
                  <motion.h1  initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.2}} className='text-3xl md:text-4xl lg:text-6xl font-bold font-mono overflow-hidden'>{item.attributes.title}</motion.h1>
                  <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:0.1,duration:0.2}} className='w-full px-4  text-xl my-4 mx-auto' dangerouslySetInnerHTML={{__html:item.attributes.description}}/>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-secondary z-10"></div>
        </motion.div> 
        )
        }
        <div onClick={()=>handleRight()} className="absolute top-1/2 lg:right-10 md:right-5 right-1 z-20">
          <MdArrowForwardIos className='text-3xl cursor-pointer text-primary'/>
        </div>
        <div onClick={()=>handleLeft()} className="absolute top-1/2 lg:left-10 md:left-5 left-1 z-20">
          <MdArrowBackIos className='text-3xl cursor-pointer text-primary'/>
        </div>
        {index}
    </div>


  )
}
