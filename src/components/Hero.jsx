import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Ambience */}
            <div className="hero-glow" />

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="badge-container">
                        <span className="badge">New Features v2.0 Released</span>
                    </div>

                    <h1 className="hero-title">
                        Unlock the power of <br />
                        <span className="text-gradient-primary">Intelligent Analytics</span>
                    </h1>

                    <p className="hero-subtitle">
                        Transform your data into actionable insights with our next-generation platform.
                        built for scale, security, and speed.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary flex-center gap-2">
                            Start Free Trial <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary flex-center gap-2">
                            <Play size={18} fill="currentColor" /> Watch Demo
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-dashboard-preview"
                >
                    <div className="glass-panel dashboard-mockup">
                        {/* Abstract UI Representation */}
                        <div className="mockup-header">
                            <div className="dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-sidebar"></div>
                            <div className="mockup-content">
                                <div className="mockup-chart"></div>
                                <div className="mockup-row short"></div>
                                <div className="mockup-row long"></div>
                                <div className="mockup-row medium"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
