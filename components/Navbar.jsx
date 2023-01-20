import React from 'react'
import Image from "next/image"

function Navbar() {
  return (
  <>
  <nav className='flex items-center justify-between p-4'>
<div className='logo'>
    <Image src="/logos.png" width={150} height={100} alt="logo"/>

</div>
<div>
    <ul className='flex items-center justify-center gap-[25px] text-sm font-bold'>
        <li>HOME</li>
        <li>MAN</li>
        <li>WOMAN</li>
        <li>KIDS</li>
        <li>SALE</li>
    </ul>

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
