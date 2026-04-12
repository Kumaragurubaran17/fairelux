import React, { useState } from 'react';
import './ThemePage.css';

const themesConfig = {
  'theme-1': {
    id: 'theme-1',
    name: 'Theme 1',
    primary: [
      { name: 'Wine - Light', hex: '#D09EA3', r: 208, g: 158, b: 163, darkText: true },
      { name: 'Cream - Light', hex: '#FFFBF0', r: 255, g: 251, b: 240, darkText: true },
      { name: 'Wine - Dark', hex: '#7B2E35', r: 123, g: 46, b: 53, darkText: false },
      { name: 'Cream - Dark', hex: '#91796A', r: 145, g: 121, b: 106, darkText: false }
    ],
    secondary: [
      { name: 'Petal', hex: '#59171C', r: 89, g: 23, b: 28, darkText: false },
      { name: 'Nectar', hex: '#DCC491', r: 220, g: 196, b: 145, darkText: true }
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
      { name: 'Ocean - Light', hex: '#9BB8D3', r: 155, g: 184, b: 211, darkText: true },
      { name: 'Sand - Light', hex: '#F4EFEB', r: 244, g: 239, b: 235, darkText: true },
      { name: 'Ocean - Dark', hex: '#184A66', r: 24, g: 74, b: 102, darkText: false },
      { name: 'Sand - Dark', hex: '#8C7F72', r: 140, g: 127, b: 114, darkText: false }
    ],
    secondary: [
      { name: 'Deep Water', hex: '#0B2333', r: 11, g: 35, b: 51, darkText: false },
      { name: 'Sunlit', hex: '#F2CD88', r: 242, g: 205, b: 136, darkText: true }
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
      { name: 'Forest - Light', hex: '#8BA38E', r: 139, g: 163, b: 142, darkText: true },
      { name: 'Stone - Light', hex: '#F2F3F0', r: 242, g: 243, b: 240, darkText: true },
      { name: 'Forest - Dark', hex: '#2A402D', r: 42, g: 64, b: 45, darkText: false },
      { name: 'Stone - Dark', hex: '#747A70', r: 116, g: 122, b: 112, darkText: false }
    ],
    secondary: [
      { name: 'Moss', hex: '#3E5C32', r: 62, g: 92, b: 50, darkText: false },
      { name: 'Earth', hex: '#8A6947', r: 138, g: 105, b: 71, darkText: false }
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

const ThemePage = ({ activeThemeId = 'theme-1', setActiveThemeId }) => {
  const currentTheme = themesConfig[activeThemeId];

  return (
    <div className="theme-page-container">
      
      <div className="theme-tabs">
        {Object.values(themesConfig).map(theme => (
          <button 
            key={theme.id}
            className={`theme-tab-btn ${activeThemeId === theme.id ? 'active' : ''}`}
            onClick={() => setActiveThemeId(theme.id)}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Primary Colors Section */}
      <section className="theme-section">
        <div className="theme-description">
          <h2>Primary<br/>colors</h2>
          <p>Primary colours are the core hues of your brand identity.</p>
          <p>These colours appear most frequently in your design and marketing materials.</p>
          <p>Key primary colours come with light and dark versions, adapting to different background colours. This ensures better contrast for accessibility and aesthetics, while maintaining brand consistency across various applications.</p>
        </div>
        
        <div className="theme-swatch-grid primary-grid">
          {currentTheme.primary.map((color, idx) => (
            <CopySwatch key={idx} hex={color.hex} className="swatch" style={{backgroundColor: color.hex, color: color.darkText ? '#1A1A1A' : '#FFFFFF'}}>
              <div className="swatch-badges">
                <span className={`badge ${color.darkText ? 'dark-badge' : 'light-badge'}`}>aA</span>
                <span className={`badge ${color.darkText ? 'light-badge' : 'light-badge'}`}>Aa</span>
              </div>
              <h3>{color.name}</h3>
              <p>HEX {color.hex}</p>
              <div className="rgb-values">
                <span>R {color.r}</span>
                <span>G {color.g}</span>
                <span>B {color.b}</span>
              </div>
            </CopySwatch>
          ))}
        </div>
      </section>

      {/* Secondary Colors Section */}
      <section className="theme-section">
        <div className="theme-description">
          <h2>Secondary<br/>colors</h2>
          <p>Secondary colours complement your primary palette.</p>
          <p>These additional hues provide flexibility in your designs without overshadowing your main brand colours.</p>
        </div>
        
        <div className="theme-swatch-grid secondary-grid">
          {currentTheme.secondary.map((color, idx) => (
            <CopySwatch key={idx} hex={color.hex} className="swatch" style={{backgroundColor: color.hex, color: color.darkText ? '#1A1A1A' : '#FFFFFF'}}>
              <div className="swatch-badges">
                <span className={`badge ${color.darkText ? 'dark-badge' : 'light-badge'}`}>aA</span>
                <span className={`badge ${color.darkText ? 'light-badge' : 'light-badge'}`}>Aa</span>
              </div>
              <h3>{color.name}</h3>
              <p>HEX {color.hex}</p>
              <div className="rgb-values">
                <span>R {color.r}</span>
                <span>G {color.g}</span>
                <span>B {color.b}</span>
              </div>
            </CopySwatch>
          ))}
        </div>
      </section>

      {/* Accent Colors Section */}
      <section className="theme-section" style={{ marginTop: '40px' }}>
        <div className="theme-description">
          <h2>Accent<br/>colors</h2>
        </div>
        
        <div className="theme-accent-container">
          {currentTheme.accents.map((scale, i) => (
            <div key={i} className="accent-scale">
              <h4 className="accent-scale-title">{scale.name}</h4>
              <div className="accent-swatch-row">
                {scale.colors.map((hex, j) => (
                  <div key={j} className="accent-swatch-item">
                    <CopySwatch hex={hex} className="accent-color-box" style={{backgroundColor: hex}} />
                    <span className="accent-label">{scale.prefix} - {j * 10}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Theme Settings / Shopify Mapping Section */}
      <section className="theme-section" style={{ marginTop: '80px', borderTop: '1px solid #EBEBEB', paddingTop: '80px' }}>
        <div className="theme-description">
          <h2>Shopify<br/>Mapping</h2>
          <p>{currentTheme.settingsTitle}</p>
          <p>Pre-configured element hooks mapped directly for intuitive storefront installation.</p>
        </div>
        
        <div className="theme-settings-container">
          <div className="settings-table-header">
            <span>Shopify Element</span>
            <span>Value</span>
            <span>HEX</span>
          </div>
          {currentTheme.shopifySettings.map((item, idx) => (
            <div key={idx} className="settings-table-row">
              <span className="setting-element-name">{item.element}</span>
              <span className="setting-value-name">{item.name}</span>
              <div className="setting-hex-display">
                {item.element.toLowerCase() !== 'shadow' ? (
                  <div className="setting-color-dot" style={{ backgroundColor: item.hex }}></div>
                ) : (
                  <div className="setting-shadow-dot" style={{ boxShadow: `0 4px 12px ${item.hex}` }}></div>
                )}
                <span>{item.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ThemePage;
