import React from 'react';
import { FEPEM } from '../../design/tokens';

const HeroSection = ({ image, imageAlt, badge, title, subtitle, author, stats, children }) => (
  <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
    {/* Background image */}
    {image && (
      <img
        src={image}
        alt={imageAlt || ''}
        className="absolute inset-0 w-full h-full hero-image"
        loading="eager"
      />
    )}

    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: image
          ? 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)'
          : `linear-gradient(135deg, ${FEPEM.colors.purpleDark} 0%, ${FEPEM.colors.purple} 100%)`,
      }}
    />

    {/* Decorative blurs (when no image) */}
    {!image && (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: FEPEM.colors.gold, filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: FEPEM.colors.purpleLight, filter: 'blur(80px)' }} />
      </div>
    )}

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-3xl">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: badge.color || FEPEM.colors.gold }} />
            <span className="text-sm text-white/80 font-medium">{badge.text}</span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl mb-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {subtitle}
          </p>
        )}

        {author && (
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {author}
          </p>
        )}

        {stats && (
          <div className="flex flex-wrap gap-4 mb-6">
            {stats.map((s, i) => (
              <div key={i} className="px-5 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                <span className="text-2xl font-bold" style={{ color: s.highlight ? FEPEM.colors.gold : 'white' }}>{s.value}</span>
                <span className="text-sm ml-2 text-white/60">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  </div>
);

export default HeroSection;
