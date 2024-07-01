import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SponsorLogos from '@site/src/components/SponsorLogos.js';

import './index.module.css';

const phrasePart1 = ["Build", "Fund", "Measure", "Evaluate", "Create"];
const phrasePart2 = ["with us.", "with us.", "with us.", "with us.", "Impact."];


function HomepageHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrasePart1.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title="Impact Markets"
      description="Sell your impact, buy impact you are about">
      <div className='main-body-container'>
        <div className="responsive-container3" style={{justifyContent: "center"}}>
          <div>
            <h1 className="title-font">
              <span className="highlight">{phrasePart1[index]}</span> {phrasePart2[index]}
            </h1>
          </div>
          <div>
            <img src="/img/contact.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
          </div>        
        </div>
        <div style={{marginTop: '40px', maxWidth: '600px'}}>
          <h3>Use hypercerts</h3>
          <p>Do you want to get involved as a funder, evaluator or project? Fill out <a href="https://form.feathery.io/to/kV8E0l" target='_blank'>this form</a> or email us at <a href="mailto:team@hypercerts.org">team@hypercerts.org</a>.</p>
          <h3>Stay informed</h3>
          <p>Join our <a href="https://t.me/+YF9AYb6zCv1mNDJi" target="_blank" rel="noopener noreferrer">Telegram Group</a> to stay up to date.</p>
          <p>And find your way to our <a href="https://github.com/hypercerts-org/hypercerts" target="_blank" rel="noopener noreferrer">GitHub</a> to follow our technical development.</p>
          <h3>Get support</h3>
          <p>Need help? Join our <a href="https://discord.gg/UZt8cBnP4w" target="_blank" rel="noopener noreferrer">Discord</a> and post in the help forum.</p>
        </div>
      </div>
        
        {/* partner logos */}
        <div className="child" style={{marginTop: '50px'}}>
          <SponsorLogos />
        </div>
    </Layout>
  );
}

export default HomepageHeader;
