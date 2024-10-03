import React, { useState } from 'react';

const ImpactMarketSection = () => {
    const [selectedButton, setSelectedButton] = useState(1);

    const buttons = [
        { id: 1, label: 'Projects' },
        { id: 2, label: 'Funders' },
        { id: 3, label: 'Evaluators' },
        { id: 4, label: 'Funding Platforms' },
    ];

    const contentAreas = [
        {
            id: 1,
            title: 'Sell the impact you created',
            description: 'Create hypercerts that represents the impact your project had. Let credible evaluators confirm the impact. Sell the right to claim this impact to funders and become financially sustainable by continuously selling your impact.',
            primaryButton: { text: 'Sell your impact now', link: 'https://form.feathery.io/to/kV8E0l' },
            secondaryButton: { text: 'Learn more', link: 'https://hypercerts.org/docs/what-are-hypercerts' },
            image: '/img/hypercerts_for_projects.png',
        },
        {
            id: 2,
            title: 'Buy the impact you care about risk-free',
            description: 'Find projects\' hypercerts and access their impact evaluations. Reward them for their past impact. Receive the right to claim the impact and build up your impact portfolio to prove your support of collective goods.',
            primaryButton: { text: 'Explore hypercerts', link: 'https://app.hypercerts.org/explore' },
            secondaryButton: { text: 'Contact us', link: 'https://form.feathery.io/to/kV8E0l' },
            image: '/img/hypercerts_for_funders.png',
        },
        {
            id: 3,
            title: 'Get paid for high-quality impact evaluations',
            description: 'Evaluate the work of projects with data and your expertise. Improve your evaluation methodology over time. Help funders allocate their funds and get rewarded for evaluations that significantly impacted funders\' decisions.',
            primaryButton: { text: 'Become an official evaluator', link: 'https://form.feathery.io/to/kV8E0l' },
            image: '/img/hypercerts_for_evaluators.png',
        },
        {
            id: 4,
            title: 'Become part of the funding network',
            description: 'Integrate hypercerts into your funding platform, no matter if you distribute grants, organize crowdfunding or run prize competitions. Access projects\' previous hypercerts and their evaluations.',
            primaryButton: { text: 'Integrate hypercerts now', link: "https://form.feathery.io/to/kV8E0l" },
            secondaryButton: { text: 'Learn more', link: 'https://hypercerts.org/docs/what-are-hypercerts' },
            image: '/img/hypercerts_for_funding_platforms.png',
        }
    ];

    return (
        <div>
            <div className="child" style={{marginTop: '70px'}}>
                <p className="text-centered" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
                    Build to power
                </p>
                <h1 className="h1">
                    Impact Markets
                </h1>
            </div>

            {/* Buttons Row */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }}>
                {buttons.map((button) => (
                    <button
                        key={button.id}
                        onClick={() => setSelectedButton(button.id)}
                        className={`impact-market-button ${selectedButton === button.id ? 'selected' : ''}`}
                    >
                        {button.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            {contentAreas.map((content) => (
                selectedButton === content.id && (
                    <div key={content.id} className="main-body-container">
                        <div className="responsive-container2">
                            <div>
                                <h2 className="h3">{content.title}</h2>
                                <p className="text-font">{content.description}</p>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-start',
                                }}>
                                    <a href={content.primaryButton.link} className="primaryButton"
                                       target="_blank">{content.primaryButton.text}</a>
                                    {content.secondaryButton && (
                                        <a href={content.secondaryButton.link}
                                           className="greyButton">{content.secondaryButton.text}</a>
                                    )}
                                </div>
                            </div>
                            <div>
                                <img src={content.image} alt="placeholder"
                                     style={{padding: '0px 10px', borderRadius: '24px'}}/>
                            </div>
                        </div>
                    </div>
                )
            ))}

            <style jsx>{`
                .impact-market-button {
                    width: 150px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    background-color: white;
                    border-radius: 8px;
                    margin: 0px;
                    //box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .impact-market-button:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease;
                }

                .impact-market-button.selected {
                    background-color: #000000;
                    color: #ffffff;
                }
            `}</style>
        </div>
    );
};

export default ImpactMarketSection;