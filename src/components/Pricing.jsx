import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className="pricing-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Simple, transparent <br />
                        <span className="text-gradient-primary">pricing</span>
                    </h2>
                    <p className="section-description">
                        Choose the perfect plan for your team.
                        No hidden fees. Cancel anytime.
                    </p>

                    <div className="pricing-toggle">
                        <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                        <div
                            className={`toggle-switch ${isAnnual ? 'on' : ''}`}
                            onClick={() => setIsAnnual(!isAnnual)}
                        >
                            <div className="toggle-thumb" />
                        </div>
                        <span className={isAnnual ? 'active' : ''}>Yearly <span className="save-badge">Save 20%</span></span>
                    </div>
                </div>

                <div className="pricing-grid">
                    {/* Plan 1 */}
                    <div className="pricing-card glass-panel">
                        <h3 className="plan-name">Starter</h3>
                        <div className="plan-price">
                            <span className="currency">$</span>
                            <span className="amount">{isAnnual ? '0' : '0'}</span>
                            <span className="period">/mo</span>
                        </div>
                        <p className="plan-desc">Perfect for side projects.</p>
                        <button className="btn-outline-wide">Get Started</button>
                        <div className="features-list">
                            <div className="feature-item"><Check size={16} /> 1 User</div>
                            <div className="feature-item"><Check size={16} /> 5 Projects</div>
                            <div className="feature-item"><Check size={16} /> Community Support</div>
                        </div>
                    </div>

                    {/* Plan 2: Pro (Popular) */}
                    <div className="pricing-card highlighted">
                        <div className="popular-badge">Most Popular</div>
                        <h3 className="plan-name">Pro</h3>
                        <div className="plan-price">
                            <span className="currency">$</span>
                            <span className="amount">{isAnnual ? '29' : '39'}</span>
                            <span className="period">/mo</span>
                        </div>
                        <p className="plan-desc">For growing teams.</p>
                        <button className="btn-primary full-width">Start Free Trial</button>
                        <div className="features-list">
                            <div className="feature-item"><Check size={16} /> Up to 10 Users</div>
                            <div className="feature-item"><Check size={16} /> Unlimited Projects</div>
                            <div className="feature-item"><Check size={16} /> Priority Support</div>
                            <div className="feature-item"><Check size={16} /> Analytics Dashboard</div>
                        </div>
                    </div>

                    {/* Plan 3 */}
                    <div className="pricing-card glass-panel">
                        <h3 className="plan-name">Enterprise</h3>
                        <div className="plan-price">
                            <span className="amount">Custom</span>
                        </div>
                        <p className="plan-desc">For large organizations.</p>
                        <button className="btn-outline-wide">Contact Sales</button>
                        <div className="features-list">
                            <div className="feature-item"><Check size={16} /> Unlimited Users</div>
                            <div className="feature-item"><Check size={16} /> SSO & Audit Logs</div>
                            <div className="feature-item"><Check size={16} /> 24/7 Dedicated Support</div>
                            <div className="feature-item"><Check size={16} /> Custom Infrastructure</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
