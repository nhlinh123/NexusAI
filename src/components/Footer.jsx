import React from 'react';
import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-icon small">
                                <Rocket size={20} color="white" />
                            </div>
                            <span className="logo-text">
                                Nexus<span className="highlight">AI</span>
                            </span>
                        </div>
                        <p className="footer-desc">
                            Building the next generation of SaaS tools for <br />
                            developer productivity.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Github size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 1 */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Integrations</a>
                        <a href="#">Pricing</a>
                        <a href="#">Changelog</a>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Security</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 NexusAI Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
