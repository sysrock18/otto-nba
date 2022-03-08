import React, { useEffect, useRef } from 'react'
import utils from '../../utils'
import styles from './Logo.css'

function Logo({ teamCode }) {
  const logoRef = useRef(null)

  useEffect(() => {
    setLogo()
  }, [])
  
  const setLogo = () => {
    let logoUrl = `/assets/${teamCode}.png`
    const fallbackLogoUrl = '/assets/basketball-logo.png'
    logoUrl = utils.imageExists(logoUrl) ? logoUrl : fallbackLogoUrl

    logoRef.current.style.backgroundImage = `url(${logoUrl})`
  }

  return (
    <div ref={logoRef} className={styles.logo}></div>
  )
}

export default Logo