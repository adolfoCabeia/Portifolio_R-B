"use client"
import React, { useEffect,useRef, useState } from 'react'
import { assets, menus } from '@/public/assets'
import {TextAlignJustify, X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    
    const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section className="container cabecalho">
        <div className="logo">
            <Image src={assets.Logo} width={100} alt='Logotipo'/>
        </div>
        <div className="menu" onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu ? <X/> :
            <TextAlignJustify />}
        </div>
        <nav className={openMenu ? 'active' :''} ref={navRef} >
            <ul>
                {menus.map((menu)=>
                    <li key={menu.name}>
                        <Link key={menu.name} href={menu.Link}>{menu.name}</Link>
                    </li>
                )}
            </ul>

            <button>
                <Image src={assets.whatsLogo} width={32}  alt='WhatsApp Logo'/>
            </button>
        </nav>
    </section>
  )
}

export default Header