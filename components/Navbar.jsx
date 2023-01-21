import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

function Navbar() {

  const ulAnimate = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.35
      }
    }
  }

  const liAnimate = {
    hidden:{
      x:"-100vw"
    },
    visible:{
      x:0,
      transition:{
        duration:1
      }
    }
  }
  return (
  <>
  <nav className='flex items-center justify-between p-4'>
<motion.div className='logo' initial={{scale:2,opacity:0,x:-100}} animate={{scale:1,opacity:1,x:0}} transition={{duration:0.5}}>
    <Image src="/logos.png" width={150} height={100} alt="logo"/>

</motion.div>
<div>
    <motion.ul className='flex items-center justify-center gap-[25px] text-sm font-bold' variants={ulAnimate} initial="hidden" animate="visible">
        <motion.li variants={liAnimate}>HOME</motion.li>
        <motion.li variants={liAnimate}>MAN</motion.li>
        <motion.li variants={liAnimate}>WOMAN</motion.li>
        <motion.li variants={liAnimate}>KIDS</motion.li>
        <motion.li variants={liAnimate}>SALE</motion.li>
    </motion.ul>

</div>
<div className='flex items-center gap-[20px] justify-center'>
    <div><Image src="/Frame 8.png" width={20} height={100} alt="cart"/></div>
    <div><Image src="/dashicons_cart.png" width={20} height={100} alt="cart"/></div>
    <div><Image src="/avatar.png" width={20} height={100} alt="cart"/></div>

</div>
  </nav>
  </>
  )
}

export default Navbar
