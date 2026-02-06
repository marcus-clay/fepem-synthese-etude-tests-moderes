import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const navLinks = [
  { to: '/etude-globale', label: 'Etude Globale' },
  { to: '/tests-moderes', label: 'Tests Moderes' },
  { to: '/tests-non-moderes', label: 'Tests Non-Moderes' },
];

const SiteNavigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{ background: `${FEPEM.colors.background}E6`, borderColor: FEPEM.colors.border }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
              style={{ background: FEPEM.colors.purple }}
            >
              F
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm" style={{ color: FEPEM.colors.purpleDark }}>FEPEM</div>
              <div className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Recherche Utilisateur</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to || location.pathname.startsWith(link.to + '/');
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: isActive ? FEPEM.colors.purple : 'transparent',
                    color: isActive ? 'white' : FEPEM.colors.text,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: FEPEM.colors.text }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to || location.pathname.startsWith(link.to + '/');
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{
                    background: isActive ? `${FEPEM.colors.purple}10` : 'transparent',
                    color: isActive ? FEPEM.colors.purple : FEPEM.colors.text,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default SiteNavigation;
