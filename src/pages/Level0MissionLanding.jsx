import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain } from 'lucide-react';
import { FEPEM } from '../design/tokens';
import { missionData, globalInsights } from '../data/global-study';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/ui/HeroSection';

const Level0MissionLanding = () => (
  <PageLayout>
    <HeroSection
      image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&h=600&fit=crop&crop=faces&q=80"
      imageAlt="Aide à domicile, personnes souriantes"
      badge={{ text: 'Étude de Recherche Utilisateur · Février 2026', color: FEPEM.colors.gold }}
      title={missionData.title}
      subtitle={missionData.subtitle}
      author="Par Victor Soussan (Cocolabs) pour la FEPEM"
    >
      <Link
        to="/etude-globale"
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold transition-all hover:scale-105 btn-press"
        style={{ background: FEPEM.colors.gold, color: FEPEM.colors.purpleDark }}
      >
        Découvrir l'étude <ArrowRight size={18} />
      </Link>
    </HeroSection>

    {/* Narrative zone: Context */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <p className="max-w-3xl prose-narrative text-lg md:text-xl leading-relaxed" style={{ color: FEPEM.colors.text }}>
        {missionData.context}
      </p>
    </div>

    {/* Data zone: Insights majeurs */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-8">
      <div
        className="p-8 md:p-10 rounded-2xl border-l-4 mb-12"
        style={{ background: `${FEPEM.colors.purple}08`, borderLeftColor: FEPEM.colors.purple }}
      >
        <div className="flex items-start gap-4 mb-6">
          <Brain size={28} style={{ color: FEPEM.colors.purple, flexShrink: 0, marginTop: 2 }} />
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>
            Découverte majeure
          </h2>
        </div>
        <p className="text-lg mb-6 leading-relaxed prose-narrative" style={{ color: FEPEM.colors.text }}>
          L'application résout le mauvais problème pour deux segments critiques : les SPE vulnérables qui cherchent la <strong>sécurité</strong> (pas le choix), et les PE sérieux qui recrutent sur <strong>desktop</strong> (pas sur mobile).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {globalInsights.map((item, i) => (
            <div key={i} className="p-5 rounded-xl" style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}` }}>
              <h4 className="text-base font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>{item.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: FEPEM.colors.textMuted }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Data zone: Campagnes */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>
        Deux campagnes de recherche
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missionData.campagnes.map((campagne) => (
          <Link
            key={campagne.id}
            to={campagne.link}
            className="block p-8 rounded-2xl border card-hover group"
            style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>
                {campagne.label}
              </h3>
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: campagne.status === 'complete' ? '#DCFCE7' : '#FEF3C7',
                  color: campagne.status === 'complete' ? '#166534' : '#92400E',
                }}
              >
                {campagne.status === 'complete' ? 'Terminée' : 'En cours'}
              </span>
            </div>
            <p className="text-base mb-6 leading-relaxed" style={{ color: FEPEM.colors.text }}>
              {campagne.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              {campagne.stats.map((s, i) => (
                <div key={i}>
                  <span className="text-2xl font-bold" style={{ color: FEPEM.colors.purple }}>{s.value}</span>
                  <span className="text-sm ml-2" style={{ color: FEPEM.colors.textMuted }}>{s.label}</span>
                </div>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: FEPEM.colors.purple }}
            >
              Voir les résultats <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Level0MissionLanding;
