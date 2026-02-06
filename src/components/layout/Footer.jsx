import React from 'react';
import { FEPEM } from '../../design/tokens';

const Footer = () => (
  <footer
    className="mt-20 pt-8 pb-12 border-t text-center"
    style={{ borderColor: FEPEM.colors.border }}
  >
    <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>
      Recherche utilisateur par Victor Soussan (Cocolabs) pour la FEPEM
    </p>
    <p className="text-xs mt-2" style={{ color: FEPEM.colors.textLight }}>
      Etude Mon Emploi Direct - Fevrier 2026
    </p>
  </footer>
);

export default Footer;
