import React from "react";
import styles from "../styles/Footer.module.css"
import { FaRegCopyright } from "react-icons/fa";

export default function Footer(){
  return (
    <section className={styles.footer}>
      <div className={styles.newsletter}>
        <h3 className="text-6xl" >Newsletter</h3>
        <p className={styles.newsletterDesc}>Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
        <form className={styles.newsletterForm}>
          <input className={styles.emailInput} type="text" placeholder="Enter your email address"/>
          <button>Suscribe</button>
        </form>
      </div>
      <div className={styles.links}>
        <div className={styles.mainLinks}>
          <div>
            <img src="./asin5.svg" alt="" className="mb-[15px]"/>
            <p>SINC Partners is a SaaS and a Marketing Tech startup studio building platform-based products for solution-providers and entrepreneurs that will help democratize success</p>
          </div>
          <div>
            <p className={'font-bold mb-[15px] text-lg'}>Platforms</p>
            <ul>
              <li><a href="#">Kofoundme</a></li>
              <li><a href="#">InResidencies</a></li>
              <li><a href="#">Service Market</a></li>
              <li><a href="#">Founder School</a></li>
              <li><a href="#">Metty</a></li>
              <li><a href="#">Grantty</a></li>
              <li><a href="#">SBO</a></li>
            </ul>
          </div>
          <div>
            <p className={'font-bold mb-[15px] text-lg'}>Initiatives</p>
            <ul>
              <li><a href="#">Jabi Plains</a></li>
              <li><a href="#">Regional Pricing Initiative</a></li>
              <li><a href="#">Scholarship Program</a></li>
              <li><a href="#">School Pricing Program</a></li>
              <li><a href="#">University STEM</a></li>
              <li><a href="#">University InResidency</a></li>
              <li><a href="#">Founders Festival</a></li>
            </ul>
          </div>
          <div>
          <p className={'font-bold mb-[15px] text-lg'}>About Us</p>
            <ul>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Our People</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blog & Resources</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
          <p className={'font-bold mb-[15px] text-lg'}>Others</p>
            <ul>
              <li><a href="#">Companies</a></li>
              <li><a href="#">SIP</a></li>
              <li><a href="#">SEEQ</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Equity Jobs</a></li>
              <li><a href="#">Innovation News</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.otherLinks}>
          <div>
            <p>Locations</p>
            <p>Abuja, Nigeria <br />
              Lagos, Nigeria <br />
              Philadelphia, USA</p><br />
          </div>
          <div>
            <div>
              <img src="/images/accredited.png" alt="" />
              <p>Trusted business</p>
            </div>
            <div>
              <img src="/images/whatsapp-green.png" alt=""/>
              <p>Chat with Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <p>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
          <div>
            <p className="flex gap-3"><FaRegCopyright /><span>2023 SINC Partners Ltd. All rights reserved</span></p>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/icons/gaus-svg.png" alt="" />
            <p>We are a business built on the foundation of Christian values and belief</p>
          </div>
          <div>
            <a href="#"><img src="/images/icons/facebook-icon.png" alt="" /></a>
            <a href="#"><img src="/images/icons/twitter-icon.png" alt="" /></a>
            <a href="#"><img src="/images/icons/ig-icon.png" alt="" /></a>
            <a href="#"><img src="/images/icons/ln-icon.png" alt="" /></a>
            <a href="#"><img src="/images/icons/medium-icon.png" alt="" /></a>
            <a href="#"><img src="/images/icons/yt-icon.png" alt="" /></a>
            <a href="#"><img src="/images/icons/chat-icon.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
