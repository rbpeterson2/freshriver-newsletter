'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Freshriver.ai</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#toc">TOC</a>
            <a href="#breaking">Breaking</a>
            <a href="#field-report">Field Report</a>
            <a href="#actions">Three Actions</a>
            <a href="#offering">Assessment</a>
          </div>
        </div>
      </nav>

      {/* Table of Contents */}
      <section id="toc" className={styles.section}>
        <div className={styles.container}>
          <h2>In This Issue</h2>
          <ul className={styles.toc}>
            <li><a href="#breaking">● BREAKING: Claude Fable 5 — Suspended</a></li>
            <li><a href="#paradox">The Token Paradox</a></li>
            <li><a href="#field-report">Field Report: Who Got Hurt</a></li>
            <li><a href="#questions">15 Questions to Ask Now</a></li>
            <li><a href="#mismo">MISMO: AI Governance</a></li>
            <li><a href="#actions">Three Actions This Quarter</a></li>
            <li><a href="#offering">Freshriver Assessment Offer</a></li>
          </ul>
        </div>
      </section>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <span className={styles.breakingBadge}>● BREAKING: MODEL UPDATE</span>
            <span className={styles.date}>June 12, 2026</span>
          </div>
          <h1 className={styles.heroTitle}>The Token Bill Comes Due</h1>
          <p className={styles.heroSubtitle}>
            Per-token prices fell 98%. Enterprise AI bills tripled. Here is what happened, 
            who got hurt, and what you need to ask before it happens to you.
          </p>
          <div className={styles.alert}>
            <span className={styles.alertIcon}>⚠</span>
            <div>
              <strong>Market Alert:</strong> Enterprise AI bills tripled while per-token prices fell 98%. 
              Uncapped agentic workflows are already destroying budgets — and mortgage banking is directly in the path. 
              Contact Freshriver.ai for a cost assessment.
            </div>
          </div>
        </div>
      </section>

      {/* Claude Fable Section */}
      <section id="breaking" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headline}>
            <h2>Claude Fable 5: Launched, Then Suspended by Government Order</h2>
            <p className={styles.subtitle}>
              The most capable model Anthropic has ever released publicly was available for three days.
            </p>
          </div>
          
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <p>
                On June 9, 2026, Anthropic released <strong>Claude Fable 5</strong> — the first publicly available model from its "Mythos-class" tier, previously restricted to government and defense partners under Project Glasswing. Anthropic described Fable 5 as exceeding every Claude model previously released for general use, with exceptional performance in software engineering, long-horizon agentic tasks, vision, and scientific research.
              </p>
              <p>
                On June 12 — <strong>three days later</strong> — the US government issued an export control directive ordering Anthropic to suspend all access to Fable 5 and Mythos 5 for all users globally. Access remains suspended as of this writing. All other Anthropic models are unaffected.
              </p>
            </div>

            <div className={styles.statsCard}>
              <h3>By the Numbers</h3>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>↓</span>
                <div>
                  <div className={styles.statValue}>98% drop</div>
                  <div className={styles.statLabel}>per-token price since 2022</div>
                  <div className={styles.statDetail}>$20/M → $0.40/M</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>↑</span>
                <div>
                  <div className={styles.statValue}>320% rise</div>
                  <div className={styles.statLabel}>enterprise AI bills</div>
                  <div className={styles.statDetail}>$1.2M avg → $7M</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>→</span>
                <div>
                  <div className={styles.statValue}>13×</div>
                  <div className={styles.statLabel}>increase in token consumption</div>
                  <div className={styles.statDetail}>since January 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Paradox */}
      <section id="paradox" className={styles.section} style={{ background: 'var(--navy-light)' }}>
        <div className={styles.container}>
          <h2>The Paradox Nobody Saw Coming</h2>
          <p className={styles.leadText}>
            Per-token prices fell 98% since 2022 while enterprise AI bills rose 320% — because agentic workflows 
            multiplied consumption 30× per task and organizations defaulted to routing every request to the most expensive model.
          </p>
          <p>
            A <strong>4,500× cost spread</strong> exists between cheapest and priciest models; most organizations never exploit it. 
            Watching the rate card instead of the consumption curve is the core governance failure.
          </p>
        </div>
      </section>

      {/* Field Report */}
      <section id="field-report" className={styles.section}>
        <div className={styles.container}>
          <h2>Field Report: Who Got Hurt</h2>
          <div className={styles.caseStudies}>
            <div className={styles.caseCard}>
              <h3>Uber</h3>
              <p>
                Burned its entire 2026 AI coding budget by April with no consumption ceiling set. 
                Microsoft revoked developer licenses after discovering <strong>$500–$2,000/engineer/month</strong> in untracked spend.
              </p>
            </div>
            <div className={styles.caseCard}>
              <h3>Unnamed Enterprise</h3>
              <p>
                Accumulated a <strong>$500M Claude bill in 30 days</strong> from uncapped agentic workflows. 
                Mortgage banking faces identical exposure: document-intensive workflows in origination, underwriting, and servicing 
                generate the same high-token cost profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 15 Questions */}
      <section id="questions" className={styles.section} style={{ background: 'var(--navy-light)' }}>
        <div className={styles.container}>
          <h2>The 15 Questions Governance Framework</h2>
          <div className={styles.questionsGrid}>
            <div className={styles.questionDomain}>
              <h3>1. Real-Time Consumption & Spend Limits</h3>
              <ul>
                <li>Do you have visibility into AI API spend on a daily basis?</li>
                <li>Are consumption ceilings set at workflow, team, and organizational levels?</li>
                <li>Can you explain a $100K month-over-month invoice variance?</li>
              </ul>
            </div>
            <div className={styles.questionDomain}>
              <h3>2. Model Routing Matched to Cost Tiers</h3>
              <ul>
                <li>Is every workload mapped to the right model for its task?</li>
                <li>Do you have caching enabled on repeated queries?</li>
                <li>Do you have cost-tier routing rules auditable by your finance team?</li>
              </ul>
            </div>
            <div className={styles.questionDomain}>
              <h3>3. Vendor Price-Change Protections</h3>
              <ul>
                <li>What happens if your primary vendor raises prices 50% overnight?</li>
                <li>Have you evaluated open-weight alternatives for your top-3 workflows?</li>
                <li>Is your infrastructure locked into a single provider?</li>
              </ul>
            </div>
            <div className={styles.questionDomain}>
              <h3>4. Governance & Accountability</h3>
              <ul>
                <li>Is there a named budget owner fluent in token economics?</li>
                <li>Can your finance team audit AI spend by workflow?</li>
                <li>Does your Board know your current AI cost and trajectory?</li>
              </ul>
            </div>
          </div>
          <p className={styles.questionNote}>
            <strong>Organizations that answered all 15 questions avoided the spring budget crisis.</strong><br/>
            Contact Freshriver.ai for the complete framework.
          </p>
        </div>
      </section>

      {/* MISMO Section */}
      <section id="mismo" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>REGULATORY</div>
          <h2>MISMO: AI Governance & Methodology</h2>
          <p>
            MISMO launched <strong>FRAME (Framework for Responsible AI in the Mortgage Ecosystem)</strong> on June 11, 2026 
            — a voluntary, mortgage-specific governance toolkit for policies, controls, and AI oversight, developed with MBA's RESBOG.
          </p>
          <div className={styles.deadlines}>
            <h3>Key Deadlines</h3>
            <div className={styles.deadlineCard}>
              <span className={styles.deadlineDate}>August 6, 2026</span>
              <p><strong>Fannie Mae AI governance requirements</strong> take effect</p>
            </div>
            <div className={styles.deadlineCard}>
              <span className={styles.deadlineDate}>January 1, 2027</span>
              <p><strong>Colorado's Automated Decision-Making Technology Act</strong> takes effect</p>
            </div>
          </div>
          <p className={styles.warning}>
            <strong>Compliance Risk:</strong> Lenders whose AI models cannot explain adverse credit decisions 
            face Regulation B exposure regardless of model accuracy. FRAME is available to MISMO members via MISMO Connect.
          </p>
        </div>
      </section>

      {/* Three Actions */}
      <section id="actions" className={styles.section} style={{ background: 'var(--navy-light)' }}>
        <div className={styles.container}>
          <h2>Three Actions This Quarter</h2>
          <div className={styles.actionsList}>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>1</div>
              <h3>Token Consumption Audit</h3>
              <p>
                Pull 90 days of AI API invoices and break down by workflow, model tier, and user group. 
                Identify which workflows are burning budget and which are efficient.
              </p>
            </div>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>2</div>
              <h3>Model Routing Policy</h3>
              <p>
                Map every workload to a cost tier; <strong>60–70% of mortgage AI tasks can run on mid-tier models 
                at 10×–30× lower cost.</strong> Create auditable routing rules.
              </p>
            </div>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>3</div>
              <h3>Infrastructure Crossover Model</h3>
              <p>
                Workflows exceeding 5B tokens/month may favor owned infrastructure over API rental. 
                Contact Freshriver.ai to model your specific crossover point.
              </p>
            </div>
          </div>
          <p className={styles.conclusion}>
            <strong>The CFO who opens a monthly cloud invoice and finds a surprise has already lost.</strong><br/>
            The organizations that will win the AI economics game treat token consumption as a managed financial resource, 
            not a technology line item.
          </p>
        </div>
      </section>

      {/* Offering Section */}
      <section id="offering" className={styles.offering}>
        <div className={styles.container}>
          <div className={styles.offeringContent}>
            <h2>The Freshriver AI Economics Assessment</h2>
            <p className={styles.offeringSubtitle}>
              A structured engagement to review your AI usage, evaluate your economics, 
              and deliver optimization recommendations your CFO can act on.
            </p>
            
            <div className={styles.offeringDetails}>
              <p>
                The patterns described in this issue — budget overruns discovered through invoices, 
                agentic workflows without controls, expensive models routing simple tasks, no visibility into per-loan AI cost — 
                are present in some form in nearly every financial services organization that has deployed AI in the past eighteen months. 
                Most organizations simply have not looked yet.
              </p>
              <p>
                <strong>Deliverable:</strong> A written assessment report with prioritized findings, quantified savings opportunities, 
                and a phased implementation roadmap — designed for presentation to your CFO, CTO, and Risk Committee.
              </p>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Request Your Assessment</button>
              {submitted && <p className={styles.successMessage}>Thank you! We'll be in touch shortly.</p>}
            </form>

            <div className={styles.contactInfo}>
              <p>
                <strong>Tom Knapp</strong> | Senior Partner, Financial Services<br/>
                <a href="mailto:tom.knapp@freshriver.ai">tom.knapp@freshriver.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Freshriver.ai</h4>
              <p>AI Economics, Governance & Compliance</p>
              <p>For Financial Services & Regulated Industries</p>
            </div>
            <div className={styles.footerSection}>
              <h4>About This Newsletter</h4>
              <p>
                AI Regulatory, Market & Economics Newsletter is published monthly by Freshriver.ai 
                for financial services executives navigating the AI landscape.
              </p>
              <p className={styles.disclaimer}>
                For informational purposes only. Does not constitute financial or technology procurement advice.
              </p>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <p>
                <a href="mailto:tom.knapp@freshriver.ai">tom.knapp@freshriver.ai</a>
              </p>
              <p className={styles.copyright}>
                © 2026 Freshriver.ai. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
