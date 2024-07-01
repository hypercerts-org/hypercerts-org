import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';
import SponsorLogos from '@site/src/components/SponsorLogos.js';
import MediaItem from '@site/src/components/MediaItem';

import styles from './index.module.css';

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
          <h1 class="hero-font" style={{
          paddingTop: '50px',
          }}>
            Fund and Reward Impact</h1>
          <img src="/img/hypercert_AI_Safety3.png" alt="Hypercerts" style={{ maxWidth: '250px', maxHeight: '100%', marginBottom: '50px' }} />
        </div>

        {/* partner logos 
        <div className="child" style={{marginTop: '0px'}}>
          <SponsorLogos />
        </div>
        */}
<div id="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '0px'}}>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0px', padding: '0px', justifyContent: 'center', alignItems: 'center' }}>
    <a href="https://www.protocol.ai" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/protocollabs_logo.png" alt="Protocol Labs logo" className="button-img" />
    </a>
    <a href="https://www.optimism.io/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/optimism_logo.png" alt="Optimism logo" className="button-img" />
    </a>
    <a href="https://octant.build/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/octant_logo.png" alt="Octant logo" className="button-img" />
    </a>
    <a href="https://www.gitcoin.co/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/gitcoin_logo.png" alt="Gitcoin logo" className="button-img" style={{ width: '70%' }} />
    </a>
    <a href="https://fundingthecommons.io/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/fundingthecommons_logo.png" alt="Funding the Commons logo" className="button-img" style={{ height: '70%' }} />
    </a>
    <a href="https://www.opensource.observer/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/opensourceobserver_logo.png" alt="Open Source Observer logo" className="button-img" />
    </a>
    <a href="https://www.raidguild.org/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/raidguild_logo.webp" alt="RaidGuild logo" className="button-img" style={{ height: '60%' }} />
    </a>
    <a href="https://www.zuzalu.city/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/zuzalu_logo.png" alt="Zuzalu logo" className="button-img" />
    </a>
    <a href="https://www.edgecity.live/" className="button" target="_blank" rel="noopener noreferrer">
      <img src="/img/edgecity_logo.png" alt="EdgeCity logo" className="button-img" />
    </a>
  </div>
</div>

      </div>

      {/* Main body */}
      <div className="main-body-container">

        {/* longer introduction */}  
        <div className="child" style={{marginTop: '70px', maxWidth: '700px'}}>
          <h1 class="title-font" style={{textAlign: 'center'}}>
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
          <source media="(max-width: 768px)" srcSet="/img/what_is_a_hypercert_intro_mobile.png" />
          <img src="/img/what_is_a_hypercert_intro.png" alt="Hypercerts" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </picture>
    </div>
        {/* who is hypercerts for */}  
        <div className="child" style={{
        marginTop: '70px',
        }}>
          <p class="text-centered" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
            Build to power
          </p>
          <h1 class="hero-font">
            Impact Markets
          </h1>
        </div>
        {/* Buttons Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center', 
        marginTop: '20px',
      }}>
        {[1, 2, 3, 4].map((buttonNumber) => (
          <button
            key={buttonNumber}
            onClick={() => setSelectedButton(buttonNumber)}
            style={{
              margin: '0 0px', // Add some space around the buttons
              padding: '10px 20px', // Add padding to make buttons bigger
              backgroundColor: selectedButton === buttonNumber ? '#000000' : '#ffffff',
              color: selectedButton === buttonNumber ? '#ffffff' : '#000000',
              border: '1px solid #000000', // Add a border
              borderRadius: '8px', // Add rounded corners
              outline: 'none', // Remove outline when focused
              cursor: 'pointer', // Change cursor on hover
            }}
          >
            {buttonNumber === 1 && 'Projects'}
            {buttonNumber === 2 && 'Funders'}
            {buttonNumber === 3 && 'Evaluators'}
            {buttonNumber === 4 && 'Funding Platforms'}
          </button>
        ))}
      </div>

      {/* Content Area button 1*/}
      {selectedButton == 1 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Sell the impact you created
            </h2>
            <p class="text-font">
              Create hypercerts that represents the 
              impact your project had. Let credible 
              evaluators confirm the impact. Sell 
              the right to claim this impact to funders
              and become financially sustainable by 
              continuously selling your impact.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="https://form.feathery.io/to/kV8E0l" className="primaryButton" target="_blank">Sell your impact now</a>
              <a href="#internal-link" className="greyButton">Learn more</a>
            </div>
            </div>
            <div>
            <img src="/img/hypercerts_for_projects.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
            </div>
          </div>
        </div>
      )}
      {/* Content Area button 2*/}
      {selectedButton == 2 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Buy the impact you care about risk-free
            </h2>
            <p class="text-font">
              Find projects' hypercerts and access their impact 
              evaluations. Reward them for their past 
              impact. Receive the right to claim the 
              impact and build up your impact portfolio 
              to prove your support of collective goods.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">Explore hypercerts</a>
              <a href="https://form.feathery.io/to/kV8E0l" className="greyButton" target="_blank">Contact us</a>
            </div>
            </div>
            <div>
            <img src="/img/hypercerts_for_funders.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
            </div>
          </div>
        </div>
      )}
      {/* Content Area button 3*/}
      {selectedButton == 3 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Get paid for high-quality impact evaluations
            </h2>
            <p class="text-font">
              Evaluate the work of projects with data
              and your expertise. Improve your evaluation methodology 
              over time. Help funders allocate their funds and get rewarded
              for evaluations that significantly impacted funders' decisions.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="https://form.feathery.io/to/kV8E0l" className="primaryButton" target="_blank">Become an official evaluator</a>
            </div>
            </div>
            <div>
            <img src="/img/hypercerts_for_evaluators.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
            </div>
          </div>
        </div>
      )}
      {/* Content Area button 4*/}
      {selectedButton == 4 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Become part of the funding network
            </h2>
            <p class="text-font">
              Integrate hypercerts into your funding platform,
              no matter if you distribute grants, organize
              crowdfunding or run prize competitions. Access 
              projects' previous hypercerts and their evaluations.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="https://form.feathery.io/to/kV8E0l" className="primaryButton" target="_blank">Integrate hypercerts now</a>
              <a href="#internal-link" className="greyButton">Learn more</a>
            </div>
            </div>
            <div>
            <img src="/img/hypercerts_for_funding_platforms.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
            </div>
          </div>
        </div>
      )}

    <div className="main-body-container">
      <div className="child" style={{
        marginTop: '70px',
        width: '100%',
        padding: '0px 10px',
        }}>
          <p class="title-font" style={{textAlign: 'center'}}>
            Articles, Podcasts, and Talks
          </p>
          <hr></hr>
        </div>

        <div className="responsive-container" style={{
          alignItems: 'top',
          justifyContent: 'space-between',
        }}>
        <div className="child" style={{padding:'10px'}}>
          <a href="https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD" target="_blank">
            <img src="/img/davidad_ftc_talk.png" alt="placeholder" style={{padding:'5px 0px 0px 0px', borderRadius:'12px'}} />
          </a> 
          <p className="greyTag" style={{ margin: '0 5px 0 0' }}>Talk 18min</p>
          <p className="greyTag" style={{ margin: '0' }}>Jun 2022 | Funding the Commons NYC</p><br></br>
          <a href="https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD"  target="_blank" class="title-font-sm">On-chain Primitives for Impact Markets</a><br></br>
          <a href="https://twitter.com/davidad"  target="_blank" class="author-font">@davidad</a>
          <hr class="mobile-only"></hr>
        </div>
        <div className="child">
  <MediaItem
    tags={["Talk 15min", "Aug 2023 | Funding the Commons Paris"]}
    title="How to Build Modern Impact Funding Systems"
    titleLink="https://youtu.be/IKWZFB9KRu8?si=mW8ujIj3MeQoFqUu"
    authors={[
      { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
    ]}
  />
  <MediaItem
    tags={["Talk 13min", "May 2023 | Metascience Conference"]}
    title="Accelerating Academic Research with Impact Certificates "
    titleLink="https://www.youtube.com/watch?v=_mLdx48B7zE"
    authors={[
      { name: "@RaymondCheng00", link: "https://twitter.com/RaymondCheng00" }
    ]}
  />
  <MediaItem
    tags={["Blogpost", "Apr 2023 | Forbes"]}
    title="Greenpilled: Meet 5 Entrepreneurs Engineering Social Good On The Blockchain"
    titleLink="https://www.forbes.com/sites/digital-assets/2023/04/25/greenpilled-meet-5-entrepreneurs-engineering-social-good-on-the-blockchain/?sh=4e26c7f2468f"
    authors={[
      { name: "@JocelynnPearl", link: "https://twitter.com/JocelynnPearl" }
    ]}
  />
  <MediaItem
    tags={["Blogpost", "Apr 2023 | Mirror"]}
    title="Funding for Impact, Not Intention: A New Era of Creativity and Risk-Taking for Public Goods"
    titleLink="https://mirror.xyz/hypercerts.eth/kpu2vewrOVCCVNFf78Y1ui0D091XS6-ZgPoEKc0rkp0"
    authors={[
      { name: "@carl_cervone", link: "https://x.com/carl_cervone" }
    ]}
  />
  <MediaItem
    tags={["Blogpost", "Mar 2023 | Gitcoin"]}
    title="Hypercerts for Gitcoin Grant Rounds"
    titleLink="https://go.gitcoin.co/blog/hypercerts-for-public-goods-funding"
    authors={[
      { name: "@gitcoin", link: "https://twitter.com/gitcoin" },
      { name: "@hypercerts", link: "https://twitter.com/hypercerts" }
    ]}
  />
  <MediaItem
    tags={["Announcement", "Feb 2023"]}
    title="Introducing the Hypercerts Foundation"
    titleLink="https://hypercerts.notion.site/Introducing-the-Hypercerts-Foundation-d956203fe0fc4792980da138015e770a"
    authors={[
      { name: "@hypercerts", link: "https://twitter.com/hypercerts" }
    ]}
  />
  <MediaItem
    tags={["Talk 31min", "Oct 2022 | Devcon Bogotá"]}
    title="Hypercerts for Regenerative Cryptoeconomics"
    titleLink="https://youtu.be/YpIQoq_bfu8"
    authors={[
      { name: "@emiyazono", link: "http://twitter.com/emiyazono" }
    ]}
  />
  <MediaItem
    tags={["Blogpost", "Aug 2022 | Protocol Labs"]}
    title="A New Primitive for Public Goods Funding"
    titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
    authors={[
      { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
    ]}
  />
  <MediaItem
    tags={["Podcast 55min", "Jun 2022 | Green Pill"]}
    title="Impact Certificates"
    titleLink="https://youtu.be/kyo5SxtSJ9U?si=-eDvLbalnWFyoJrW"
    authors={[
      { name: "@emiyazono", link: "http://twitter.com/emiyazono" },
      { name: "@owocki", link: "http://twitter.com/owocki" }
    ]}
  />
</div>
        </div>
        </div>

{/*
        <div className="transparentContainer" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          width: '100%',
        }}>
        <div style={{maxWidth: '600px'}}>
          <h1 className="title-font" style={{textAlign: 'center'}}>
           Hypercerts transform siloed funding platforms into interconnected funding networks
          </h1>
          </div>
        </div>
*/}
      </div>
        {/* partner logos */}
        <div className="child" style={{marginTop: '50px'}}>
          <SponsorLogos />
        </div>
    </Layout>
  );
}

export default HomepageHeader;
