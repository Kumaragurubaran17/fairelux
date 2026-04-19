import React, { useState } from 'react';
import logomark from '../assets/logomark.svg';
import wordmark from '../assets/wordmark.svg';
import './BrandBook.css';
import logoClearspaceRaw from '../assets/Logo clearspace.svg?raw';
import logomarkClearspaceRaw from '../assets/Logomark clearspace.svg?raw';
import xRaw from '../assets/x.svg?raw';
import x2Raw from '../assets/x2.svg?raw';
import wordmarkRaw from '../assets/wordmark.svg?raw';
import logomarkRaw from '../assets/logomark.svg?raw';
import iconsSvg from '../assets/icons.svg';
import gridsSvg from '../assets/grids.svg';
import appBlue from '../assets/application-bluetheme.png';
import appGreen from '../assets/application-greentheme.png';
import appWine from '../assets/application-winetheme.png';



const ThemedSVG = ({ raw, theme, colorOvr, width, maxWidth }) => {
  if (!raw) return null;
  const darkColor = colorOvr || theme.primary[2].hex;
  const lightColor = theme.primary[0].hex;
  let modified = raw
    .replace(/white/gi, darkColor)
    .replace(/#752D36/gi, darkColor)
    .replace(/#C44749/gi, lightColor)
    .replace(/#FA817A/gi, lightColor);
  return (
    <div 
      className="bb-dyn-svg"
      dangerouslySetInnerHTML={{ __html: modified }} 
      style={{
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: width || 'auto',
        maxWidth: maxWidth || 'none'
      }} 
    />
  );
};

const themesConfig = {
  'theme-1': {
    id: 'theme-1',
    name: 'Theme 1',
    primary: [
      { name: 'Wine - Light', hex: '#D28E98', r: 210, g: 142, b: 152, darkText: true },
      { name: 'Cream - Light', hex: '#F7F2EA', r: 247, g: 242, b: 234, darkText: true },
      { name: 'Wine - Dark', hex: '#833742', r: 131, g: 55, b: 66, darkText: false },
      { name: 'Cream - Dark', hex: '#524027', r: 82, g: 64, b: 39, darkText: false }
    ],
    secondary: [
      { name: 'Petal', hex: '#5F1C23', r: 95, g: 28, b: 35, darkText: false },
      { name: 'Nectar', hex: '#DAA957', r: 218, g: 169, b: 87, darkText: true }
    ],
    accents: [
      { name: "Primary Accent - Wine", prefix: "WINE", colors: ["#FCF2F4", "#F4DFE2", "#EAC7CC", "#DFABB2", "#D28E98", "#C36F7C", "#A2515E", "#833742", "#641E28", "#460914", "#280108"] },
      { name: "Primary Accent - Cream", prefix: "CREAM", colors: ["#FFFFFF", "#FDFBF8", "#F7F2EA", "#EFE7D8", "#DFD2BE", "#CDBBA2", "#B9A387", "#A38A6B", "#8A7252", "#6F593B", "#524027"] },
      { name: "Secondary Accent - Petal", prefix: "PETAL", colors: ["#FDF3F4", "#F9E1E4", "#F2C7CC", "#E9A8AE", "#DF868F", "#CA5D67", "#A5444D", "#812E36", "#5F1C23", "#3F0D14", "#240509"] },
      { name: "Secondary Accent - Nectar", prefix: "NECTAR", colors: ["#FEFDF6", "#FCF7E6", "#F8EBCB", "#F2DAA9", "#E8C482", "#DAA957", "#B98A41", "#966D2D", "#73511D", "#513710", "#332107"] }
    ],
    settingsTitle: "FAIRELUX: BERRY THEME SETTINGS",
    shopifySettings: [
      { element: 'Background', name: 'Soft Linen', hex: '#FCF9F9' },
      { element: 'Solid Button BG', name: 'Wine Dark', hex: '#7B2E35' },
      { element: 'Solid Button Label', name: 'Bare Pink', hex: '#FCF2F4' },
      { element: 'Outline Button', name: 'Rose Ash', hex: '#D09EA3' },
      { element: 'Announcement Bar', name: 'Wine Dark', hex: '#7B2E35' },
      { element: 'Text', name: 'Charcoal', hex: '#1A1A1A' },
      { element: 'Shadow', name: 'Soft Drop', hex: 'rgba(0,0,0,0.05)' }
    ]
  },
  'theme-2': {
    id: 'theme-2',
    name: 'Theme 2',
    primary: [
      { name: 'Ocean - Light', hex: '#85A3BA', r: 133, g: 163, b: 186, darkText: true },
      { name: 'Sand - Light', hex: '#F8F5F2', r: 248, g: 245, b: 242, darkText: true },
      { name: 'Ocean - Dark', hex: '#375D79', r: 55, g: 93, b: 121, darkText: false },
      { name: 'Sand - Dark', hex: '#47433B', r: 71, g: 67, b: 59, darkText: false }
    ],
    secondary: [
      { name: 'Deep Water', hex: '#020717', r: 2, g: 7, b: 23, darkText: false },
      { name: 'Sunlit', hex: '#F3C556', r: 243, g: 197, b: 86, darkText: true }
    ],
    accents: [
      { name: "Primary Accent - Ocean", prefix: "OCEAN", colors: ["#F0F4F8", "#DAE5F0", "#BECFE0", "#A1B9CE", "#85A3BA", "#6A8CA6", "#507590", "#375D79", "#204661", "#0D2E47", "#03192B"] },
      { name: "Primary Accent - Sand", prefix: "SAND", colors: ["#FFFFFF", "#FDFCFB", "#F8F5F2", "#EFEBE5", "#E1DDD4", "#CFCAC0", "#BAB6A9", "#9F9B8F", "#827E72", "#666157", "#47433B"] },
      { name: "Secondary Accent - Deep", prefix: "DEEP", colors: ["#E6EDF2", "#B3CDE0", "#80ABCE", "#5488B5", "#32669C", "#18457D", "#0A2859", "#061536", "#020717", "#000105", "#000000"] },
      { name: "Secondary Accent - Sunlit", prefix: "SUNLIT", colors: ["#FEFDF7", "#FDFAE5", "#FDF4CA", "#FEE8A9", "#FFDA84", "#F3C556", "#D7A233", "#B17D16", "#875C06", "#593C01", "#332200"] }
    ],
    settingsTitle: "FAIRELUX: OCEANIC THEME SETTINGS",
    shopifySettings: [
      { element: 'Background', name: 'Seafoam', hex: '#F0F4F8' },
      { element: 'Solid Button BG', name: 'Ocean Dark', hex: '#184A66' },
      { element: 'Solid Button Label', name: 'Cloud White', hex: '#FDFCFB' },
      { element: 'Outline Button', name: 'Wave Crest', hex: '#85A3BA' },
      { element: 'Announcement Bar', name: 'Ocean Dark', hex: '#184A66' },
      { element: 'Text', name: 'Deep Abyss', hex: '#0D2E47' },
      { element: 'Shadow', name: 'Soft Drop', hex: 'rgba(0,0,0,0.06)' }
    ]
  },
  'theme-3': {
    id: 'theme-3',
    name: 'Theme 3',
    primary: [
      { name: 'Forest - Light', hex: '#7B927D', r: 123, g: 146, b: 125, darkText: true },
      { name: 'Stone - Light', hex: '#F6F7F5', r: 246, g: 247, b: 245, darkText: true },
      { name: 'Forest - Dark', hex: '#293B2D', r: 41, g: 59, b: 45, darkText: false },
      { name: 'Stone - Dark', hex: '#343B33', r: 52, g: 59, b: 51, darkText: false }
    ],
    secondary: [
      { name: 'Moss', hex: '#0A1F02', r: 10, g: 31, b: 2, darkText: false },
      { name: 'Earth', hex: '#996D3C', r: 153, g: 109, b: 60, darkText: false }
    ],
    accents: [
      { name: "Primary Accent - Forest", prefix: "FOREST", colors: ["#F0F5F1", "#DAE5DB", "#B9CBB9", "#9BAF9C", "#7B927D", "#5E7561", "#425746", "#293B2D", "#152119", "#080F0B", "#000000"] },
      { name: "Primary Accent - Stone", prefix: "STONE", colors: ["#FFFFFF", "#FDFDFD", "#F6F7F5", "#EBEDE9", "#DDE0DC", "#C7CBC5", "#ABB0A9", "#8D928B", "#6E756C", "#50574F", "#343B33"] },
      { name: "Secondary Accent - Moss", prefix: "MOSS", colors: ["#F4F9F2", "#DFEDDA", "#AFCF9E", "#83B269", "#5E9441", "#427329", "#295416", "#153308", "#0A1F02", "#020D00", "#000000"] },
      { name: "Secondary Accent - Earth", prefix: "EARTH", colors: ["#FBF8F5", "#F3EBE3", "#E3CDAF", "#D1AE82", "#B98D5B", "#996D3C", "#754E22", "#523315", "#331D08", "#170B01", "#050100"] }
    ],
    settingsTitle: "FAIRELUX: BOTANICAL THEME SETTINGS",
    shopifySettings: [
      { element: 'Background', name: 'Sprout White', hex: '#F4F8F4' },
      { element: 'Solid Button BG', name: 'Deep Forest', hex: '#1B3022' },
      { element: 'Solid Button Label', name: 'Mist Green', hex: '#E9F0E9' },
      { element: 'Outline Button', name: 'Sage Leaf', hex: '#8AA897' },
      { element: 'Announcement Bar', name: 'Deep Forest', hex: '#1B3022' },
      { element: 'Text', name: 'Slate Oxide', hex: '#3C3C3C' },
      { element: 'Shadow', name: 'Botanical Drop', hex: 'rgba(27,48,34,0.08)' }
    ]
  }
};

const CopySwatch = ({ hex, children, className, style }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`copy-swatch ${className}`} style={style} onClick={handleCopy}>
      <div className={`copy-overlay ${copied ? 'copied' : ''}`}>
        {copied ? 'Copied!' : 'Copy'}
      </div>
      {children}
    </div>
  );
};

const BrandBook = ({ activeThemeId = 'theme-3', setActiveThemeId, setCurrentPage }) => {
  const currentTheme = themesConfig[activeThemeId];
  const [activeIndex, setActiveIndex] = useState(0);

  const appMap = {
    'theme-2': { img: appBlue, name: 'Azure / Oceanic' },
    'theme-3': { img: appGreen, name: 'Botanical / Forest' },
    'theme-1': { img: appWine, name: 'Burgundy / Wine' }
  };
  const activeApp = appMap[activeThemeId] || appMap['theme-3'];

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index) => {
    const container = document.querySelector('.bb-scroll-container');
    if (container) {
      container.scrollTo({
        top: index * container.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const slides = [
    (
      <div className="bb-page bb-cover-frame" style={{ background: currentTheme.primary[2].hex }}>
         <div className="bb-cover-top">
            <span className="bb-tag">Brand Guidelines</span>
            <span className="bb-tag">Version 1.0 • Jan 2026</span>
         </div>
         <div className="bb-cover-center">
            <img src={wordmark} alt="Fairelux" className="bb-wordmark-invert" />
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame">
         <h1 className="bb-huge-title">TABLE OF CONTENTS</h1>
         <div className="bb-toc-container">
           <ul className="bb-toc-list">
              <li><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
              <li><span className="bb-num">02</span> <span className="bb-line"></span> Identity at a glance</li>
              <li><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
              <li><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
              <li><span className="bb-num">05</span> <span className="bb-line"></span> Colors</li>
              <li><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
              <li><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
              <li><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
               <li><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
           </ul>
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame bb-chapter-frame">
         <h1 className="bb-huge-title">OUR BRAND</h1>
         <div className="bb-page-number">01</div>
         <div className="bb-chapter-toc">
           <ul className="bb-toc-list smaller">
              <li className="bb-active"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand ( Who we are | Mission | Customers )</li>
              <li className="bb-muted"><span className="bb-num">02</span> <span className="bb-line"></span> Identity at a glance</li>
              <li className="bb-muted"><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
              <li className="bb-muted"><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
              <li className="bb-muted"><span className="bb-num">05</span> <span className="bb-line"></span> Colors</li>
              <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
              <li className="bb-muted"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
              <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
              <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
           </ul>
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame">
         <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
            <h2>Who we are</h2>
            <span className="bb-section-indicator">01 — OUR STORY</span>
         </div>
         <div className="bb-split-content">
            <div className="bb-content-left relative-box">
               <h3 className="bb-statement">We believe the future of beauty is cellular.</h3>
               <div className="bb-watermark-wrapper">
                 <img src={logomark} className="bb-logo-watermark" alt="Fairelux symbol" />
               </div>
            </div>
            <div className="bb-content-right bb-text-columns">
               <div className="bb-text-col">
                 <p>In an industry saturated with noise and synthetic promises, Fairelux was born from a singular pursuit: Luminousity. We don't believe in "fixing" skin; we believe in optimizing its natural resilience. By bridging the gap between high-science dermatology and the ancient ritual of self-care, we create more than products—we create longevity.</p>
                 <br />
                 <p>Our founders, Vamsi Krishna and Janani, envisioned a brand where "Fairness" refers to integrity of ingredients and "Lux" refers to the light that emanates from healthy, balanced skin. Every formula is a testament to this balance.</p>
               </div>
               <div className="bb-text-col">
                 <p>At Fairelux, our mission is to curate a holistic ecosystem for the modern individual. While we begin with the external—cosmetics and skincare that define elegance—our long-term vision scales into the internal. From topical serums to pharmaceutical-grade supplements, we are building a world of 360-degree wellness.</p>
                 <br />
                 <p>We design for the minimalists, the architects of their own lives, and those who understand that true luxury is found in the essential. Our journey is just beginning, and we invite you to experience the science of light.</p>
               </div>
            </div>
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame">
         <div className="bb-section-header">
            <h2>Our mission</h2>
            <span className="bb-section-indicator">02 — OUR BRAND</span>
         </div>
         <div className="bb-split-content">
            <div className="bb-content-left bb-narrow">
               <p className="bb-small-text">This is the soul of Fairelux. We are dedicated to the pursuit of Luminousity - the belief that skincare is not merely a surface-level ritual, but a foundational act of self-respect.</p>
               <br />
               <p className="bb-small-text">Our mission serves as our north star for product formulation, ethical sourcing, and architectural design. It ensures that every serum, cream, and future supplement we craft is aligned with our core philosophy: that luxury should be as transparent as it is transformative.</p>
            </div>
            <div className="bb-content-right bb-wide align-center-vert">
               <h3 className="bb-statement large">We cultivate the harmony between clinical precision and the ritual of radiance, for the discerning.</h3>
            </div>
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame">
         <div className="bb-section-header">
            <h2>Our customers</h2>
            <span className="bb-section-indicator">01 — OUR BRAND</span>
         </div>
         <div className="bb-split-content multi">
            <div className="bb-content-left bb-narrow">
               <p className="bb-small-text">An overview of the Fairelux community and the discerning individuals we serve.</p>
               <br />
               <p className="bb-small-text">Understanding the lifestyle of our patrons ensures that every formula and touchpoint resonates with their pursuit of essential luxury.</p>
            </div>
            <div className="bb-content-right bb-grid-columns">
               <div className="bb-grid-item">
                 <h4>Who do we help?</h4>
                 <p>We serve the modern essentialist. Our patrons are high-achieving individuals who value time, transparency, and the intersection of science and aesthetics.</p>
                 <br />
                 <p>They are not seeking temporary trends; they are investing in longevity. Whether they are navigating the demands of a global career or the quiet moments of a morning ritual, they demand products that perform with clinical precision while providing a sensory experience of calm. They choose Fairelux because they believe self-care is a foundational pillar of their performance.</p>
               </div>
               <div className="bb-grid-item">
                 <h4>Why choose us?</h4>
                 <p>At Fairelux, we eliminate the friction between "natural" and "effective." While others saturate the market with complex, multi-step routines, we provide architectural simplicity.</p>
                 <br />
                 <p>We curate high-potency formulations that adapt to the wearer. Our commitment to Luminousity means we prioritize skin health and cellular vitality above all else. By choosing Fairelux, our customers are choosing a brand that acts as a quiet authority in their cabinet—providing consistent, premium results that allow their natural radiance to take center stage.</p>
               </div>
            </div>
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame bb-chapter-frame">
         <h1 className="bb-huge-title">IDENTITY ON A PAGE</h1>
         <div className="bb-page-number">02</div>
         <div className="bb-chapter-toc">
           <ul className="bb-toc-list smaller">
              <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
              <li className="bb-active"><span className="bb-num">02</span> <span className="bb-line"></span> Identity on a page</li>
              <li className="bb-muted"><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
              <li className="bb-muted"><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
              <li className="bb-muted"><span className="bb-num">05</span> <span className="bb-line"></span> Colors</li>
              <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
              <li className="bb-muted"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
              <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
              <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
           </ul>
         </div>
       </div>
    ),
    (
      <div className="bb-page bb-sidebar-layout">
        <div className="bb-sidebar-left">
           <h1>Identity on<br />a page</h1>
           <h3>We harmonize clinical precision with the ritual of radiance to elevate the standard of personal care.</h3>
           <p>Fairelux provides the modern essentialist with a curated ecosystem of high-potency skincare and wellness supplements.</p>
           <p>We champion "Quiet Luxury" - where the integrity of the formula and the clarity of the aesthetic speak louder than any trend.</p>
           <h5 className="bb-labels-title">Tone of Voice</h5>
           <div className="bb-badges">
             <span className="bb-badge">Sophisticated</span>
             <span className="bb-badge">Calm</span>
             <span className="bb-badge">Authoritative</span>
             <span className="bb-badge">Precise</span>
             <span className="bb-badge">Timeless</span>
           </div>
        </div>
        <div className="bb-sidebar-right bb-identity-right">
           <div className="bb-identity-top">
             <div className="bb-identity-logos">
               <div className="bb-glance-item">
                 <h5>Logo</h5>
                 <img src={wordmark} alt="wordmark" className="bb-id-wordmark" />
               </div>
               <div className="bb-glance-item" style={{marginTop: '40px'}}>
                 <h5>Logomark</h5>
                 <img src={logomark} alt="logomark" className="bb-id-logomark" />
               </div>
             </div>
           </div>
           
           <div className="bb-identity-middle">
             <div className="bb-glance-item">
               <h5>Titles typeface</h5>
               <div className="bb-glance-type">Cormorant Garamond</div>
             </div>
             <div className="bb-glance-item" style={{marginTop: '40px'}}>
               <h5>Text typeface</h5>
               <div className="bb-glance-type sans">Satoshi</div>
             </div>
           </div>

           <div className="bb-identity-bottom">
              <div className="bb-color-row">
                <h5>Primary colours</h5>
                <div className="bb-glance-colors seamless">
                  {currentTheme.primary.map((color, i) => (
                    <div key={i} className="bb-glance-color" style={{background: color.hex}}></div>
                  ))}
                </div>
              </div>
              <div className="bb-color-row" style={{marginTop: '32px'}}>
                <h5>Secondary colours</h5>
                <div className="bb-glance-colors seamless">
                  {currentTheme.secondary.slice(0, 2).map((color, i) => (
                    <div key={i} className="bb-glance-color" style={{background: color.hex, flex: 1.5}}></div>
                  ))}
                  <div className="bb-glance-color" style={{background: '#FFFFFF', flex: 1.5, border: '1px solid #EAEAEA', borderLeft: 'none'}}></div>
                </div>
              </div>
           </div>
        </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame bb-chapter-frame">
         <h1 className="bb-huge-title">TONE OF VOICE</h1>
         <div className="bb-page-number">03</div>
         <div className="bb-chapter-toc">
           <ul className="bb-toc-list smaller">
              <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
              <li className="bb-muted"><span className="bb-num">02</span> <span className="bb-line"></span> Identity on a page</li>
              <li className="bb-active"><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
              <li className="bb-muted"><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
              <li className="bb-muted"><span className="bb-num">05</span> <span className="bb-line"></span> Colors</li>
              <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
              <li className="bb-muted"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
              <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
              <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
           </ul>
         </div>
      </div>
    ),
    (
      <div className="bb-page bb-content-frame">
         <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
            <h2>How we speak</h2>
            <span className="bb-section-indicator">03 — TONE OF VOICE</span>
         </div>
         <div className="bb-split-content" style={{marginTop: '40px'}}>
            <div className="bb-content-left bb-narrow">
               <p className="bb-small-text">Our voice is a reflection of our commitment to Luminousity: a blend of clinical authority, effortless radiance, and an unwavering focus on the essential.</p>
               <br />
               <p className="bb-small-text">We communicate with intentionality, ensuring that every word serves to clarify, inspire, and elevate the daily ritual of our global community.</p>
            </div>
            <div className="bb-content-right bb-wide bb-tov-grid">
               <div className="bb-tov-item">
                 <h4><span>&gt;&gt;</span> Radiant</h4>
                 <p>We speak of the pursuit of internal light and vitality. Our language is optimistic and warm, but never superficial. We revere the joy of a life lived at full capacity, using words that feel as vibrant as the skin we care for.</p>
               </div>
               <div className="bb-tov-item">
                 <h4><span>&gt;&gt;</span> Precise</h4>
                 <p>We are the experts. We use clinical terminology with ease, providing clear, high-definition information. No fluff, no jargon - just the architectural truth about our formulas and their cellular impact.</p>
               </div>
               <div className="bb-tov-item">
                 <h4><span>&gt;&gt;</span> Effortless</h4>
                 <p>True luxury never tries too hard. Our sentences are structured with presence and white space. We communicate with a quiet confidence that doesn't need to shout to be heard. We lead with the "Why" and let the quality speak for itself.</p>
               </div>
               <div className="bb-tov-item">
                 <h4><span>&gt;&gt;</span> Dynamic</h4>
                 <p>We are a brand in motion. Our voice reflects the energy of a professional who is both capable and relaxed. We use active verbs and rhythmic phrasing to mirror the sense of movement and joy in our photography.</p>
               </div>
               <div className="bb-tov-item">
                 <h4><span>&gt;&gt;</span> Inclusive</h4>
                 <p>Our wisdom is universal. We speak to humanity as a whole, celebrating radiance across all ages, genders, and backgrounds. We are a global authority that welcomes everyone into the ritual of longevity.</p>
              </div>
           </div>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame bb-chapter-frame">
        <h1 className="bb-huge-title">LOGO</h1>
        <div className="bb-page-number">04</div>
        <div className="bb-chapter-toc">
          <ul className="bb-toc-list smaller">
             <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
             <li className="bb-muted"><span className="bb-num">02</span> <span className="bb-line"></span> Identity on a page</li>
             <li className="bb-muted"><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
             <li className="bb-active"><span className="bb-num">04</span> <span className="bb-line"></span> Logo ( Logos | Variations | Clearspace )</li>
             <li className="bb-muted"><span className="bb-num">05</span> <span className="bb-line"></span> Colors</li>
             <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
             <li className="bb-muted"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
             <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
             <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
          </ul>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame">
        <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
           <h2>Logos</h2>
           <span className="bb-section-indicator">04 — LOGO</span>
        </div>
        <div className="bb-split-content multi">
           <div className="bb-content-left bb-narrow">
              <p className="bb-small-text">The Fairelux logo embodies the harmony of form and function. It features an elegant logotype paired with a distinctive logomark.</p>
              <br />
              <p className="bb-small-text">This typographic direction conveys both clinical precision and a fluid grace. This makes our identity adaptable across digital platforms, product packaging, and editorial contexts without sacrificing its premium character.</p>
              <br />
              <p className="bb-small-text">The mark is composed of an asymmetrical motif set within a unified frame—signifying growth, vitality, and architectural balance.</p>
           </div>
           <div className="bb-content-right bb-wide bb-grid-columns" style={{rowGap: '40px', alignItems: 'center'}}>
               <div className="bb-grid-item" style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                 <h5 style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '24px'}}>Primary</h5>
                 <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '100px'}}>
                    <ThemedSVG raw={logomarkRaw} theme={currentTheme} width="32px" />
                    <ThemedSVG raw={wordmarkRaw} theme={currentTheme} width="112px" />
                 </div>
               </div>
               <div className="bb-grid-item" style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                 <h5 style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '24px'}}>Logotype</h5>
                 <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px'}}>
                    <ThemedSVG raw={wordmarkRaw} theme={currentTheme} width="140px" />
                 </div>
               </div>
               <div className="bb-grid-item" style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                 <h5 style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '24px'}}>Stacked</h5>
                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', minHeight: '100px'}}>
                    <ThemedSVG raw={logomarkRaw} theme={currentTheme} width="36px" />
                    <ThemedSVG raw={wordmarkRaw} theme={currentTheme} width="112px" />
                 </div>
               </div>
               <div className="bb-grid-item" style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                 <h5 style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '24px'}}>Logomark</h5>
                 <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px'}}>
                    <ThemedSVG raw={logomarkRaw} theme={currentTheme} width="56px" />
                 </div>
               </div>
           </div>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame">
        <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
           <h2>Colour Variations</h2>
           <span className="bb-section-indicator">04 — LOGO</span>
        </div>
        <div className="bb-split-content multi">
           <div className="bb-content-left bb-narrow">
              <p className="bb-small-text">For optimal context, ensure the logo maintains maximum legibility across its applications.</p>
              <br />
              <p className="bb-small-text">The primary palette provides clear guidelines on how to correctly present the secondary forms in high contrast.</p>
           </div>
           <div className="bb-content-right bb-wide" style={{display: 'flex', flexDirection: 'row', gap: '0', alignItems: 'stretch', borderRadius: '4px', overflow: 'hidden', border: '1px solid #EBEBEB'}}>
               <div style={{flex: 1, backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '48px', padding: '60px 0'}}>
                 <h5 style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '20px'}}>Light background</h5>
                 
                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <span style={{fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.05em'}}>Standard branding</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                       <ThemedSVG raw={logomarkRaw} theme={currentTheme} width="40px" />
                       <ThemedSVG raw={wordmarkRaw} theme={currentTheme} width="140px" />
                    </div>
                 </div>

                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <span style={{fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.05em'}}>Standard mark + mono type</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                       <ThemedSVG raw={logomarkRaw} theme={currentTheme} width="40px" />
                       <ThemedSVG raw={wordmarkRaw} theme={currentTheme} colorOvr="#1A1A1A" width="140px" />
                    </div>
                 </div>

                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <span style={{fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.05em'}}>Mono branding</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                       <ThemedSVG raw={logomarkRaw} theme={currentTheme} colorOvr="#1A1A1A" width="40px" />
                       <ThemedSVG raw={wordmarkRaw} theme={currentTheme} colorOvr="#1A1A1A" width="140px" />
                    </div>
                 </div>
               </div>
               
               <div style={{flex: 1, backgroundColor: currentTheme.primary[2].hex, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '48px', padding: '60px 0'}}>
                 <span style={{background: 'white', color: currentTheme.primary[2].hex, padding: '4px 12px', borderRadius: '16px', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '20px'}}>Dark background</span>
                 
                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <span style={{fontSize: '0.6rem', textTransform: 'uppercase', color: 'white', opacity: 0.4, letterSpacing: '0.05em'}}>Standard branding</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                       <ThemedSVG raw={logomarkRaw} theme={currentTheme} colorOvr={currentTheme.secondary[1].hex} width="40px" />
                       <ThemedSVG raw={wordmarkRaw} theme={currentTheme} colorOvr={currentTheme.secondary[1].hex} width="140px" />
                    </div>
                 </div>

                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <span style={{fontSize: '0.6rem', textTransform: 'uppercase', color: 'white', opacity: 0.4, letterSpacing: '0.05em'}}>Standard mark + mono type</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                       <ThemedSVG raw={logomarkRaw} theme={currentTheme} colorOvr={currentTheme.secondary[1].hex} width="40px" />
                       <ThemedSVG raw={wordmarkRaw} theme={currentTheme} colorOvr="#FFFFFF" width="140px" />
                    </div>
                 </div>

                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <span style={{fontSize: '0.6rem', textTransform: 'uppercase', color: 'white', opacity: 0.4, letterSpacing: '0.05em'}}>Mono branding</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                       <ThemedSVG raw={logomarkRaw} theme={currentTheme} colorOvr="#FFFFFF" width="40px" />
                       <ThemedSVG raw={wordmarkRaw} theme={currentTheme} colorOvr="#FFFFFF" width="140px" />
                    </div>
                 </div>
               </div>
           </div>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame">
        <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
           <h2>Logo clearspace</h2>
           <span className="bb-section-indicator">04 — LOGO</span>
        </div>
        <div className="bb-split-content multi">
           <div className="bb-content-left bb-narrow" style={{paddingRight: '60px'}}>
              <p className="bb-small-text">A logo stands out when there are plenty of white space in the surrounds. This size represents the minimum space around the logo and must be applied in all cases.</p>
              <br />
              <p className="bb-small-text">Of course, it is allowed, and in some cases it is recommended to go beyond this in order to create a clear and consistent design.</p>
           </div>
           <div className="bb-content-right bb-wide" style={{display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', justifyContent: 'center'}}>
               <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <ThemedSVG raw={logoClearspaceRaw} theme={currentTheme} width="520px" />
               </div>
               <div style={{display: 'flex', gap: '80px', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                   <ThemedSVG raw={logomarkClearspaceRaw} theme={currentTheme} width="200px" />
                   <div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
                       <ThemedSVG raw={xRaw} theme={currentTheme} width="130px" />
                       <ThemedSVG raw={x2Raw} theme={currentTheme} width="130px" />
                   </div>
               </div>
           </div>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame bb-chapter-frame">
        <h1 className="bb-huge-title">COLORS</h1>
        <div className="bb-page-number">05</div>
        <div className="bb-chapter-toc">
          <ul className="bb-toc-list smaller">
             <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
             <li className="bb-muted"><span className="bb-num">02</span> <span className="bb-line"></span> Identity on a page</li>
             <li className="bb-muted"><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
             <li className="bb-muted"><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
             <li className="bb-active"><span className="bb-num">05</span> <span className="bb-line"></span> Colors ( Primary | Secondary | Accent )</li>
             <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
             <li className="bb-muted"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
             <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
             <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
          </ul>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame">
        <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
           <h2 style={{color: currentTheme.primary[2].hex}}>Primary colors</h2>
           <span className="bb-section-indicator">05 — COLORS</span>
        </div>
        <div className="bb-split-content multi" style={{paddingBottom: '100px'}}>
           <div className="bb-content-left bb-narrow">
              <p className="bb-small-text">Primary colors are the foundational colors for the brand. They should appear most frequently in our communications and palettes.</p>
              <br />
              <p className="bb-small-text">For design consistency, use the light and dark shades across all different screens and assets. The required color pairings are included in our assets, while also maintaining the standard accessibility requirements.</p>
           </div>
           <div className="bb-content-right bb-wide">
               <div className="bb-color-swatch-grid-2x2" style={{marginBottom: '60px'}}>
                  {currentTheme.primary.map((color, idx) => (
                    <CopySwatch key={idx} hex={color.hex} className="bb-swatch-detail" style={{backgroundColor: color.hex, color: color.darkText ? '#1A1A1A' : '#FFFFFF'}}>
                       <div className="bb-swatch-tags">
                          <span>{idx < 2 ? '70' : '50'}</span>
                          <span>{color.darkText ? 'DRK' : 'LHT'}</span>
                       </div>
                       <div className="bb-swatch-info">
                          <h4 className="bb-swatch-name">{color.name}</h4>
                          <span className="bb-swatch-hex">{color.hex}</span>
                          <div className="bb-swatch-rgb">
                             <span>R: {color.r}</span>
                             <span>G: {color.g}</span>
                             <span>B: {color.b}</span>
                          </div>
                       </div>
                    </CopySwatch>
                  ))}
               </div>
           </div>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-content-frame">
        <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
           <h2>Secondary colors</h2>
           <span className="bb-section-indicator">05 — COLORS</span>
        </div>
        <div className="bb-split-content multi">
           <div className="bb-content-left bb-narrow">
              <p className="bb-small-text">Secondary colors complement the primary colors. They should be used sparingly in our communications and palettes.</p>
              <br />
              <p className="bb-small-text">In fact, most color pairs will be solid.</p>
           </div>
           <div className="bb-content-right bb-wide">
               <div style={{display: 'flex', gap: '2px', background: '#EBEBEB', border: '1px solid #EBEBEB', borderRadius: '8px', overflow: 'hidden', height: '400px'}}>
                  {currentTheme.secondary.slice(0, 2).map((color, idx) => (
                    <CopySwatch key={idx} hex={color.hex} className="bb-swatch-detail tall" style={{backgroundColor: color.hex, color: color.darkText ? '#1A1A1A' : '#FFFFFF', flex: 1}}>
                       <div className="bb-swatch-tags">
                          <span>{idx === 0 ? '90' : '30'}</span>
                          <span>{color.darkText ? 'DRK' : 'LHT'}</span>
                       </div>
                       <div className="bb-swatch-info">
                          <h4 className="bb-swatch-name">{color.name}</h4>
                          <span className="bb-swatch-hex">{color.hex}</span>
                          <div className="bb-swatch-rgb">
                             <span>R: {color.r}</span>
                             <span>G: {color.g}</span>
                             <span>B: {color.b}</span>
                          </div>
                       </div>
                    </CopySwatch>
                  ))}
               </div>
           </div>
        </div>
     </div>
    ),
    (
     <div className="bb-page bb-sidebar-layout">
        <div className="bb-sidebar-left">
           <h1>Accent<br />colors</h1>
           <p className="bb-small-text" style={{marginTop: '24px'}}>Our accent colors are used for highlighting important elements and sections. They provide a spectrum of shades for each brand pillar.</p>
           <br />
           <p className="bb-small-text">Use these to create depth and emphasis in interactive components and data visualizations.</p>
        </div>
        <div className="bb-sidebar-right bb-accent-right-scroller">
           <div className="bb-accent-rows">
              {currentTheme.accents.map((accent, idx) => (
                <div key={idx} className="bb-accent-row-group" style={{marginBottom: '48px'}}>
                   <h5 className="bb-accent-row-title">{accent.name}</h5>
                   <div className="bb-accent-row-flex" style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                      {accent.colors.map((c, i) => {
                        const weights = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90];
                        const weight = weights[i] || i * 10;
                        return (
                          <div key={i} style={{display: 'flex', flexDirection: 'column', gap: '8px', width: 'calc(9.09% - 8px)', minWidth: '40px'}}>
                            <CopySwatch hex={c} className="bb-accent-box" style={{backgroundColor: c, width: '100%', height: '48px', borderRadius: '1px'}} />
                            <div style={{fontSize: '0.45rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.05em', whiteSpace: 'nowrap'}}>
                               {c.replace('#', '')} — {weight}
                            </div>
                          </div>
                        );
                      })}
                   </div>
                </div>
              ))}
           </div>
               
               <div className="bb-shopify-map" style={{marginTop: '80px'}}>
                  <h4 className="bb-color-heading">Shopify Mapping Variable Grid</h4>
                  <div className="bb-table-mock">
                     <div className="bb-tr header">
                        <span>Element</span>
                        <span>Key</span>
                        <span>Value</span>
                     </div>
                     {currentTheme.shopifySettings.map((item, idx) => (
                        <div key={idx} className="bb-tr">
                           <span style={{fontWeight: 600}}>{item.element}</span>
                           <span>{item.name}</span>
                            <span style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                               <div style={{width: '24px', height: '12px', background: item.hex, borderRadius: '2px', border: '1px solid rgba(0,0,0,0.1)'}}></div>
                               {item.hex}
                            </span>
                        </div>
                     ))}
                  </div>
               </div>
           </div>
        </div>
    ),
    (
    <div className="bb-page bb-content-frame bb-chapter-frame">
       <h1 className="bb-huge-title">TYPOGRAPHY</h1>
       <div className="bb-page-number">06</div>
       <div className="bb-chapter-toc">
         <ul className="bb-toc-list smaller">
            <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
            <li className="bb-muted"><span className="bb-num">02</span> <span className="bb-line"></span> Identity on a page</li>
            <li className="bb-muted"><span className="bb-num">03</span> <span className="bb-line"></span> Tone of Voice</li>
            <li className="bb-muted"><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
            <li className="bb-muted"><span className="bb-num">05</span> <span className="bb-line"></span> Colors</li>
            <li className="bb-active"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
            <li className="bb-muted"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
            <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
            <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
         </ul>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame">
       <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
          <h2>Fonts</h2>
          <span className="bb-section-indicator">06 — TYPOGRAPHY</span>
       </div>
       <div className="bb-split-content multi">
          <div className="bb-content-left bb-narrow">
             <p className="bb-small-text" style={{ maxWidth: '280px' }}>This section outlines the typography guidelines for the brand.</p>
             <br />
             <p className="bb-small-text" style={{ maxWidth: '280px' }}>It includes:<br />1. Title font: The main typeface used for headlines and key messaging.<br />2. Text font: Used for body text and supporting content.</p>
             <br />
             <div style={{ marginTop: '40px' }}>
                <div style={{ marginBottom: '24px' }}>
                   <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '4px' }}>Cormorant Garamond</h4>
                   <a href="https://fonts.google.com/specimen/Cormorant+Garamond" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', opacity: 0.5, textDecoration: 'underline' }}>fonts.google.com/specimen/Cormorant+Garamond</a>
                </div>
                <div>
                   <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '4px' }}>Satoshi</h4>
                   <a href="https://font.download/font/satoshi" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', opacity: 0.5, textDecoration: 'underline' }}>font.download/font/satoshi</a>
                </div>
             </div>
          </div>
          <div className="bb-content-right bb-wide" style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '40px' }}>
             <div style={{ borderBottom: '1px solid #F0F0F0', paddingBottom: '32px' }}>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.5, letterSpacing: '0.1em' }}>Titles</span>
                <h1 style={{ fontSize: '3.8rem', fontFamily: 'var(--bb-font-title)', fontWeight: 500, margin: '8px 0', lineHeight: 1.1 }}>Cormorant Garamond</h1>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                   <span style={{ fontSize: '1.5rem', fontFamily: 'var(--bb-font-title)', fontWeight: 700 }}>Bold</span>
                   <span style={{ fontSize: '1.5rem', fontFamily: 'var(--bb-font-title)', fontWeight: 600 }}>Semibold</span>
                </div>
             </div>
             <div>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.5, letterSpacing: '0.1em' }}>Text</span>
                <h1 style={{ fontSize: '3.8rem', fontFamily: 'var(--bb-font-text)', fontWeight: 500, margin: '8px 0', lineHeight: 1.1 }}>Satoshi</h1>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                   <span style={{ fontSize: '1.5rem', fontFamily: 'var(--bb-font-text)', fontWeight: 700 }}>Bold</span>
                   <span style={{ fontSize: '1.5rem', fontFamily: 'var(--bb-font-text)', fontWeight: 400 }}>Regular</span>
                </div>
             </div>
          </div>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame">
       <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
          <h2>Type Hierarchy</h2>
          <span className="bb-section-indicator">06 — TYPOGRAPHY</span>
       </div>
       <div className="bb-split-content multi">
          <div className="bb-content-left bb-narrow">
             <p className="bb-small-text">Consistent use of typographic styles ensures vertical rhythm and clear communication across all brand touchpoints.</p>
          </div>
          <div className="bb-content-right bb-wide">
             <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
                <div style={{display: 'flex', borderBottom: '1px solid #F0F0F0', paddingBottom: '30px'}}>
                   <div style={{width: '140px', fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4, paddingTop: '10px'}}>Headline Large</div>
                   <div style={{flex: 1}}>
                      <h1 style={{fontSize: '3.5rem', fontFamily: 'var(--bb-font-title)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.01em', margin: 0}}>The balance of clinical precision.</h1>
                      <span style={{fontSize: '0.7rem', marginTop: '12px', display: 'block', opacity: 0.5, letterSpacing: '0.02em'}}>Cormorant Garamond Medium / 56pt / -1% Tracking</span>
                   </div>
                </div>
                <div style={{display: 'flex', borderBottom: '1px solid #F0F0F0', paddingBottom: '30px'}}>
                   <div style={{width: '140px', fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4, paddingTop: '6px'}}>Section Header</div>
                   <div style={{flex: 1}}>
                      <h2 style={{fontSize: '1.8rem', fontFamily: 'var(--bb-font-title)', fontWeight: 600, lineHeight: 1.2, margin: 0}}>Pure, architectural forms derived from nature.</h2>
                      <span style={{fontSize: '0.7rem', marginTop: '10px', display: 'block', opacity: 0.5, letterSpacing: '0.02em'}}>Cormorant Garamond SemiBold / 28.8pt / 1.2 LH</span>
                   </div>
                </div>
                <div style={{display: 'flex'}}>
                   <div style={{width: '140px', fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.4, paddingTop: '4px'}}>Body Text</div>
                   <div style={{flex: 1}}>
                      <p style={{fontSize: '0.95rem', fontFamily: 'var(--bb-font-text)', lineHeight: 1.6, opacity: 0.8, maxWidth: '480px', margin: 0}}>Designed for clarity and grace. Our body typography maintains high legibility for long-form editorial and clinical product descriptions while feeling airy and modern.</p>
                      <span style={{fontSize: '0.7rem', marginTop: '12px', display: 'block', opacity: 0.5, letterSpacing: '0.02em'}}>Satoshi Regular / 15.2pt / 1.6 LH</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame bb-chapter-frame">
       <h1 className="bb-huge-title">ICONS</h1>
       <div className="bb-page-number">07</div>
       <div className="bb-chapter-toc">
         <ul className="bb-toc-list smaller">
            <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
            <li className="bb-muted"><span className="bb-num">04</span> <span className="bb-line"></span> Logo</li>
            <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
            <li className="bb-active"><span className="bb-num">07</span> <span className="bb-line"></span> Icons</li>
            <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
            <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
         </ul>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame">
       <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
          <h2>Visual Language</h2>
          <span className="bb-section-indicator">07 — ICONS</span>
       </div>
       <div className="bb-split-content multi">
          <div className="bb-content-left bb-narrow">
             <p className="bb-small-text">Our iconography system is built on clinical precision and fluid grace.</p>
             <br />
             <p className="bb-small-text">Icons use consistent 1.5pt strokes with slightly rounded terminals to bridge the gap between architectural structure and organic vitality.</p>
          </div>
          <div className="bb-content-right bb-wide" style={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: 'calc(100vh - 250px)' }}>
             <div style={{ flex: 1, backgroundColor: '#FAFAFA', borderRadius: '4px', padding: '20px', overflow: 'auto', border: '1px solid #EAEAEA', display: 'block' }}>
                <div style={{ minWidth: '800px', padding: '20px' }}>
                   <img src={iconsSvg} alt="Icon library" style={{ width: '100%', height: 'auto' }} />
                </div>
             </div>
             <div style={{ marginTop: '30px', padding: '24px 30px', background: '#F9F9F9', borderRadius: '4px', borderLeft: `3px solid ${currentTheme.primary[2].hex}` }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', fontWeight: 600 }}>Master Icon Library</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>The Fairelux icon set is designed on a consistent grid with a 1.5pt to 2pt stroke weight. These elements bridge the gap between architectural precision and organic movement.</p>
             </div>
          </div>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame bb-chapter-frame">
       <h1 className="bb-huge-title">GRAPHIC ELEMENTS</h1>
       <div className="bb-page-number">08</div>
       <div className="bb-chapter-toc">
         <ul className="bb-toc-list smaller">
            <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
            <li className="bb-muted"><span className="bb-num">06</span> <span className="bb-line"></span> Typography</li>
            <li className="bb-active"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
            <li className="bb-muted"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
         </ul>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame">
       <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
          <h2>The Unified Frame</h2>
          <span className="bb-section-indicator">08 — GRAPHIC ELEMENTS</span>
       </div>
       <div className="bb-split-content multi">
          <div className="bb-content-left bb-narrow">
             <p className="bb-small-text">Our layouts are built on a modular 12-column grid system, providing a structured foundation for clinical precision.</p>
             <br />
             <p className="bb-small-text">Graphic elements utilize the 'unified frame'—a delicate boundary that contains organic content within an architectural shell.</p>
          </div>
          <div className="bb-content-right bb-wide" style={{ height: 'calc(100vh - 250px)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
             <div style={{ flex: 1, backgroundColor: '#FAFAFA', borderRadius: '4px', padding: '24px', overflow: 'auto', border: '1px solid #EAEAEA' }}>
                <div style={{ minWidth: '850px' }}>
                   <img src={gridsSvg} alt="Architectural Grids" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
             </div>
             <div style={{ marginTop: '24px', display: 'flex', gap: '32px' }}>
                <div style={{ flex: 1 }}>
                   <h5 style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '8px', opacity: 0.5, letterSpacing: '0.05em' }}>Grid System</h5>
                   <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: '#666' }}>A rigorous architectural grid facilitates balance and rhythm, ensuring all layouts maintain structural integrity across viewports.</p>
                </div>
                <div style={{ flex: 1 }}>
                   <h5 style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '8px', opacity: 0.5, letterSpacing: '0.05em' }}>Scaling Logic</h5>
                   <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: '#666' }}>Spacing is defined by mathematical constants, creating a harmonious relationship between content blocks and negative space.</p>
                </div>
             </div>
          </div>
       </div>
    </div>
    ),
    (
    <div className="bb-page bb-content-frame bb-chapter-frame">
       <h1 className="bb-huge-title">APPLICATIONS</h1>
       <div className="bb-page-number">09</div>
       <div className="bb-chapter-toc">
         <ul className="bb-toc-list smaller">
            <li className="bb-muted"><span className="bb-num">01</span> <span className="bb-line"></span> Our Brand</li>
            <li className="bb-muted"><span className="bb-num">08</span> <span className="bb-line"></span> Graphic Elements</li>
            <li className="bb-active"><span className="bb-num">09</span> <span className="bb-line"></span> Applications</li>
         </ul>
       </div>
    </div>
    ),
    (
     <div className="bb-page bb-content-frame">
        <div className="bb-section-header" style={{ background: currentTheme.primary[1].hex }}>
           <h2>Design in Practice</h2>
           <span className="bb-section-indicator">09 — APPLICATIONS</span>
        </div>
        <div className="bb-split-content multi">
           <div className="bb-content-left bb-narrow">
              <p className="bb-small-text">Our brand identity comes to life in physical and digital environments through consistent application of all design pillars.</p>
           </div>
           <div className="bb-content-right bb-wide">
              <div style={{width: '100%', height: 'calc(100vh - 280px)', overflow: 'hidden'}}>
                 <img 
                    src={activeApp.img} 
                    alt={`${activeApp.name} Theme`} 
                    style={{width: '100%', height: '100%', objectFit: 'contain'}} 
                 />
              </div>
           </div>
        </div>
     </div>
  )
 ];

  return (
    <>
      {setCurrentPage && (
        <button 
          className="bb-circle-btn" 
          onClick={() => setCurrentPage('home')}
          title="View Storefront"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      )}

      {/* Right side expanding pill pagination */}
      <div className="bb-pagination">
        {slides.map((_, i) => (
           <div 
             key={i} 
             className={`bb-dot ${activeIndex === i ? 'active' : ''}`} 
             onClick={() => scrollToSlide(i)} 
           />
        ))}
      </div>

      <div className="bb-scroll-container" onScroll={handleScroll}>
        {slides.map((slide, i) => (
          <div className="bb-slide-wrapper" key={i}>
            {slide}
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandBook;
