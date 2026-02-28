import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-quote">
            <p>"I can do all things through Christ who strengthens me"</p>
            <p className="footer-verse">- Philippians 4:13</p>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Built with faith and purpose</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
