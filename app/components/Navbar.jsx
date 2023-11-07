import styles from '../styles/Navbar.module.css'
import Button from './Button'
import Link from 'next/link'


function Navbar() {

  return (
    // <header className={} style={{top: visible ? '0' : '-120px'}}>
    <header className="px-[120px] py-[20px]" >
      <nav className='flex justify-between items-center'>
        <div className='flex gap-6 items-center'>
          <Link href="#">
            <img src="/images/logo.png" alt="ASIN5 logo" className='w-[151px] h-[58px]'/>
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
        <div className='flex gap-4'>
          <Button text="Apply for SIP 1.0" />
          <Button text="SINC With Us" type="secondary" />
        </div>
      </nav>
    </header>   
  )
}

export default Navbar               