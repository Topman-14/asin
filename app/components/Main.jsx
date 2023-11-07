import React from 'react'
import Button from './Button'
import Tile from './Tile'
import Card from './Card'
import { BsArrowRightShort } from "react-icons/bs"
import styles from "../styles/Main.module.css"

export default function Main() {
  return (
    <section className={styles.main}>
        <h3>Building the future together, <br /> democratizing success</h3>
        <p>SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
        We are a Gasus Business, a business built on the foundation of Christian values and belief.</p>
        <Button text={"Read About Us"}/>
        <h3>Our 5 Areas of Focus</h3>
        <p>In our quest to help make success available to everyone, we have initial strategic <br />directions to focus on these five (5) key areas at the lab</p>
        <div className='flex justify-center flex-wrap mt-6 mb-16'>
            <Tile color={"#1F66AB"} title={"01"} text={"Business Support & Incubation"} />
            <Tile color={"#F47733"} title={"02"} text={"On-Demand & As-A-Service"} />
            <Tile color={"#FF78BF"} title={"03"} text={"Marketplace & Crowdsourcing"} />
            <Tile color={"#20888F"} title={"04"} text={"Aggregation & Shared Economy"} />
            <Tile color={"#FF88C6"} title={"05"} text={"Decentralized Economy & Digital Assets"} />
        </div>
        <h3>We are your 3rd Co-founder</h3>
        <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</p>
        <div className='flex justify-center gap-[40px] mb-[80px]'>
            <Card number={"1"} title={"Ideate"} color={"#1F66AB"}>
                <p>
                We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market
                </p>
            </Card>
            <Card number={"2"} title={"Validate"} color={"#F47733"}>
                <p>
                We launch successfully built micro MVP product within the target market, and through a process of ongoing iterations driven by market feedback, we find the validated product that we finally adopt to drive further
                </p>
            </Card>
            <Card number={"3"} title={"Co-found"} color={"#FF78BF"}>
                <p>
                After validation, we find people who have domain expertise from running similar business successfully or failing in one, to come in as a business cofounder, sitting as the CEO and as a technical cofounder, sitting as a CTO, while we seat as the 3rd co-founder.
                </p>
            </Card>
        </div>
        <h3>Our Service Incubation Model</h3>
        <p>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 - 24 months as been first to invest.</p>
        <div className={styles.hypothesis}>
            <h4>Hypothesis</h4>
            <p>Just a few reasons we know its time for this model within the ecosystem</p>
            <div>
                <Card shape={"triangle"} color={"#FF78BF"}>
                    <p>
                    Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support
                    </p>
                </Card>
                <Card shape={"diamond"} color={"#20888F"}>
                    <p>
                    If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
                    </p>
                </Card>
                <Card shape={"pentagon"} color={"#FF88C6"}>
                    <p>
                    Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return
                    </p>
                </Card>
            </div>
            <h4 className='mt-[44px]'>Case Study</h4>
            <p>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
            <div className={styles.hypoLinks}>
                <Button text={"Service Incubator Equity"}/>
                <Button text={"Seeq Maths Equation"} type={"tertiary"}/>
                <a className="px-[28px] underline" href="#">Value of my Equity Over Time</a>
            </div>
            <a href="#" className='flex underline text-sm items-center font-bold justify-center my-[44px]'><p>Become A Service Incubator</p> <BsArrowRightShort /></a>
        </div>
        <h3>Our Startup Portfolio</h3>
        <p>Some of our 2023 Service Incubator Portfolio Companies</p>
        <div>
            {/* grid here */}
        </div>


    </section>
  )
}
