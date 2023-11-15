import React from 'react'
import Button from './Button'
import Tile from './Tile'
import Card from './Card'
import { BsArrowBarLeft, BsArrowBarRight, BsArrowLeft, BsArrowRight, BsArrowRightShort } from "react-icons/bs"
import styles from "../styles/Main.module.css"
import{ companies } from "../data.js"

export default function Main() {
  return (
    <section className={styles.main}>
        <h3>Building the future together, <br /> democratizing success</h3>
        <p>SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
        We are a Gasus Business, a business built on the foundation of Christian values and belief.</p>
        <Button text={"Read About Us"}/>
        <h3>Our 5 Areas of Focus</h3>
        <p>In our quest to help make success available to everyone, we have initial strategic <br />directions to focus on these five (5) key areas at the lab</p>
        <div className='flex justify-center overflow-x-scroll mt-6 mb-16 mx-5'>
            <Tile color={"#1F66AB"} title={"01"} text={"Business Support & Incubation"} />
            <Tile color={"#F47733"} title={"02"} text={"On-Demand & As-A-Service"} />
            <Tile color={"#FF78BF"} title={"03"} text={"Marketplace & Crowdsourcing"} />
            <Tile color={"#20888F"} title={"04"} text={"Aggregation & Shared Economy"} />
            <Tile color={"#FF88C6"} title={"05"} text={"Decentralized Economy & Digital Assets"} />
        </div>
        <h3>We are your 3rd Co-founder</h3>
        <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</p>
        <div className='flex overflow-x-scroll justify-center gap-[40px] mb-[80px]'>
            <Card number={"1"} title={"Ideate"} color={"#1F66AB"}>
                <p>
                We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market
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
            <a href="#" className='flex underline text-sm items-center font-bold justify-center mt-[64px] mb-[44px]'><p>Become A Service Incubator</p> <BsArrowRightShort /></a>
        </div>
        <h3>Our Startup Portfolio</h3>
        <p>Some of our 2023 Service Incubator Portfolio Companies</p>
        <div className={styles.companies}>
            {companies.map(item => (<div key={item} color='bleck'> <img src={`/images/logos/${item}`} alt="" /></div>))}
        </div>
        <a href="#" className='flex underline text-sm items-center font-bold justify-center my-[54px]'><p>View company details</p> <BsArrowRightShort /></a>

        <h3>Our Concept Innovations</h3>
        <p>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
        <div className={styles.concept}>
            <Card title={"Service Incubator"}>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP</Card>
            <Card title={"Virtualising"}>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</Card>
            <Card title={"Diming"}>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice</Card>
        </div>
        <h3>Our Process</h3>
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>

                <Card title={"Source Ideas & Ideate"} color={"#4E4E4E"} number={0}>We come up with our own ideas internally and/or take in exceptional entrepreneurs with ideas within or outside our thesis area into our Service incubation Program (SIP) yearly, then run them through our idea-focus-test (IFT) for fit.
                We quickly build a 5-10 functionality nano MVP or a lead page built for idea visualization</Card>

                <Card title={"Set Up A Team"} color={"#4E4E4E"} number={0}>We take in technical and business cofounders into the portfolio company offering 25% each and a total of 50% stake in the company while we keep 50% as the other cofounder.
                We then put together 6-10 people on-demand remote team (who are service incubators) to help build, launch and validate the MVP with 250 functionalities, worth $25k for a 10% stake.</Card>

                <Card title={"Fast Experiment"} color={"#4E4E4E"} number={0}>We quickly test the selected ideas by taking them through our 4 Weeks Founder School Sprint and extending the product to a Micro-MVP (mMVP) which may be between 10-30 functionality app to test the idea for market acceptance. 
                After the 4 weeks test, we drop the ones that don’t work or timing is not right, then we continue MVP development for those that we think has a future</Card>

                <Card title={"Build, Launch, Validate & Grow"} color={"#4E4E4E"} number={0}>For the ideas that are ready to market after the 4 weeks of market acceptance test, the Service Incubators will proceed to build the complete MVP for an exchange of 10% equity in the startup usually having as much as 250 functionalities for another 12 weeks in return for the service shares.
                This MVP will be validated in a large and broader market for final iteration before raising funds for further development</Card>
            </div>
        </div>
        <div className={styles.sliderControls}>
            <div><BsArrowLeft /> </div>
            <div><BsArrowRight /></div>
        </div>
        <h3>What We Bring</h3>
        <p>We empower visioners to build the future with us and we provide</p>
        <div className={styles.wwbSection}>
            <Tile color={"#1F66AB"} title={"01"} text={"Validated Business Opportunity"} />
            <Tile color={"#F47733"} title={"02"} text={"Experience & Expertise"} />
            <Tile color={"#FF78BF"} title={"03"} text={"Financial Support"} />
            <Tile color={"#20888F"} title={"04"} text={"Extensive Network & Experience"} />
            <Tile color={"#FF88C6"} title={"05"} text={"Technical Resources & Strategic Guidiance"}/>
        </div>
        <h4 className='text-4xl mb-4'>We support across these areas of departments</h4>
        <p className={styles.noMarginP}>We are an experienced team of founders and operators that have started dozens of companies, and created billions of dollars in enterprise value</p>
        <div className={styles.departments}>
            <div>
                <img src="/images/icons/search-normal.svg" alt="" />
                <p>Product</p>
            </div>
            <div>
                <img src="/images/icons/mouse-circle.svg" alt="" />
                <p>Design</p>
            </div>
            <div>
                <img src="/images/icons/code-circle.svg" alt="" />
                <p>Engineering</p>
            </div>
            <div>
                <img src="/images/icons/ei_comment.svg" alt="" />
                <p>HR</p>
            </div>
            <div>
                <img src="/images/icons/Vector.svg" alt="" />
                <p>Finance</p>
            </div>
            <div>
                <img src="/images/icons/megaphone.svg" alt="" />
                <p>Marketing</p>
            </div>
            <div>
                <img src="/images/icons/shield.svg" alt="" />
                <p>Legal</p>
            </div>
            <div>
                <img src="/images/icons/Group.svg" alt="" />
                <p>Operations</p>
            </div>
        </div>
        <div className='flex gap-6 px-6 my-[60px]'>
            <div className={styles.testsText}>
                <h3 className='pb-[24px] text-5xl'>Our 5 Idea-Focused-Tests</h3>
                <p className='pb-[60px] max-w-[450px]'>Our quick 5 critical questions we usually answer to test an idea for investments and if it passes our value and vision test.</p>
                <Button text={"Apply to SIP 1.0"}/>
            </div>
            <div className={styles.testsGrid}>
                <div>
                    <div>
                        <div className={styles.testNum}><span>01</span><hr /></div>
                        <p>Will the solution help democratize success for everyone?</p>
                    </div>
                    <div>
                        <div className={styles.testNum}><span>02</span><hr /></div>
                        <p>Is the product solving a problem for service providers and entrepreneurs?</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.testNum}><span>03</span><hr /></div>
                        <p>Is the solution a good to have or a must have?</p>
                    </div>
                    <div>
                        <div className={styles.testNum}><span>04</span><hr /></div>
                        <p>Is the product a platform-based product?</p>
                    </div>
                </div>
                        <div className={styles.testNum}><span>05</span><hr /></div>
                    <p>Is the timing right or are we willing to stick with it till its accepted as been self-evident?</p>
            </div>
        </div>
        <h3>What Matters Most</h3>
        <p className={styles.pMaxWidth}>For every startup in our portfolio and as part of our success strategies, we have key 5 areas of importance in order of preference. </p>
        <div className={styles.mattersCardWrapper}>
            <div>
                <p>Timing</p>
                <img src="/images/timing.png" alt="" />
            </div>
            <div>
                <p>Team Execution</p>
                <img src="/images/team.png" alt="" />
            </div>
            <div>
                <p>The Idea / Product</p>
                <img src="/images/idea.png" alt="" />
            </div>
            <div>
                <p>Busines Model and Traction</p>
                <img src="/images/model.png" alt="" />
            </div>
            <div>
                <p>Technology and Funding</p>
                <img src="/images/technfund.png" alt="" />
            </div>
        </div>
        <h3>SINC Deals</h3>
        <p>Our deals are structured to encourage early and people new to investment and our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x. 
        These deal flow is a statement of our projection and may differ from stage to stage and from company to company</p>
        <div className={styles.dealsGrid}>
            <div>
                <h4>Deal 1</h4>
                <ul>
                    <li>Idea Stage: <span>$2.5k for 5% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $0/mth</span></li>
                    <li>Duration of Raise: <span>1mth</span></li>
                </ul>
            </div>
            <div>
                <h4>Deal 2</h4>
                <ul>
                    <li>Build Stage: <span>$25k for 10% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $100+/mth</span></li>
                    <li>Duration of Raise: <span>1-3mths</span></li>
                </ul>
            </div>
            <div>
                <h4>Deal 3</h4>
                <ul>
                    <li>Validate Stage: <span>$50k for 5% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $1k+/mth</span></li>
                    <li>Duration of Raise: <span>3-6mths</span></li>
                </ul>
            </div>
            <div style={{borderRight:"none"}}>
                <h4>Deal 4</h4>
                <ul>
                    <li>Acceleration Stage: <span>$125k for 5% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $5k+/mth</span></li>
                    <li>Duration of Raise: <span>6-12mths</span></li>
                </ul>
            </div>
            <div>
                <h4>Deal 5</h4>
                <ul>
                    <li>Pre-seed Stage: <span>$1.5M for 10% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $50k+/mth</span></li>
                    <li>Duration of Raise: <span>6-18mths</span></li>
                </ul>
            </div>
            <div>
                <h4>Deal 6</h4>
                <ul>
                    <li>Seed Stage: <span>$7.5M for 20% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $250k+/mth</span></li>
                    <li>Duration of Raise: <span>12-24mths</span></li>
                </ul>
            </div>
            <div>
                <h4>Deal 7</h4>
                <ul>
                    <li>IPO Stage: <span>$1.5B for 20% Equity</span></li>
                    <li>Expected Revenue at This Stage: <span> $1M+/mth</span></li>
                    <li>Duration of Raise: <span>18-36mths</span></li>
                </ul>
            </div>
            <div style={{borderRight:"none"}}>
                <h3>Invest from $500 as a Mikro Angel in portfolio companies</h3>
                <Button text={"SINC With a Deal"}/>
            </div>
        </div>
        <h3>Blogs & Resources</h3>
        <div className={styles.resources}>
            <div>
                <iframe  src="https://www.youtube.com/embed/wDchsz8nmbo?si=Qgx-VkVPsP-U38hb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div>
                    <div>
                        <p>Top Ten Most Powerful Startup</p>
                        <p>Top Ten Most Powerful Startup Top Ten Most Powerful Startup Top Ten Most Powerful Startup</p>
                    </div>
                    <img src="/images/frame1.png" alt="" />
                </div>
            </div>
            <div>
                <iframe  src="https://www.youtube.com/embed/wDchsz8nmbo?si=Qgx-VkVPsP-U38hb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div>
                    <div>
                        <p>Top Ten Most Powerful Startup</p>
                        <p>Top Ten Most Powerful Startup Top Ten Most Powerful Startup Top Ten Most Powerful Startup</p>
                    </div>
                    <img src="/images/frame2.png" alt="" />
                </div>
            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/wDchsz8nmbo?si=Qgx-VkVPsP-U38hb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div>
                    <div>
                        <p>Top Ten Most Powerful Startup</p>
                        <p>Top Ten Most Powerful Startup Top Ten Most Powerful Startup Top Ten Most Powerful Startup</p>
                    </div>
                    <img src="/images/frame3.png" alt="" />
                </div>
            </div>
        </div>
        <h4 className="pt-[100px] text-xl font-semibold">As Featured In</h4>
        <div className={styles.featured}>
            <div>
                <img src="/images/punchnews-img.jpg" alt="" />
                <div>
                    <img src="/images/punchnews.png" alt="" />
                    <p>SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p>SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups...</p>
                    <p>REPORTED BY: <br /> Rema Viel</p>
                </div>
            </div>
            <div>
                <img src="/images/bujnewsimg.png" alt="" />
                <div>
                    <img src="/images/bujnews.png" alt="" />
                    <p>SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p>SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups...</p>
                    <p>REPORTED BY: <br /> Rema Viel</p>
                </div>
            </div>
            <div>
                <img src="/images/ontexnewsimg.jpg" alt="" />
                <div>
                    <img src="/images/ontexnews.png" alt="" />
                    <p>SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p>SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups...</p>
                    <p>REPORTED BY: <br /> Rema Viel</p>
                </div>
            </div>
            <div>
                <img src="/images/guardiannewsimg.jpg" alt="" />
                <div>
                    <img src="/images/guardiannews.png" alt="" />
                    <p>SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p>SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in 5 startups...</p>
                    <p>REPORTED BY: <br /> Rema Viel</p>
                </div>
            </div>
        </div>
        <h2 className={styles.h2}>Let's build companies that help everyone succeed</h2>
        <div className='flex justify-center gap-[10px] mt-[40px] mb-[100px]'>
            <Button text={"SINC With Us"} type={"tertiary"}/>
            <Button text={"Apply to SIP 1.0"}/>
        </div>
    </section>
  )
}
