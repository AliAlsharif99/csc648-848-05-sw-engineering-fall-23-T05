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

                if (contentRect.bottom >= footerRect.top) {
                    setIsFooterVisible(true);
                } else {
                    setIsFooterVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="footer">
            {isFooterVisible ? (
                <div className="social-logo">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">  
                        <img src="/images/Instagram_logo.png" alt="Instagram" />        
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Facebook_logo.png" alt="Facebook" />
                    </a>
                </div>
            ) : null}
        </div>
    );
}

export default Footer;