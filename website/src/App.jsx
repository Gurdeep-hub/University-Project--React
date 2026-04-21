
import { useState } from 'react'
import './App.css'
import { About } from './components/About/About'
import { Campus } from './components/campus/Campus'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Programs } from './components/programs/Programs'
import { Testimonials } from './components/Testimonials/Testimonals'
import { Title } from './components/title/Title'
import { VideoPlayer } from './components/videoPlayer/VideoPlayer'

function App() {
const [playState,setPlaystate] = useState(false);  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'></Title>
       <Programs></Programs>
       <About setPlaystate={setPlaystate}></About>
       <Title subTitle='Gallery' title='Campus Photos'></Title>
       <Campus></Campus>
       <Title subTitle='TESTIMONIALS' title='What Student Says'></Title>
       <Testimonials></Testimonials>
        <Title subTitle='Contact Us' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
     <VideoPlayer playState={playState} setPlaystate={setPlaystate}></VideoPlayer>
    </>
  )
}

export default App
