import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {MdPersonOutline,MdOutlineSearch,MdOutlineShoppingCart,MdOutlineEmail,MdReorder} from 'react-icons/md'
//import {} from 'react-icons'

export default function Navbar({pages}) {
    const {t,i18n} =useTranslation();
    const [mouseHover,setMouseHover]=useState(null)
    const [sideMenu,setSideMenu]=useState(false)
    const [navScroll,setNavScoll]=useState(false)
    const logoBar=useRef();

    


    window.onscroll=()=>{
        setNavScoll(window.scrollY===0?false:true)
    }
  return (
    <section className=''>
            <div className={`absolute ${sideMenu?"bg-secondary":"bg-transparent"} w-full text-white py-4 top-0 z-30`}>
                {/*down section while scroll down */}
            <motion.div initial={{opacity:0,y:-500}} animate={navScroll?{y:0,opacity:1}:{opacity:0,y:-500}} transition={{duration:0.5}} className="fixed top-0 left-0 z-30 bg-secondary w-full hidden md:flex justify-between px-4 pt-1">
                        <div className="">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans mb-1"><Link href="/" passHref><a>Woodo</a></Link></h1>
                        </div>
                        <div className="flex items-center justify-center">
                            {
                                pages.length>0&&pages.map(page=>(
                                    <div key={page.id} onMouseEnter={()=>setMouseHover(page.attributes.title)} onMouseLeave={()=>setMouseHover(null)} className="py-1  px-2 md:px-4 capitalize md:text-lg font-semibold font-sans">
                                        <Link href={page.attributes.title==="home"?"/":`/${page.attributes.handle}`}><a className="">{page.attributes.title}</a></Link>
                                        <motion.div initial={{scaleX:0}} animate={mouseHover===page.attributes.title?{scaleX:1}:{scaleX:0}} className='w-full h-1 bg-primary mt-1'></motion.div>
                                    </div>
                                ))
                            }
                        </div>     
                    </motion.div>
                    {/*header section in large screen */}
                <div className="container mx-auto">
                    {/** icons section */}
                    <div className="flex items-center justify-between md:justify-end px-2  border-b">
                    <div className="flex items-center md:hidden">
                        <div className='cursor-pointer' onClick={()=>setSideMenu(!sideMenu)} >
                            <MdReorder className='text-xl'/>
                        </div>
                        <h1 className="text-xl px-2  font-black font-sans"><Link href="/" passHref><a>Woodo</a></Link></h1>
                    </div>
                        <div className='flex items-center text-primary'>
                            <select value={i18n.language} onChange={(e)=>i18n.changeLanguage(e.target.value)} name="" id="" className="appearance-none text-primary bg-transparent px-2 outline-none cursor-pointer  md:text-xl">
                                <option value="en" className='bg-secondary'>En</option>
                                <option value="ar" className='bg-secondary'>Ar</option>
                            </select>
                            <div className="border-l px-2 cursor-pointer transition duration-200 hover:text-secondary">
                                <MdPersonOutline className='text-lg md:text-2xl'/>
                            </div>
                            <div className="relative border-l px-2 cursor-pointer transition duration-200 hover:text-secondary">
                                <MdOutlineEmail className='text-lg md:text-2xl'/>
                                <div className="absolute -top-3 right-1 rounded-full px-1  text-xs text-white bg-error">10</div>
                            </div>
                            <div className="border-l px-2 cursor-pointer transition duration-200 hover:text-secondary">
                                <MdOutlineSearch className='text-lg md:text-2xl'/>
                            </div>
                            <div className="relative border-r border-l px-2 cursor-pointer transition duration-200 hover:text-secondary">
                                <MdOutlineShoppingCart className='text-lg md:text-2xl'/>
                                <div className="absolute -top-3 right-1 rounded-full px-1  text-xs text-white bg-error">10</div>
                            </div>
                        </div>
                     
                </div>
                {/** second section contians pages and logo */}
                    <div  className="w-screen hidden md:flex justify-between container px-4 py-2">
                        <div className="">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans"><Link href="/" passHref><a>Woodo</a></Link></h1>
                        </div>
                        <div className="flex items-center justify-center">
                            {
                                pages.length>0&&pages.map(page=>(
                                    <div key={page.id} onMouseEnter={()=>setMouseHover(page.attributes.title)} onMouseLeave={()=>setMouseHover(null)} className="py-1  px-2 md:px-4 capitalize md:text-lg font-semibold font-sans">
                                        <Link href={page.attributes.title==="home"?"/":`/${page.attributes.handle}`}><a className="">{page.attributes.title}</a></Link>
                                        <motion.div initial={{scaleX:0}} animate={mouseHover===page.attributes.title?{scaleX:1}:{scaleX:0}} className='w-full h-1 bg-primary my-2'></motion.div>
                                    </div>
                                ))
                            }
                        </div>     
                    </div>
                    {/** pages section in small screens */}
                    <motion.div initial={{y:-500,display:"none"}} animate={(sideMenu)?{y:0,display:"block"}:{y:-500,display:"none"}} transition={{duration:0.5}} className={`bg-secondary text-center my-2`}>
                            {
                                pages.length>0&&pages.map(page=>(
                                    <motion.div  key={page.id} onMouseEnter={()=>setMouseHover(page.attributes.title)} onMouseLeave={()=>setMouseHover(null)} className="px-2 capitalize md:text-lg font-semibold font-sans">
                                        <Link href={page.attributes.title==="home"?"/":`/${page.attributes.handle}`}><a className="">{page.attributes.title}</a></Link>
                                        <motion.div initial={{scaleX:0}} animate={mouseHover===page.attributes.title?{scaleX:1}:{scaleX:0}} className='w-full h-1 bg-primary my-2'></motion.div>
                                    </motion.div>
                                ))
                            }
                        </motion.div> 
                    </div>
                
            </div>
    </section>
    
  )
}
