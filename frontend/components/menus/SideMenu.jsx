import {motion} from 'framer-motion'

export default function SideMenu({pages,setSideMenu}) {
  return (
    <motion.div initial={{display:none,x:400}} animate={{display:"block",x:0}} className='fixed w-3/4 h-screen'>
         <div className="absolute top-0 right-0 rounded-full p-1 border border-secondary">X</div>
    </motion.div>
  )
}
