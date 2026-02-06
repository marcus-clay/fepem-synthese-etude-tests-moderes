import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';
import { FEPEM } from '../design/tokens';
import { missionData, globalInsights, methodologieComparaison } from '../data/global-study';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/ui/HeroSection';

const Level1GlobalStudy = () => (
  <PageLayout>
    <HeroSection
      image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=600&fit=crop&crop=faces&q=80"
      imageAlt="Personnes en contexte de travail collaboratif"
      badge={{ text: 'Vue d\'ensemble' }}
      title="Étude Globale"
      subtitle="Vue d'ensemble de la recherche utilisateur menée pour l'application Mon Emploi Direct de la FEPEM."
    >
      <nav className="flex items-center gap-2 text-sm text-white/60">
        <Link to="/" className="hover:underline text-white/80">Accueil</Link>
        <ChevronRight size={14} />
        <span className="text-white">Étude Globale</span>
      </nav>
    </HeroSection>

    {/* Narrative zone: Contexte */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-16 pt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Contexte</h2>
      <div className="max-w-3xl prose-narrative text-lg leading-relaxed space-y-4" style={{ color: FEPEM.colors.text }}>
        <p>
          La FEPEM (Fédération des Particuliers Employeurs de France) développe une application mobile de mise en relation entre les salariés du secteur de l'emploi à domicile et les particuliers employeurs. L'application "Mon Emploi Direct" vise à simplifier la recherche, la mise en relation et, à terme, la contractualisation entre ces deux segments.
        </p>
        <p>
          Le périmètre actuel (phase 1, MVP) se concentre sur la mise en relation uniquement. La contractualisation est prévue en phase 2. Le lancement est planifié pour fin février / début mars 2026.
        </p>
      </div>
    </div>

    {/* Narrative zone: Objectifs */}
    <div
      className="py-16"
      style={{ background: FEPEM.colors.backgroundAlt }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>
          Questions de recherche
        </h2>
        <ul className="max-w-3xl space-y-5">
          {missionData.objectifs.map((q, i) => (
            <li key={i} className="flex gap-4 text-lg" style={{ color: FEPEM.colors.text }}>
              <Search size={20} style={{ color: FEPEM.colors.purple, flexShrink: 0, marginTop: 4 }} />
              <span className="prose-narrative leading-relaxed">{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Data zone: Comparaison methodologique */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>
        Méthodologie
      </h2>
      <p className="text-lg mb-8 max-w-3xl prose-narrative leading-relaxed" style={{ color: FEPEM.colors.textMuted }}>
        Deux approches complémentaires pour couvrir le qualitatif et le quantitatif.
      </p>
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ borderColor: FEPEM.colors.cardBorder }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: `${FEPEM.colors.purple}08` }}>
              <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-wider" style={{ color: FEPEM.colors.purpleDark }}>Critère</th>
              <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-wider" style={{ color: FEPEM.colors.purpleDark }}>Tests Modérés</th>
              <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-wider" style={{ color: FEPEM.colors.purpleDark }}>Tests Non-Modérés</th>
            </tr>
          </thead>
          <tbody>
            {methodologieComparaison.map((row, i) => (
              <tr
                key={i}
                className="border-t"
                style={{ borderColor: FEPEM.colors.cardBorder, background: i % 2 === 0 ? FEPEM.colors.cardBg : FEPEM.colors.background }}
              >
                <td className="px-6 py-4 font-medium" style={{ color: FEPEM.colors.purpleDark }}>{row.critere}</td>
                <td className="px-6 py-4" style={{ color: FEPEM.colors.text }}>{row.modere}</td>
                <td className="px-6 py-4" style={{ color: FEPEM.colors.text }}>{row.nonModere}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Narrative zone: Insights */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>
        Enseignements majeurs
      </h2>
      <div className="max-w-3xl space-y-8">
        {globalInsights.map((insight, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>
              {i + 1}. {insight.title}
            </h3>
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              {insight.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Narrative zone: Enseignements croises */}
    <div
      className="py-16"
      style={{ background: FEPEM.colors.backgroundAlt }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>
          Enseignements croisés
        </h2>
        <p className="max-w-3xl prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
          Cette section sera enrichie une fois la campagne de tests non-modérés terminée. Les données quantitatives viendront confirmer, nuancer ou infirmer les hypothèses qualitatives issues des tests modérés, permettant une synthèse croisée des deux approches.
        </p>
      </div>
    </div>

    {/* Data zone: Liens campagnes */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>
        Explorer les campagnes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/tests-moderes"
          className="block p-8 rounded-2xl border card-hover group"
          style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>Tests Modérés</h3>
          <p className="text-base mb-4 leading-relaxed" style={{ color: FEPEM.colors.text }}>
            7 entretiens qualitatifs semi-dirigés. Analyse approfondie des parcours, frustrations et modèles mentaux.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: FEPEM.colors.purple }}>
            Voir les résultats <ArrowRight size={14} />
          </span>
        </Link>
        <Link
          to="/tests-non-moderes"
          className="block p-8 rounded-2xl border card-hover group"
          style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>Tests Non-Modérés</h3>
          <p className="text-base mb-4 leading-relaxed" style={{ color: FEPEM.colors.text }}>
            30 tests quantitatifs à distance. Mesure des taux de complétion, facilité d'utilisation et score SUS.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: FEPEM.colors.purple }}>
            Voir le protocole <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </div>
  </PageLayout>
);

export default Level1GlobalStudy;
