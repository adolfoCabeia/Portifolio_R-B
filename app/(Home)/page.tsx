import Contacto from '@/Components/Contacto'
import Galeria from '@/Components/Galeria'
import Hero from '@/Components/Hero'
import Playlist from '@/Components/Playlist'
import SobreMim from '@/Components/SobreMim'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <SobreMim/> 
      <Playlist/>
      <Galeria/>
      <Contacto/>
    </>
  )
}

export default Home