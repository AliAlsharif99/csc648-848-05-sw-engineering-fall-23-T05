import React, { useEffect, useState } from 'react';
import '../App.css';

function Footer() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const content = document.querySelector('.container');
            const footer = document.querySelector('.footer');

            if (content && footer) {
                const contentRect = content.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();

                if (
                    footerRect.top >= 0 &&
                    footerRect.top <= window.innerHeight &&
                    footerRect.top >= contentRect.bottom
                ) {
                    setIsFooterVisible(true);
                } else {
                    setIsFooterVisible(false);
                }
            }
        };

        const handleResize = () => {
            handleScroll();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="footer">
            {isFooterVisible ? (
                <div className="social-logo">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Facebook_logo.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">  
                        <img src="/images/Instagram_logo.png" alt="Instagram" />        
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/TwitterX_logo.png" alt="X" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Youtube_logo.png" alt="Youtube" />
                    </a>
                </div>
            ) : null}
        </div>
    );
}

export default Footer;