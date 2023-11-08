import React from "react";
import styles from "../styles/Footer.module.css"

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
            <img src="./asin5.svg" alt="" />
            <p>SINC Partners is a SaaS and a Marketing Tech startup studio building platform-based products for solution-providers and entrepreneurs that will help democratize success</p>
          </div>
          <div>
            <p>Platforms</p>
            <ul>
              <li><a href="#">Kofoundme</a></li>
              <li><a href="#">InResidencies</a></li>
              <li><a href="#">Service Market</a></li>
              <li><a href="#">Founder School</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.otherLinks}></div>
      </div>
      <div className={styles.bottom}></div>
    </section>
  );
};
