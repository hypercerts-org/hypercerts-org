import React, { useEffect, useRef } from 'react';
import '/src/css/SponsorLogos.css';

const SponsorLogos = () => {
  const buttonsRowRef = useRef(null);

  useEffect(() => {
    const buttonsRow = buttonsRowRef.current;
    const totalWidth = buttonsRow.offsetWidth; // Get the total width of the buttons
    buttonsRow.innerHTML += buttonsRow.innerHTML; // Duplicate content for a seamless loop

    let moveAmount = 0;

    const moveButtons = () => {
      moveAmount -= 0.5; // Adjust speed here
      if (Math.abs(moveAmount) >= totalWidth) {
        moveAmount = 0;
      }
      buttonsRow.style.transform = `translateX(${moveAmount}px)`;
      requestAnimationFrame(moveButtons);
    };

    moveButtons();
  }, []);

  return (
    <div id="container" style={{ width: '100vw', height: '50px', backgroundColor: 'black', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', border: 'solid 1px black' }}>
      <div id="buttonsRow" ref={buttonsRowRef} style={{ display: 'flex', position: 'absolute' }}>
        <a href="https://www.protocol.ai" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/protocollabs_logo.png" alt="Protocol Labs logo" className="button-img" style={{ width: '80%' }} />
        </a>
        <a href="https://www.optimism.io/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/optimism_logo.png" alt="Optimism logo" className="button-img" style={{ width: '80%' }} />
        </a>
        <a href="https://octant.build/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/octant_logo.png" alt="Octant logo" className="button-img" style={{ width: '60%' }} />
        </a>
        <a href="https://www.gitcoin.co/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/gitcoin_logo.png" alt="Gitcoin logo" className="button-img" style={{ width: '60%' }} />
        </a>
        <a href="https://fundingthecommons.io/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/fundingthecommons_logo.png" alt="Funding the Commons logo" className="button-img" style={{ height: '50%' }} />
        </a>
        <a href="https://www.opensource.observer/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/opensourceobserver_logo.png" alt="Open Source Observer logo" className="button-img" style={{ height: '70%' }} />
        </a>
        <a href="https://www.raidguild.org/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/raidguild_logo.webp" alt="RaidGuild logo" className="button-img" style={{ height: '50%' }} />
        </a>
        <a href="https://www.zuzalu.city/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/zuzalu_logo.png" alt="Zuzalu logo" className="button-img" style={{ height: '70%' }}/>
        </a>
        <a href="https://www.edgecity.live/" className="button-moving" target="_blank" rel="noopener noreferrer">
          <img src="/img/edgecity_logo.png" alt="EdgeCity logo" className="button-img" style={{ height: '80%' }} />
        </a>
      </div>
    </div>
  );
};

export default SponsorLogos;
