import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Projects.css'

// Component for project media (image with optional video on hover)
const ProjectMedia = ({ image, video, title }) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  if (!image && !video) {
    return (
      <div className="project-image-placeholder">
        <p>Project Screenshot</p>
        <p className="placeholder-note">Add in /src/assets/images/</p>
      </div>
    )
  }

  return (
    <div
      className="project-media-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={`project-thumbnail ${isHovered && video ? 'hidden' : ''}`}
        />
      )}
      {video && (
        <video
          ref={videoRef}
          src={video}
          className={`project-video ${isHovered ? 'visible' : ''}`}
          muted
          loop
          playsInline
        />
      )}
    </div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // CUSTOMIZATION POINT: Update this array with your actual projects
  // See CUSTOMIZATION_GUIDE.md for detailed instructions
  // Each project can have an optional 'video' property for hover preview
  const projects = [
    {
      id: 1,
      title: "Nate's Webshop",
      description: "I built this project as my final assignment for my diploma. Using HTML, CSS, JS and PHP I built this webshop from scratch to demonstrate my skills learned over time.",
      technologies: ["HTML", "CSS", "JS", "PHP", "MySql"],
      githubUrl: "https://github.com/NateDaveHill/diplomarbeit-final-project",
      liveUrl: "https://diplomarbeit-final-project-production.up.railway.app/", // Optional
      image: null, // Thumbnail image shown by default
      video: null  // Optional: video plays on hover (e.g., "/videos/project1-preview.mp4")
    },
    {
      id: 2,
      title: "Smart Recipe Finder",
      description: "I built this AI powered tool that enables you to scan you fridge and the app will create smart ideas on what you could cook with the food you already have at home. That way you get to use your food with little waste and safe money from having to order out, again.",
      technologies: ["React Native", "React", "TypeScript", "Expo", "OpenAi"],
      githubUrl: "https://github.com/NateDaveHill/receiptify-expo-app",
      liveUrl: null,
      image: null,
      video: null
    },
    {
      id: 3,
      title: "Emotion Detector",
      description: "This is a fun project that utilizes some of the amazing Python libraries in order to build a script that can recognize human emotion through the camera with facial recognition tools.",
      technologies: ["Python"],
      githubUrl: "https://github.com/NateDaveHill/emotion-detector",
      liveUrl: "https://project3-demo.com",
      image: null,
      video: null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="projects-intro">
            "Commit to the Lord whatever you do, and he will establish your plans." - Proverbs 16:3
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <ProjectMedia
                  image={project.image}
                  video={project.video}
                  title={project.title}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
