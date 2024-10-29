import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub  />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter  />
                </a>
            </div>
            <p className="footer-text">
                &copy; 2024 Chalani Dissanayaka. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;