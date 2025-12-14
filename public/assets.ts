import Logo from './Image/Logotipo.png'
import whatsLogo from './Image/whats.png'
import ImgArtist from './Image/imgArtist.png'
import Img1 from './Image/img1.jpeg'
import Img2 from './Image/img2.jpeg'
import Img3 from './Image/img3.jpeg'
import Img4 from './Image/img4.jpeg'
import Img5 from './Image/img5.jpeg'
import Img6 from './Image/img6.jpeg'
import Img7 from './Image/img7.jpeg'
import Img8 from './Image/img8.jpeg'
import Img9 from './Image/img9.jpeg'


export const assets = {
    Logo,
    whatsLogo,
    ImgArtist
}

export const menus=[
    {name:'Home', Link:'/'},
    {name:'Ouvir Músicas', Link:'/'},
    {name: 'Vídeos', Link:'/'}
]

export const galeria = [

    {id:3, src:Img3,alt: "Imagem 1 da galeria" },
    {id:4, src:Img4, alt: "Imagem 1 da galeria"},
    {id:5, src:Img5, alt: "Imagem 1 da galeria"},
    {id:6, src:Img6, alt: "Imagem 1 da galeria"},
    {id:7, src:Img7, alt: "Imagem 1 da galeria"},
    {id:8, src:Img8, alt: "Imagem 1 da galeria"},
    {id:9, src:Img9, alt: "Imagem 1 da galeria"}
]


export const trackList = [
  { id: 1, title: "Calafrio", src: "../Audio/Delev1.m4a", duration: "03:45" },
  { id: 2, title: "Antes que a vela apaga", src: "../Audio/Delev2.m4a", duration: "03:45" },
  { id: 3, title: "Maldita Ligação", src: "../Audio/Delev3.mp3", duration: "03:45" },
  { id: 4, title: "Lúcido", src: "../Audio/Delev4.mp3", duration: "03:45" },
  { id: 5, title: "Sodoma e Gomorra", src: "../Audio/Delev5.m4a", duration: "03:45" },
  { id: 6, title: "Preço da fama", src: "../Audio/Delev7.mp3", duration: "03:45" },
]
