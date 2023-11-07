import React from 'react'
import styles from '../styles/Button.module.css'
// import Link from 'next/link'

export default function Button({text, type, link}) {
  return (
    <a className={styles.btn} href={link? link : "#"} style={type == "secondary"? {background:"#20888F"} : {}}>{text}</a>
  )
}
