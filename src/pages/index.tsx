import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import PresentationSection from '../components/HomePage/Presentation'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <PresentationSection
        key={"Presentation"}
        heading={"Hi, I'm a front-end application developer"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
      />
    </div>
  )
}

export default Home
