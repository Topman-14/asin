import React from 'react'
import styles from '../styles/Button.module.css'
// import Link from 'next/link'

export default function Button({text, type, link}) {
  return (
    <a className={styles.btn} href={link? link : "#"} style={type == "secondary"? {background:"#20888F"} : type == "tertiary"? {border: "0.5px solid #212121", background: "#FFF", color: "#212121"} : {}}>{text}</a>
  )
}
