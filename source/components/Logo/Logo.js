import React, { useEffect, useRef } from 'react'
import styles from './Logo.css'

function Logo({ teamCode }) {
  const logoRef = useRef(null)

  useEffect(() => {
    logoRef.current.style.backgroundImage = `url(/assets/${teamCode}.png)`
  }, [])
  

  return (
    <div ref={logoRef} className={styles.logo}></div>
  )
}

export default Logo