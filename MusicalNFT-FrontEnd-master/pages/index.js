import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import HeroPage from '../components/heropage'
import Vision from '../components/vision'
import Card from '../components/card'
import Roadmap from '../components/raodmap'
import Connection from '../components/connection'
import Footer from '../components/footer'
import About from '../components/about'
import Team from '../components/ourteam'
import WorkingArea from '../components/workingarea'
import WhyToChoose from '../components/whytochoose'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      {/* <Vision /> */}
      <Card />
      {/* <WhyToChoose/>
      <WorkingArea />
      <Roadmap />
      <About />
      <Team />
      <Connection /> */}
      {/* <Footer/> */}
    </div>
  )
}
