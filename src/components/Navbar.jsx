import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <div className="logo-icon">
                        <Rocket size={20} color="white" />
                    </div>
                    <span className="logo-text">
                        Nexus<span className="highlight">AI</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="navbar-links desktop">
                    <a href="#features">Features</a>
                    <a href="#integration">Integration</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About</a>
                </div>

                {/* CTA */}
                <div className="navbar-actions desktop">
                    <a href="#" className="signin-link">Sign In</a>
                    <button className="btn-primary">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X color="white" /> : <Menu color="white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open glass' : ''}`}>
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="#integration" onClick={() => setIsMobileMenuOpen(false)}>Integration</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                <div className="divider"></div>
                <a href="#" className="signin-link" onClick={() => setIsMobileMenuOpen(false)}>Sign In</a>
                <button className="btn-primary full-width">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
