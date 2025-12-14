'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import '@/Styles/index.css'
import '@/Styles/responsividade.css'
import Image from 'next/image';
import { assets } from '@/public/assets';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [headerScrool, setHeaderScrool] = useState(false)
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  // Detecta scroll para header
  useEffect(() => {
    const handleScroll = () => setHeaderScrool(window.scrollY >= 5)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Preloader real
  useEffect(() => {
    // Simula carregamento real (ou você pode usar fetch/axios)
    const timerFade = setTimeout(() => setFadeOut(true), 2000) // inicia fade out
    const timerFinish = setTimeout(() => setLoading(false), 2500) // remove preloader e mostra site
    return () => {
      clearTimeout(timerFade)
      clearTimeout(timerFinish)
    }
  }, [])

  // Se estiver carregando, retorna apenas o preloader
  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? 'fadeOut' : ''}`}>
        <Image src={assets.Logo} alt="Logo" className="preloader-logo" />
      </div>
    )
  }

  // Depois do carregamento, renderiza o site
  return (
    <>
      <header className={headerScrool ? 'active' : ''}>
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
