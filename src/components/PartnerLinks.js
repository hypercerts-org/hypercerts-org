const PartnerLink = ({ href, imgSrc, altText }) => (
    <a href={href} className="button" target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} className="button-img" />
    </a>
  );
  
  const PartnerLinks = () => (
    <div id="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '0px'}}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0px', padding: '0px', justifyContent: 'center', alignItems: 'center' }}>
        <PartnerLink href="https://www.protocol.ai" imgSrc="/img/protocollabs_logo.png" altText="Protocol Labs logo" />
        <PartnerLink href="https://www.optimism.io/" imgSrc="/img/optimism_logo.png" altText="Optimism logo" />
        <PartnerLink href="https://octant.build/" imgSrc="/img/octant_logo.png" altText="Octant logo" />
        <PartnerLink href="https://www.gitcoin.co/" imgSrc="/img/gitcoin_logo.png" altText="Gitcoin logo" />
        <PartnerLink href="https://fundingthecommons.io/" imgSrc="/img/fundingthecommons_logo.png" altText="Funding the Commons logo" />
        <PartnerLink href="https://www.opensource.observer/" imgSrc="/img/opensourceobserver_logo.png" altText="Open Source Observer logo" />
        <PartnerLink href="https://www.raidguild.org/" imgSrc="/img/raidguild_logo.webp" altText="RaidGuild logo" />
        <PartnerLink href="https://www.zuzalu.city/" imgSrc="/img/zuzalu_logo.png" altText="Zuzalu logo" />
        <PartnerLink href="https://www.edgecity.live/" imgSrc="/img/edgecity_logo.png" altText="EdgeCity logo" />
        <PartnerLink href="https://fabdaotw.github.io/" imgSrc="/img/greensofa_logo.png" altText="GreenSofa logo" />
      </div>
      <style jsx>{`
          .button {
              width: 150px;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px;
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              border: black solid 1px;
          }

          .button-img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
              filter: grayscale(100%);
          }

          .button:hover {
              transform: scale(1.1);
              transition: transform 0.3s ease;
          }
      `}</style>
    </div>
  );
  
  export default PartnerLinks;