import React from 'react'
import styles from '../styles/MobileNav.module.css'
import { BiArrowBack } from "react-icons/bi";
import Button from './Button';
import Link from 'next/link';

export default function MobileNav({handleClick}) {
  return (
    <div className={styles.wrapper}>
        <div className='w-full flex justify-end text-4xl'>
            <button onClick={handleClick}>
                <BiArrowBack />
            </button>
        </div>
            <img src="/images/logo.png" alt="" className='w-[220px] '/>
        <div>
            <ul className='flex flex-col gap-5 items-center text-3xl'>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Companies</Link></li>
                <li><Link href="#">Equity Jobs</Link></li>
                <li><Link href="#">Platforms</Link></li>
                <li><Link href="#">Initiatives</Link></li>
                <li><Link href="#">SEEQ</Link></li>
            </ul>
        </div>
        <div className='flex gap-4 pb-12 flex-col items-center'>
            <Button text="Apply for SIP 1.0" />
            <Button text="SINC With Us" type="secondary" />
        </div>
    </div>
  )
}
