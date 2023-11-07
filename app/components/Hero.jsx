import styles from '../styles/Hero.module.css'
import Button from './Button';

function Hero() {
  return (
      <section className={styles.main}>
        <div className={styles.heroMain}>
          <div className={styles.text}>
            <p>We are big on these three things;</p>
            <ul className="pb-[24px] pt-[10px]">
              <li><span>✓</span> Service Incubation & Ecosystem Advocacy</li>
              <li><span>✓</span> Building SAAS & Marketing Tech Platforms</li>
              <li><span>✓</span> Institutional Innovations</li>
            </ul>
            <Button text="SINC With Us"/>
          </div>
          <div className={styles.middleTiles}>
            <div>
              <p>SIP 1.0</p>
              <p className={styles.midTileDesc}>2023/2024 Cohort</p>
            </div>
            <div>
              <p>40+</p>
              <p className={styles.midTileDesc}>To Be Incubated</p>
            </div>
            <div>
              <p>$1M+</p>
              <p className={styles.midTileDesc}>To Be Involved</p>
            </div>
          </div>
          <img className={styles.image} src='images/heroimg.png' alt='' />
        </div>
        <div className={styles.quote}>
          <div>
            <p>"Nigeria and Africa has a massive network effect that has not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"</p>
            <div>
              <p>Daniel Izeghs Oratokhai</p>
              <p>MD & CEO of SINC Partners Ltd</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default Hero