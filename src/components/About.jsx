import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import profilePhoto from '../assets/images/Nathan Hill.jpg'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="about-intro">
                My name is Nathan David Hill and I'm a passionate developer driven by faith and a discipline for creating meaningful digital experiences.
              </p>

              <p className="about-quote">
                "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
              </p>
              <p className="about-verse">- Jeremiah 29:11</p>

              <p className="about-description">
                Every line of code I write is an opportunity to serve others and pursue a heart of excellence and continuous growth. I believe in building solutions that make a real difference in people's lives, while at the same time also building my skill, mindset and character.
              </p>

              <div className="about-values">
                <h3>Core Values</h3>
                <ul>
                  <li><strong>Excellence:</strong> Pursuing quality in every detail</li>
                  <li><strong>Communication:</strong> Open, honest and transparent</li>
                  <li><strong>Service:</strong> Creating solutions that serve others</li>
                  <li><strong>Growth:</strong> Continuously learning and improving</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="about-image-container"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={profilePhoto} alt="Nathan Hill" className='about-image' />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
