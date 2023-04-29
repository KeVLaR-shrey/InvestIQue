import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.scss"
import { Image } from 'antd'

export default function Navbar() {
  return (
    <div>
        <div className={styles.navContainer}>
      <div>
        <Link href="/">
          <div className={styles.imgNav}>
            <Image
              src={"/logo.png"}
              alt="arushi"
              width={200}
            />
          </div>
        </Link>
      </div>
      <div className={styles.navMenu}>
        <a href="#projects">Home</a>
        <a href="#work">About</a>
        <a href="#work">Services</a>
      </div>
    </div>
    </div>
  )
}
