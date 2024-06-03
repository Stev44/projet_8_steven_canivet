import './banner.scss'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Banner() {
  const [aboutBanner, setAboutBanner] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutBanner(true)
    } else {
      setAboutBanner(false)
    }
  }, [location.pathname])
  return (
    <section
      className={aboutBanner ? 'banner banner_about' : 'banner banner_home'}
    >
      {!aboutBanner && <span>Chez vous, partout et ailleurs</span>}
    </section>
  )
}

export default Banner
