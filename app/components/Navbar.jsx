import styles from '../styles/Navbar.module.css'
import Button from './Button'
import Link from 'next/link'
import {LuMenu} from "react-icons/lu";


function Navbar({handleClick}) {

  return (
    // <header className={} style={{top: visible ? '0' : '-120px'}}>
    <header className={styles.header} >
      <nav className='flex justify-between items-center'>
        <div className='flex shrink-0 gap-8 items-center'>
          <Link href="#">
            <img src="/images/logo.png" alt="ASIN5 logo" className={styles.logoImg}/>
          </Link>
          <ul className={styles.links}>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Companies</Link></li>
            <li><Link href="#">Equity Jobs</Link></li>
            <li><Link href="#">Platforms</Link></li>
            <li><Link href="#">Initiatives</Link></li>
            <li><Link href="#">SEEQ</Link></li>
          </ul>
        </div>
        <div className={styles.ctaBtns}>
          <Button text="Apply for SIP 1.0" />
          <Button text="SINC With Us" type="secondary" />
        </div>
        <button className={styles.menuBtn} onClick={handleClick}><LuMenu /></button>
      </nav>
    </header>   
  )
}

export default Navbar               