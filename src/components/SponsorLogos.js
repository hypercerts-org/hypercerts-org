import React, { useEffect, useRef } from 'react';

const SponsorLogos = () => {
    const buttonsRowRef = useRef(null);
    const animationRef = useRef(null);

    const logos = [
        { href: "https://www.protocol.ai", imgSrc: "/img/protocollabs_logo.png", altText: "Protocol Labs logo" },
        { href: "https://www.optimism.io/", imgSrc: "/img/optimism_logo.png", altText: "Optimism logo" },
        { href: "https://octant.build/", imgSrc: "/img/octant_logo.png", altText: "Octant logo" },
        { href: "https://www.gitcoin.co/", imgSrc: "/img/gitcoin_logo.png", altText: "Gitcoin logo" },
        { href: "https://fundingthecommons.io/", imgSrc: "/img/fundingthecommons_logo.png", altText: "Funding the Commons logo" },
        { href: "https://www.opensource.observer/", imgSrc: "/img/opensourceobserver_logo.png", altText: "Open Source Observer logo" },
        { href: "https://www.raidguild.org/", imgSrc: "/img/raidguild_logo.webp", altText: "RaidGuild logo" },
        { href: "https://www.zuzalu.city/", imgSrc: "/img/zuzalu_logo.png", altText: "Zuzalu logo" },
        { href: "https://www.edgecity.live/", imgSrc: "/img/edgecity_logo.png", altText: "EdgeCity logo" },
    ];

    useEffect(() => {
        const buttonsRow = buttonsRowRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 0.5;
            if (scrollAmount >= buttonsRow.offsetWidth / 3) {
                scrollAmount = 0;
            }
            buttonsRow.style.transform = `translateX(-${scrollAmount}px)`;
            animationRef.current = requestAnimationFrame(scroll);
        };

        scroll();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const PartnerLink = ({ href, imgSrc, altText }) => (
        <a href={href} className="button" target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt={altText} className="button-img" />
        </a>
    );

    return (
        <div id="container" style={{
            width: '100%',
            height: '70px',
            backgroundColor: 'white',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <div id="buttonsRow" ref={buttonsRowRef} style={{ display: 'flex', position: 'absolute' }}>
                {[...logos, ...logos, ...logos].map((logo, index) => (
                    <PartnerLink key={index} {...logo} />
                ))}
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
                    margin: 0px;
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
};

export default SponsorLogos;