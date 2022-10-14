import Image from 'next/image'
import {motion} from 'framer-motion'
//import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import {MdArrowForwardIos,MdArrowBackIos} from 'react-icons/md'
import { url } from '../../utils/api';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

// arrows
function SampleNextArrow(props) {
  const { className,hover, style, onClick } = props;
  return (         
   <MdArrowForwardIos className={`${hover?"block":"block md:hidden"} z-20 absolute top-1/2 right-0 md:right-5 cursor-pointer text-white text-2xl md:text-5xl`} style={{ ...style }} onClick={onClick}/>
  );
}
//arrows
function SampleprevArrow(props) {
  const { className,hover, style, onClick } = props;

  return (
  <MdArrowBackIos className={`${hover?"block":"hidden"} z-20 absolute top-1/2 left-0 md:left-5 cursor-pointer text-white text-2xl md:text-5xl`} style={{ ...style }} onClick={onClick}/>
  );
}

export default function Banner({banner}) {
  const [hover,setHover]=useState(false)
  const settings = {
    slidesToShow:1,
    slidesToScroll:1,
    //autoplay: true,
    speed: 1000,
    //autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:true,
    nextArrow:<SampleNextArrow hover={hover} />,
    prevArrow:<SampleprevArrow hover={hover} />,
  };

  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="">
        <Slider {...settings} className="relative">
        {
        banner.length>0&&banner.map(item=><div key={item.id}  className='relative h-96 md:h-96 lg:h-screen'>
            <motion.div whileHover={()=>setHover(true)} initial={{scale:0.5}} animate={{scale:1}} transition={{duration:1}} className="relative w-full h-full">
                <Image src={`${url}${item.attributes.image.data.attributes.url}`} layout="fill"  objectFit='cover'  objectPosition="center" alt={""}/>
            </motion.div>
            <div  className="absolute w-full h-full text-center text-white flex  items-center  top-0 left-1 md:left-2 lg:left-32 z-20 overflow-hidden">
                <div className="">
                  <motion.h1  initial={{y:50}} animate={{y:0}} transition={{duration:1}} className='text-3xl md:text-4xl lg:text-6xl font-bold font-mono overflow-hidden'>{item.attributes.title}</motion.h1>
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='w-full px-4  text-xl my-4 mx-auto' dangerouslySetInnerHTML={{__html:item.attributes.description}}/>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-secondary z-10"></div>
        </div> 
        )
        }
      </Slider>
    </div>


  )
}
