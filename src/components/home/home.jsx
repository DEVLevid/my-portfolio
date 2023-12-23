import React from 'react'
import "./home.css"
import Social from './social'
import Data from './data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="homr_container container grid">
            <div className="home_content grid">
                <Social/>
                <div className="home_img"></div>
                <Data />
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home
