import React from 'react';
import {
    BarChart2,
    Globe,
    Shield,
    Users,
    Zap,
    Cpu
} from 'lucide-react';
import './Features.css';

const Features = () => {
    return (
        <section id="features" className="features-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Powerful features for <br />
                        <span className="text-gradient-primary">modern teams</span>
                    </h2>
                    <p className="section-description">
                        Everything you need to manage your SaaS application,
                        analytics, and team collaboration in one place.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Feature 1: Analytics (Large) */}
                    <div className="feature-card span-2 highlight-glow">
                        <div className="card-icon-wrapper">
                            <BarChart2 className="text-primary" size={32} />
                        </div>
                        <h3 className="card-title">Real-time Analytics</h3>
                        <p className="card-desc">
                            Monitor your application performance with our advanced
                            real-time dashboard. Track metrics that matter.
                        </p>
                        <div className="card-visual-graph"></div>
                    </div>

                    {/* Feature 2: Global */}
                    <div className="feature-card">
                        <div className="card-icon-wrapper">
                            <Globe className="text-secondary" size={32} />
                        </div>
                        <h3 className="card-title">Global Edge Network</h3>
                        <p className="card-desc">
                            Deploy your application to <span className="text-white">35+ regions</span> instantly.
                        </p>
                    </div>

                    {/* Feature 3: Security */}
                    <div className="feature-card">
                        <div className="card-icon-wrapper">
                            <Shield className="text-accent" size={32} />
                        </div>
                        <h3 className="card-title">Bank-grade Security</h3>
                        <p className="card-desc">
                            SOC2 Type II certified. End-to-end encryption by default.
                        </p>
                    </div>

                    {/* Feature 4: Collaboration (Span 2) */}
                    <div className="feature-card span-2">
                        <div className="card-content-row">
                            <div className="text-content">
                                <div className="card-icon-wrapper">
                                    <Users className="text-green-400" size={32} />
                                </div>
                                <h3 className="card-title">Team Collaboration</h3>
                                <p className="card-desc">
                                    Built-in comments, threads, and notifications suitable
                                    for large engineering teams.
                                </p>
                            </div>
                            <div className="card-visual-avatars">
                                <div className="avatar">AB</div>
                                <div className="avatar">JD</div>
                                <div className="avatar">+5</div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 5: AI */}
                    <div className="feature-card">
                        <div className="card-icon-wrapper">
                            <Cpu className="text-purple-400" size={32} />
                        </div>
                        <h3 className="card-title">AI Powered</h3>
                        <p className="card-desc">
                            Predictive scaling and anomaly detection.
                        </p>
                    </div>

                    {/* Feature 6: Speed */}
                    <div className="feature-card">
                        <div className="card-icon-wrapper">
                            <Zap className="text-yellow-400" size={32} />
                        </div>
                        <h3 className="card-title">Lightning Fast</h3>
                        <p className="card-desc">
                            Sub-millisecond latency for database queries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
