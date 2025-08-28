import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, TrendingUp, Shield, Brain, Database, Zap, BarChart3, PieChart, Target, Cpu, Mail } from 'lucide-react';
import './palantir.css';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="company-name">HURON RIVER TRADING</h1>
      <nav className="nav-indicators">
        <div className="indicator active">SYSTEM ONLINE</div>
        <div className="indicator">START ENGINE</div>
      </nav>
    </div>
  </header>
);

const Section = ({ title, children, titleClassName = '', fullWidth = false }) => (
  <section className={`section ${fullWidth ? 'full-width' : ''}`.trim()}>
    <h2 className={`section-title ${titleClassName}`}>{title}</h2>
    <div className="section-content">{children}</div>
  </section>
);

const StockTicker = () => {
    const initialStocks = [
        { symbol: 'AAPL', price: 170.12, change: '+1.25' },
        { symbol: 'MSFT', price: 370.95, change: '-0.30' },
        { symbol: 'GOOGL', price: 133.45, change: '+0.88' },
        { symbol: 'AMZN', price: 145.80, change: '-1.12' },
        { symbol: 'NVDA', price: 475.69, change: '+5.43' },
        { symbol: 'TSLA', price: 240.02, change: '-3.50' },
        { symbol: 'META', price: 330.17, change: '+2.19' },
        { symbol: 'S&P 500', price: 4783.83, change: '+26.41' },
        { symbol: 'NASDAQ', price: 15099.18, change: '+113.23' },
        { symbol: 'DOW 30', price: 37557.92, change: '+176.57' },
        { symbol: 'NIKKEI 225', price: 33219.39, change: '-141.43' },
        { symbol: 'FTSE 100', price: 7614.48, change: '-11.28' },
    ];

    const [stocks, setStocks] = useState(initialStocks);

    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    const change = (Math.random() * 5 - 2.5).toFixed(2);
                    const newPrice = (stock.price + parseFloat(change));
                    return {
                        ...stock,
                        price: newPrice,
                        change: `${change.startsWith('-') ? '' : '+'}${change}`,
                    };
                })
            );
        }, 2000); // Update every 2 seconds

        return () => clearInterval(interval);
    }, []);


    const duplicatedStocks = [...stocks, ...stocks];

    return (
        <div className="stock-ticker-container">
            <div className="stock-ticker">
                {duplicatedStocks.map((stock, index) => (
                    <div className="stock-item" key={index}>
                        <span className="stock-symbol">{stock.symbol}</span>
                        <span className="stock-price">{stock.price.toFixed(2)}</span>
                        <span className={`stock-change ${stock.change.startsWith('+') ? 'positive' : 'negative'}`}>
                            {stock.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HeroSection = () => (
    <div className="hero-container">
        <div className="hero-content-wrapper">
            <h1 className="hero-main-title">The Operating System for Autonomous Investment</h1>
            <div className="hero-subtitle-animation">
                <TypeAnimation
                    sequence={[
                        'Huron River provides the foundational ontology that transforms disparate data into a structured, actionable, and self-governing financial universe.',
                        3000,
                        'Huron River provides the foundational ontology that transforms disparate data into a structured, actionable, and self-governing financial universe.',
                        3000,
                    ]}
                    wrapper="p"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}
                />
            </div>
        </div>
        <StockTicker />
    </div>
);

const InvestorSection = () => (
    <section className="section investor-section">
        <div className="investor-content">
            <div className="investor-column">
                <h3 className="investor-title">For Individual Investors</h3>
                <p className="investor-text">
                    Our <span className="highlight">ontology-driven</span> system gives you the same <span className="highlight">analytical power</span> as major investment firms—and more.
                </p>
            </div>
            <div className="investor-column">
                <h3 className="investor-title">For Enterprise</h3>
                <p className="investor-text">
                For enterprises, our OS delivers superior investment decision-making by creating a <span className="highlight">unified intelligence</span> layer. It enables you to model complex scenarios, <span className="highlight">anticipate market shifts</span>, and execute strategies with <span className="highlight">rule-based precision</span>, turning data into a decisive <span className="highlight">competitive advantage</span>.
                </p>
            </div>
        </div>
    </section>
);

const App = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
    }
  };

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <InvestorSection />

      <div className="main-content">
          <Section title="Ontology Data Examples">
            <div className="examples-grid">
              <MarketDataExample
                icon={<BarChart3 size={20} className="example-icon" />}
                title="Market Data"
                items={[
                  { entity: "Apple Inc. (AAPL)", relation: "operates_in", value: "Technology Sector" },
                  { entity: "S&P 500 Index", relation: "contains", value: "500 Large-Cap Stocks" },
                  { entity: "Federal Reserve", relation: "influences", value: "Interest Rates" },
                ]}
              />
              <MarketDataExample
                icon={<TrendingUp size={20} className="example-icon" />}
                title="Market News"
                items={[
                  { entity: "Earnings Report", relation: "impacts", value: "Stock Valuation" },
                  { entity: "Geopolitical Event", relation: "affects", value: "Supply Chain" },
                  { entity: "CEO Announcement", relation: "triggers", value: "Market Sentiment" },
                ]}
              />
              <MarketDataExample
                icon={<Brain size={20} className="example-icon" />}
                title="Market Indicators"
                items={[
                  { entity: "VIX Index", relation: "measures", value: "Market Volatility" },
                  { entity: "RSI Indicator", relation: "signals", value: "Overbought/Oversold" },
                  { entity: "Moving Average", relation: "indicates", value: "Price Trend" },
                ]}
              />
            </div>
          </Section>

          <Section title="Your data is connected. Your systems aren't.">
            <div className="comparison-grid">
              <div className="comparison-column">
                <h3 className="comparison-title negative">Fragmented Data Silos</h3>
                <p className="comparison-item"><span className="cursor-red">_</span>Data exists in isolated databases and files.</p>
                <p className="comparison-item"><span className="cursor-red">_</span>Relationships are implied or manual.</p>
                <p className="comparison-item"><span className="cursor-red">_</span>Rules and logic are buried in code.</p>
                <p className="comparison-item"><span className="cursor-red">_</span>Systems operate on their own version of the truth.</p>
              </div>
              <div className="comparison-column">
                <h3 className="comparison-title positive">The Huron River OS</h3>
                <p className="comparison-item"><span className="cursor-green">_</span>A unified knowledge graph where every data point is mapped to its real-world context.</p>
                <p className="comparison-item"><span className="cursor-green">_</span>Connections are explicit, first-class entities (e.g., Company A → owns → Subsidiary B → located_in → Country C).</p>
                <p className="comparison-item"><span className="cursor-green">_</span>Investment rules are configurable constraints within the ontology itself, governing all downstream activity.</p>
                <p className="comparison-item"><span className="cursor-green">_</span>Every application and process operates on the same, consistent reality.</p>
              </div>
            </div>
          </Section>

          <Section title="The Huron River Ontology">
            <p className="section-subtitle" style={{maxWidth: '100%', marginBottom: '2rem'}}>
              We provide the core operating system—a dynamic, computable framework that defines and connects 
              every entity, relationship, and rule in the financial universe. This is the single source of truth 
              that enables intelligent systems to function.
            </p>
            <div className="layers-visual">
              <LayerCard icon={<Database size={28}/>} title="The Entity Layer" description="The nouns of finance. A deterministic model of Assets, Companies, Geographies, Economic Indicators, and Events, each with defined properties." />
              <div className="layer-connector"><ArrowRight size={24} /></div>
              <LayerCard icon={<Zap size={28}/>} title="The Relationship Layer" description="The connections between entities. How companies relate to each other, how events impact markets, and how economic forces interact across the financial ecosystem." />
              <div className="layer-connector"><ArrowRight size={24} /></div>
              <LayerCard icon={<Shield size={28}/>} title="The Logic Layer" description="The rules of engagement. Your proprietary investment rules, risk parameters, and compliance guardrails are encoded directly into the fabric of the OS." />
            </div>
          </Section>

          <Section title="Capabilities">
            <div className="capabilities-grid">
              <CapabilityCard icon={<Database size={24} />} name="Unified Data Universe" description="Ingest and map disparate data feeds—market, fundamental, alternative, proprietary—into a single, coherent model. Eliminate reconciliation." color="blue" />
              <CapabilityCard icon={<Brain size={24} />} name="Causal Reasoning" description="Move beyond correlation. The OS understands how an event propagates through supply chains, sectors, and asset classes, enabling predictive analysis." color="blue" />
              <CapabilityCard icon={<Shield size={24} />} name="Configurable Autonomy" description="Define the rules of your investment universe. The OS ensures any autonomous function—from research to execution—operates within these precise boundaries." color="blue" />
              <CapabilityCard icon={<Zap size={24} />} name="Total Explainability" description="Every output, signal, or action can be traced back to the originating data points and logical rules within the ontology. There is no black box." color="blue" />
            </div>
          </Section>

          <Section title="Use Cases">
            <div className="capabilities-grid">
                <CapabilityCard icon={<BarChart3 size={24} />} name="Quantitative Strategy" description="Build complex, thematic factors based on causal relationships, not just statistical correlation." color="green" />
                <CapabilityCard icon={<PieChart size={24} />} name="Portfolio Construction & Risk Management" description="Model portfolio exposure to abstract concepts like 'geopolitical risk in the semiconductor sector' in real-time." color="green" />
                <CapabilityCard icon={<Target size={24} />} name="Proprietary Research" description="Rapidly model and test how new economic relationships impact your entire universe." color="green" />
                <CapabilityCard icon={<Cpu size={24} />} name="Autonomous Execution" description="Provide the foundational truth layer for automated systems to make safe, rational, and rule-based decisions." color="green" />
            </div>
          </Section>

          <Section title="Now Waitlisting">
            <form className="waitlist-form" onSubmit={handleEmailSubmit}>
              <div style={{position: 'relative', display: 'flex', alignItems: 'center', width: '100%'}}>
                <Mail className="email-icon-waitlist" />
                <input
                  type="email"
                  placeholder="Enter email to get notification"
                  className="email-input with-icon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Join Waitlist</button>
            </form>
            {emailSubmitted && (
              <div className="success-message">
                ✓ Thank you! You'll be notified when we launch.
              </div>
            )}
          </Section>
      </div>

      <footer className="footer">
        © 2025 Huron River Trading. All Rights Reserved.
      </footer>
    </div>
  );
};

const MarketDataExample = ({ icon, title, items }) => (
  <div className="example-card">
    <div className="example-header">
      {icon}
      <h4>{title}</h4>
    </div>
    {items.map((item, index) => (
      <div className="example-item" key={index}>
        <span className="entity">{item.entity}</span>
        <div className="relation-arrow-container">
            <span className="relation-text"> {item.relation} </span>
            <div className="relation-arrow"></div>
        </div>
        <span className="entity">{item.value}</span>
      </div>
    ))}
  </div>
);

const LayerCard = ({ icon, title, description }) => (
  <div className="layer-visual-card">
    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
        {icon}
        <h4 className="layer-title">{title}</h4>
    </div>
    <p className="layer-description">{description}</p>
  </div>
);

const CapabilityCard = ({ icon, name, description, color }) => (
    <div className={`capability-card ${color ? `capability-card-${color}` : ''}`}>
      <div className="capability-header">
          {icon}
          <h4 className="capability-title">{name}</h4>
      </div>
      <p className="capability-description">{description}</p>
    </div>
  );

export default App;

