import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';
import SponsorLogos from '@site/src/components/SponsorLogos.js';
import MediaItem from '@site/src/components/MediaItem';
import PartnerLinks from '@site/src/components/PartnerLinks.js';

import styles from './index.module.css';
import ImpactMarketSection from "@site/src/components/ImpactMarketSection";

function HomepageHeader() {
    const [selectedButton, setSelectedButton] = useState(1);

    const buttonContent = [
        "Projects",
        "Evaluators",
        "Funding platforms",
        "Everyone",
    ];
    return (
        <Layout
            title="hypercerts overview"
            description="Fund and Reward Impact with Hypercerts">
            <div>

                {/* hero banner */}
                <div style={{
                    margin: '0 auto',
                    textAlign: 'center',
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(/img/hypercerts_hero_bg.svg)',
                    backgroundPosition: 'center',
                }}>
                    <h1 class="h1" style={{
                        paddingTop: '50px',
                    }}>
                        Fund and Reward Impact</h1>
                    <img src="/img/hypercert_AI_Safety3.png" alt="Hypercerts"
                         style={{maxWidth: '250px', maxHeight: '100%', marginBottom: '50px'}}/>
                </div>

                <PartnerLinks/>

            </div>

            {/* Main body */}
            <div className="main-body-container">

                {/* longer introduction */}
                <div className="child" style={{marginTop: '70px', maxWidth: '700px'}}>
                    <h1 class="h2" style={{textAlign: 'center'}}>
                        Hypercerts Represent the Impact of Work
                    </h1>
                    <p class="text-centered" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
                        Every hypercert accounts for a discrete piece
                        of work and represents the impact resulting from that
                        work. Projects create hypercerts for their work. Evaluators assess the outputs,
                        outcomes and impact of projects' work. Funders buy hypercert
                        fractions and receive the rights to claim the represented
                        impact.
                    </p>
                </div>
            </div>

            {/* what is a hypercert */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '10px',
                marginTop: '20px',
                maxWidth: '100%',
            }}>
                <div style={{
                    background: 'linear-gradient(to bottom, white, #ececec)',
                    borderRadius: '10px',
                    width: '100%'
                }}>
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/img/what_is_a_hypercert_intro_mobile.png"/>
                        <img src="/img/what_is_a_hypercert_intro.png" alt="Hypercerts"
                             style={{maxWidth: '100%', maxHeight: '100%'}}/>
                    </picture>
                </div>

                <ImpactMarketSection/>


                <div className="main-body-container">
                    <div className="child" style={{
                        marginTop: '70px',
                        width: '100%',
                        padding: '0px 10px',
                    }}>
                        <p class="h2" style={{textAlign: 'center'}}>
                            Articles, Podcasts, and Talks
                        </p>
                        <hr></hr>
                    </div>

                    <div className="responsive-container" style={{
                        alignItems: 'top',
                        justifyContent: 'space-between',
                    }}>
                        <div className="child" style={{padding: '10px'}}>
                            <a href="https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD" target="_blank">
                                <img src="/img/davidad_ftc_talk.png" alt="placeholder"
                                     style={{padding: '5px 0px 0px 0px', borderRadius: '12px'}}/>
                            </a>
                            <p className="greyTag" style={{margin: '0 5px 0 0'}}>Talk 18min</p>
                            <p className="greyTag" style={{margin: '0'}}>Jun 2022 | Funding the Commons NYC</p><br></br>
                            <a href="https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD" target="_blank" class="h3">On-chain
                                Primitives for Impact Markets</a><br></br>
                            <a href="https://twitter.com/davidad" target="_blank" class="author-font">@davidad</a>
                            <hr class="mobile-only"></hr>
                        </div>
                        <div className="child">
                            <MediaItem
                                tags={["Talk 15min", "Aug 2023 | Funding the Commons Paris"]}
                                title="How to Build Modern Impact Funding Systems"
                                titleLink="https://youtu.be/IKWZFB9KRu8?si=mW8ujIj3MeQoFqUu"
                                authors={[
                                    {name: "@holkexyz", link: "https://twitter.com/holkexyz"}
                                ]}
                            />
                            <MediaItem
                                tags={["Talk 13min", "May 2023 | Metascience Conference"]}
                                title="Accelerating Academic Research with Impact Certificates "
                                titleLink="https://www.youtube.com/watch?v=_mLdx48B7zE"
                                authors={[
                                    {name: "@RaymondCheng00", link: "https://twitter.com/RaymondCheng00"}
                                ]}
                            />
                            <MediaItem
                                tags={["Blogpost", "Apr 2023 | Forbes"]}
                                title="Greenpilled: Meet 5 Entrepreneurs Engineering Social Good On The Blockchain"
                                titleLink="https://www.forbes.com/sites/digital-assets/2023/04/25/greenpilled-meet-5-entrepreneurs-engineering-social-good-on-the-blockchain/?sh=4e26c7f2468f"
                                authors={[
                                    {name: "@JocelynnPearl", link: "https://twitter.com/JocelynnPearl"}
                                ]}
                            />
                            <MediaItem
                                tags={["Blogpost", "Apr 2023 | Mirror"]}
                                title="Funding for Impact, Not Intention: A New Era of Creativity and Risk-Taking for Public Goods"
                                titleLink="https://mirror.xyz/hypercerts.eth/kpu2vewrOVCCVNFf78Y1ui0D091XS6-ZgPoEKc0rkp0"
                                authors={[
                                    {name: "@carl_cervone", link: "https://x.com/carl_cervone"}
                                ]}
                            />
                            <MediaItem
                                tags={["Blogpost", "Mar 2023 | Gitcoin"]}
                                title="Hypercerts for Gitcoin Grant Rounds"
                                titleLink="https://go.gitcoin.co/blog/hypercerts-for-public-goods-funding"
                                authors={[
                                    {name: "@gitcoin", link: "https://twitter.com/gitcoin"},
                                    {name: "@hypercerts", link: "https://twitter.com/hypercerts"}
                                ]}
                            />
                            <MediaItem
                                tags={["Announcement", "Feb 2023"]}
                                title="Introducing the Hypercerts Foundation"
                                titleLink="https://hypercerts.notion.site/Introducing-the-Hypercerts-Foundation-d956203fe0fc4792980da138015e770a"
                                authors={[
                                    {name: "@hypercerts", link: "https://twitter.com/hypercerts"}
                                ]}
                            />
                            <MediaItem
                                tags={["Talk 31min", "Oct 2022 | Devcon Bogotá"]}
                                title="Hypercerts for Regenerative Cryptoeconomics"
                                titleLink="https://youtu.be/YpIQoq_bfu8"
                                authors={[
                                    {name: "@emiyazono", link: "http://twitter.com/emiyazono"}
                                ]}
                            />
                            <MediaItem
                                tags={["Blogpost", "Aug 2022 | Protocol Labs"]}
                                title="A New Primitive for Public Goods Funding"
                                titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
                                authors={[
                                    {name: "@holkexyz", link: "https://twitter.com/holkexyz"}
                                ]}
                            />
                            <MediaItem
                                tags={["Podcast 55min", "Jun 2022 | Green Pill"]}
                                title="Impact Certificates"
                                titleLink="https://youtu.be/kyo5SxtSJ9U?si=-eDvLbalnWFyoJrW"
                                authors={[
                                    {name: "@emiyazono", link: "http://twitter.com/emiyazono"},
                                    {name: "@owocki", link: "http://twitter.com/owocki"}
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* partner logos */}
            <div className="child" style={{marginTop: '50px'}}>
                <SponsorLogos/>
            </div>
        </Layout>
    );
}

export default HomepageHeader;
