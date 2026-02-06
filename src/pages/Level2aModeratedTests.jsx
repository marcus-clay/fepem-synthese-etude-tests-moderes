import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight, Users, AlertTriangle, CheckCircle, XCircle,
  Clock, Target, Brain, Zap, TrendingUp,
  LayoutGrid, Phone, MapPin, FileText
} from 'lucide-react';
import { FEPEM } from '../design/tokens';
import { recommendationsData, horizonsConfig, chantiersConfig } from '../data/recommendations';
import { panelData } from '../data/panel';
import { issuesData } from '../data/issues';
import { archetypes } from '../data/archetypes';
import { insightsData } from '../data/insights';
import { signals, verbatims } from '../data/signals';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/ui/HeroSection';
import StatCard from '../components/ui/StatCard';
import SectionHeader from '../components/ui/SectionHeader';
import VerbatimCard from '../components/ui/VerbatimCard';
import AppleModal from '../components/ui/AppleModal';
import ArchetypeCard from '../components/cards/ArchetypeCard';
import InsightCard from '../components/cards/InsightCard';
import IssueCategoryCard from '../components/cards/IssueCategoryCard';
import HypothesesChart from '../components/charts/HypothesesChart';
import ValidationPieChart from '../components/charts/ValidationPieChart';
import SignalRadarChart from '../components/charts/SignalRadarChart';
import DurationChart from '../components/charts/DurationChart';
import MentalModelJourney from '../components/charts/MentalModelJourney';

const sections = [
  { id: 'overview', label: "Vue d'ensemble" },
  { id: 'panel', label: 'Panel' },
  { id: 'hypotheses', label: 'Hypothèses' },
  { id: 'findings', label: 'Constats' },
  { id: 'mental-model', label: 'Modèle mental' },
  { id: 'archetypes', label: 'Archetypes' },
  { id: 'insights', label: 'Insights' },
  { id: 'signals', label: 'Signaux' },
  { id: 'recommendations', label: 'Actions' },
];

// Apple HIG-style ease-out curve (smooth deceleration, no overshoot)
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const smoothScrollTo = (targetY, duration = 1000, onComplete) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeOutCubic(progress));
    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else if (onComplete) {
      onComplete();
    }
  };
  requestAnimationFrame(step);
};

const SCROLL_OFFSET = 160;

const Level2aModeratedTests = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);
  const [recoView, setRecoView] = useState('timeline');
  const [hoveredReco, setHoveredReco] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const sectionRefs = useRef({});
  const tocContainerRef = useRef(null);
  const buttonRefs = useRef({});
  const isScrollingRef = useRef(false);

  // Update sliding indicator position
  const updateIndicator = useCallback(() => {
    const btn = buttonRefs.current[activeSection];
    const container = tocContainerRef.current;
    if (!btn || !container) return;
    setIndicatorStyle({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
      height: btn.offsetHeight,
      top: btn.offsetTop,
    });
    // Auto-scroll TOC horizontally if button is out of view
    const scrollParent = container.parentElement;
    if (scrollParent) {
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const sl = scrollParent.scrollLeft;
      const cw = scrollParent.clientWidth;
      if (btnLeft < sl + 16) {
        scrollParent.scrollTo({ left: Math.max(0, btnLeft - 16), behavior: 'smooth' });
      } else if (btnLeft + btnWidth > sl + cw - 16) {
        scrollParent.scrollTo({ left: btnLeft + btnWidth - cw + 16, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const threshold = SCROLL_OFFSET + 40;
      let current = sections[0].id;
      for (const section of sections) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const severityConfig = {
    critical: { bg: '#FEE2E2', color: '#991B1B' },
    high: { bg: '#FEF3C7', color: '#92400E' },
    medium: { bg: '#E0F2FE', color: '#0369A1' },
    positive: { bg: '#DCFCE7', color: '#166534' },
  };

  const scrollToSection = useCallback((sectionId) => {
    isScrollingRef.current = true;
    setActiveSection(sectionId);
    const el = sectionRefs.current[sectionId];
    if (!el) return;
    const targetY = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    smoothScrollTo(targetY, 1000, () => {
      isScrollingRef.current = false;
    });
  }, []);

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-6">
        <nav className="flex items-center gap-2 text-sm" style={{ color: FEPEM.colors.textMuted }}>
          <Link to="/" className="hover:underline" style={{ color: FEPEM.colors.purple }}>Accueil</Link>
          <ChevronRight size={14} />
          <Link to="/etude-globale" className="hover:underline" style={{ color: FEPEM.colors.purple }}>Étude Globale</Link>
          <ChevronRight size={14} />
          <span>Tests Modérés</span>
        </nav>
      </div>

      {/* Intra-page nav */}
      <div
        className="sticky top-16 z-30 border-b backdrop-blur-md"
        style={{ background: `${FEPEM.colors.background}E6`, borderColor: FEPEM.colors.border }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 overflow-x-auto">
          <div ref={tocContainerRef} className="flex items-center gap-1 py-2 relative">
            <div
              className="absolute rounded-lg pointer-events-none"
              style={{
                transform: `translateX(${indicatorStyle.left ?? 0}px)`,
                width: indicatorStyle.width ?? 0,
                height: indicatorStyle.height ?? 0,
                top: indicatorStyle.top ?? 0,
                background: FEPEM.colors.purple,
                transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                opacity: indicatorStyle.width ? 1 : 0,
              }}
            />
            {sections.map((s) => (
              <button
                key={s.id}
                ref={(el) => { buttonRefs.current[s.id] = el; }}
                onClick={() => scrollToSection(s.id)}
                className="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap relative z-10"
                style={{
                  color: activeSection === s.id ? 'white' : FEPEM.colors.text,
                  transition: 'color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&h=600&fit=crop&crop=faces&q=80"
        imageAlt="Entretien utilisateur, personne qui écoute"
        badge={{ text: 'Synthèse Recherche Utilisateur', color: FEPEM.colors.gold }}
        title="Tests Utilisateurs Modérés"
        subtitle="Application FEPEM · Mise en relation PE/SPE"
        stats={[
          { value: '7', label: 'participants' },
          { value: '11', label: 'hypothèses testées' },
          { value: '4', label: 'invalidées', highlight: true },
          { value: '1', label: 'session interrompue' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">

        {/* Overview */}
        <section ref={el => sectionRefs.current['overview'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Vue d'ensemble" subtitle="Synthèse des tests utilisateurs conduits du 29 janvier au 4 février 2026" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard label="Participants testés" value="7" subtext="4 PE, 3 SPE" icon={Users} onClick={() => setSelectedStat('participants')} />
            <StatCard label="Hypothèses validées" value="2/11" subtext="18% de validation" trend="down" icon={Target} onClick={() => setSelectedStat('hypotheses')} />
            <StatCard label="Durée moyenne" value="77 min" subtext="Prévu : 60 min" icon={Clock} onClick={() => setSelectedStat('duree')} />
            <StatCard label="Problèmes critiques" value="6" subtext="UX structurels" trend="critical" icon={AlertTriangle} onClick={() => setSelectedStat('problemes')} />
          </div>

          {/* Narrative: Constat principal */}
          <div className="max-w-3xl mb-12">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Le modèle marketplace transactionnel est inadapté aux relations d'emploi longues
              caractéristiques du secteur (5-7 ans en moyenne). Les utilisateurs en situation précaire
              cherchent la <strong>sécurité</strong>, pas le choix. Les PE sérieux recrutent sur <strong>desktop</strong>, pas sur mobile.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Validation des hypothèses</h3>
              <ValidationPieChart />
            </div>
            <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Signaux récurrents</h3>
              <SignalRadarChart />
            </div>
          </div>
        </section>

        {/* Panel */}
        <section ref={el => sectionRefs.current['panel'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Panel de participants" subtitle="7 utilisateurs testés sur 2 segments distincts" />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Le panel a été constitué pour représenter la diversité des utilisateurs cibles : particuliers employeurs avec des profils variés (aidant familial, expert, institutionnel) et salariés en situation contrastée (précarité, multi-clients).
            </p>
          </div>

          <div className="rounded-2xl border overflow-hidden" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: `${FEPEM.colors.purple}08` }}>
                    {['#', 'Participant', 'Profil', 'Segment', 'Durée', 'Statut'].map(h => (
                      <th key={h} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {panelData.map((p) => (
                    <tr key={p.id} className="border-t hover:bg-gray-50 transition-colors cursor-pointer" style={{ borderColor: FEPEM.colors.cardBorder }} onClick={() => navigate(`/tests-moderes/analyse-profils#profile-${p.slug}`)}>
                      <td className="px-6 py-4 text-sm" style={{ color: FEPEM.colors.textMuted }}>{p.id}</td>
                      <td className="px-6 py-4 font-medium" style={{ color: FEPEM.colors.purpleDark }}>{p.name}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: FEPEM.colors.text }}>{p.profile}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${FEPEM.colors.purple}15`, color: FEPEM.colors.purple }}>{p.segment}</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: FEPEM.colors.text }}>{p.duration} min</td>
                      <td className="px-6 py-4">
                        {p.status === 'complete' ? (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600"><CheckCircle size={14} /> Complète</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-red-600"><XCircle size={14} /> Interrompue</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Durée des sessions</h3>
            <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
              <DurationChart />
            </div>
          </div>
        </section>

        {/* Hypotheses */}
        <section ref={el => sectionRefs.current['hypotheses'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Validation des hypothèses" subtitle="11 hypothèses testées, 2 validées, 4 partiellement validées, 5 invalidées" />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              18 % des hypothèses ont été validées. Les hypothèses les plus critiques (parcours PE rapide, prise de contact fluide, distinction Suggestions/Candidats) ont été invalidées, ce qui met en évidence des écarts entre la vision produit et les comportements observés sur le terrain.
            </p>
          </div>

          <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
            <p className="text-sm mb-4" style={{ color: FEPEM.colors.textMuted }}>
              Cliquez sur une hypothèse pour voir le constat, le verbatim et l'impact associés.
            </p>
            <HypothesesChart />
          </div>
        </section>

        {/* Findings */}
        <section ref={el => sectionRefs.current['findings'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Constats et problèmes" subtitle="Classification des insights par catégorie et sévérité" />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Les problèmes identifiés se répartissent entre des bugs techniques corrigeables rapidement, des quick wins à fort impact, et des problèmes UX structurels qui nécessitent une réflexion produit approfondie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {issuesData.map((issue) => (
              <IssueCategoryCard key={issue.category} issue={issue} onClick={() => setSelectedIssue(issue)} />
            ))}
          </div>

          <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Verbatims significatifs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verbatims.map((v, i) => (
              <VerbatimCard key={i} verbatim={v} />
            ))}
          </div>
        </section>

        {/* Mental Model */}
        <section ref={el => sectionRefs.current['mental-model'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Modèle mental du parcours" subtitle="Cartographie des besoins utilisateurs identifiés à chaque étape du parcours applicatif" />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Les PE et les SPE ont des parcours fondamentalement différents : le PE crée et publie une annonce puis reçoit des candidatures, tandis que le SPE crée un profil puis postule à des offres. Utilisez le toggle pour basculer entre les deux parcours et visualiser les besoins satisfaits (vert) et non satisfaits (rouge) à chaque étape.
            </p>
          </div>

          <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
            <MentalModelJourney />
          </div>
        </section>

        {/* Archetypes */}
        <section ref={el => sectionRefs.current['archetypes'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Archétypes utilisateurs" subtitle="5 profils types identifiés à partir des comportements observés" />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Cinq archétypes distincts émergent des sessions de test, chacun révèle un rapport différent à l'application, des besoins fondamentaux spécifiques et des frustrations uniques. Cliquez sur un archétype pour lire l'analyse complète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((archetype) => (
              <ArchetypeCard key={archetype.id} archetype={archetype} />
            ))}
          </div>

          <Link
            to="/tests-moderes/analyse-profils"
            className="mt-8 flex items-center justify-between p-6 rounded-2xl border transition-all card-hover group"
            style={{ background: `${FEPEM.colors.purple}06`, borderColor: `${FEPEM.colors.purple}20` }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${FEPEM.colors.purple}15` }}>
                <Brain size={24} style={{ color: FEPEM.colors.purple }} />
              </div>
              <div>
                <h3 className="font-bold text-base" style={{ color: FEPEM.colors.purpleDark }}>Analyse approfondie des profils</h3>
                <p className="text-sm mt-0.5" style={{ color: FEPEM.colors.textMuted }}>Signaux forts et faibles, frustrations de surface et profondes, écarts de modèle mental, par participant</p>
              </div>
            </div>
            <ChevronRight size={20} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: FEPEM.colors.purple }} />
          </Link>
        </section>

        {/* Insights */}
        <section ref={el => sectionRefs.current['insights'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Insights PE" subtitle="5 insights issus des parcours Particulier Employeur" />
          <div className="space-y-8 mb-16">
            {insightsData.pe.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>

          <SectionHeader title="Insights SPE" subtitle="4 insights issus des parcours Salarié du Particulier Employeur" />
          <div className="space-y-8">
            {insightsData.spe.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </section>

        {/* Signals */}
        <section ref={el => sectionRefs.current['signals'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Signaux récurrents" subtitle="Patterns identifiés à travers les sessions de test" />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Certains signaux apparaissent de manière transversale chez la majorité des participants, indépendamment de leur segment. Ces récurrences indiquent des problèmes systémiques plutôt que des cas isolés.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Fréquence des signaux</h3>
              <div className="space-y-4">
                {signals.map((signal, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-40 text-sm" style={{ color: FEPEM.colors.text }}>{signal.name}</div>
                    <div className="flex-1 h-6 rounded-full overflow-hidden" style={{ background: FEPEM.colors.border }}>
                      <div
                        className="h-full rounded-full flex items-center justify-end pr-2"
                        style={{
                          width: `${(signal.count / 7) * 100}%`,
                          background: signal.impact === 'critical' ? FEPEM.colors.error : signal.impact === 'high' ? FEPEM.colors.warning : FEPEM.colors.purple,
                        }}
                      >
                        <span className="text-xs font-bold text-white">{signal.count}/7</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Distribution par type</h3>
              <SignalRadarChart />
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section ref={el => sectionRefs.current['recommendations'] = el} className="mb-20 scroll-mt-40">
          <SectionHeader title="Recommandations" subtitle="Actions priorisées par horizon temporel ou regroupées par chantier stratégique." />

          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              26 recommandations ont été formulées, organisées selon deux axes : l'horizon temporel (court, moyen, long terme) et le chantier stratégique (interface, contact, planification, géolocalisation, produit). Survolez chaque action pour voir le détail du problème et l'enjeu associé.
            </p>
          </div>

          {/* Toggle */}
          <div
            className="inline-flex rounded-xl p-1 mb-8"
            style={{ background: FEPEM.colors.background, border: `1px solid ${FEPEM.colors.border}` }}
          >
            <button
              onClick={() => setRecoView('timeline')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ background: recoView === 'timeline' ? FEPEM.colors.purple : 'transparent', color: recoView === 'timeline' ? 'white' : FEPEM.colors.textMuted }}
            >
              <Clock size={16} /> Par horizon temporel
            </button>
            <button
              onClick={() => setRecoView('strategic')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ background: recoView === 'strategic' ? FEPEM.colors.purple : 'transparent', color: recoView === 'strategic' ? 'white' : FEPEM.colors.textMuted }}
            >
              <LayoutGrid size={16} /> Par chantier strategique
            </button>
          </div>

          {/* Timeline view */}
          {recoView === 'timeline' && (
            <div className="relative">
              <div className="hidden md:block absolute top-[36px] left-[calc(16.66%)] right-[calc(16.66%)] h-0.5" style={{ background: FEPEM.colors.border }} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {horizonsConfig.map((horizon) => {
                  const actions = recommendationsData.filter(r => r.horizon === horizon.id);
                  const Icon = horizon.icon;
                  return (
                    <div key={horizon.id} className="flex flex-col items-center">
                      <div className="relative z-10 flex flex-col items-center mb-6">
                        <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-md" style={{ background: `${horizon.color}15`, border: `3px solid ${horizon.color}` }}>
                          <Icon size={28} style={{ color: horizon.color }} />
                        </div>
                        <h3 className="font-bold mt-3 text-base" style={{ color: FEPEM.colors.purpleDark }}>{horizon.label}</h3>
                        <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>{horizon.subtitle}</p>
                        <span className="text-xs font-semibold mt-1 px-2 py-0.5 rounded-full" style={{ background: `${horizon.color}15`, color: horizon.color }}>
                          {actions.length} actions
                        </span>
                      </div>
                      <div className="w-full space-y-2">
                        {actions.map((action, i) => (
                          <div key={action.id} className="relative group" onMouseEnter={() => setHoveredReco(action.id)} onMouseLeave={() => setHoveredReco(null)}>
                            <div
                              className="flex items-start gap-2.5 p-3 rounded-xl cursor-default transition-all"
                              style={{
                                background: hoveredReco === action.id ? 'white' : `${horizon.color}06`,
                                border: `1px solid ${hoveredReco === action.id ? horizon.color : 'transparent'}`,
                                boxShadow: hoveredReco === action.id ? `0 4px 12px ${horizon.color}20` : 'none',
                              }}
                            >
                              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" style={{ background: `${horizon.color}20`, color: horizon.color }}>{i + 1}</div>
                              <span className="text-sm leading-snug" style={{ color: FEPEM.colors.text }}>{action.label}</span>
                            </div>
                            {hoveredReco === action.id && (
                              <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 p-4 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)', animation: 'fadeIn 0.15s ease-out' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#18181B' }}>{action.label}</p>
                                <p className="text-xs mb-2" style={{ color: '#71717A' }}>{action.problem}</p>
                                <div className="flex items-start gap-1.5">
                                  <Zap size={12} className="flex-shrink-0 mt-0.5" style={{ color: FEPEM.colors.purple }} />
                                  <p className="text-xs italic" style={{ color: FEPEM.colors.purple }}>{action.enjeu}</p>
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0" style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #FFFFFF' }} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Strategic view */}
          {recoView === 'strategic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chantiersConfig.map((chantier) => {
                const actions = recommendationsData.filter(r => r.chantier === chantier.id);
                const Icon = chantier.icon;
                return (
                  <div key={chantier.id} className="p-6 rounded-2xl border" style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${chantier.color}12` }}>
                          <Icon size={20} style={{ color: chantier.color }} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm" style={{ color: FEPEM.colors.purpleDark }}>{chantier.label}</h3>
                          <p className="text-xs" style={{ color: FEPEM.colors.textLight }}>{chantier.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: FEPEM.colors.textMuted }}>
                        {actions.length} <span className="font-normal">actions</span>
                      </span>
                    </div>
                    <div className="space-y-1">
                      {actions.map((action) => {
                        const horizonMeta = horizonsConfig.find(h => h.id === action.horizon);
                        return (
                          <div key={action.id} className="relative group" onMouseEnter={() => setHoveredReco(action.id)} onMouseLeave={() => setHoveredReco(null)}>
                            <div
                              className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg cursor-default transition-all"
                              style={{ background: hoveredReco === action.id ? `${horizonMeta.color}08` : 'transparent' }}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: horizonMeta.color }} />
                                <span className="text-sm truncate" style={{ color: FEPEM.colors.text }}>{action.label}</span>
                              </div>
                              <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium" style={{ background: `${horizonMeta.color}12`, color: horizonMeta.color }}>
                                {horizonMeta.label}
                              </span>
                            </div>
                            {hoveredReco === action.id && (
                              <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 p-4 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)', animation: 'fadeIn 0.15s ease-out' }}>
                                <p className="text-sm font-semibold mb-2" style={{ color: '#18181B' }}>{action.label}</p>
                                <p className="text-xs mb-2" style={{ color: '#71717A' }}>{action.problem}</p>
                                <div className="flex items-start gap-1.5">
                                  <Zap size={12} className="flex-shrink-0 mt-0.5" style={{ color: FEPEM.colors.purple }} />
                                  <p className="text-xs italic" style={{ color: FEPEM.colors.purple }}>{action.enjeu}</p>
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0" style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #FFFFFF' }} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <AppleModal isOpen={!!selectedIssue} onClose={() => setSelectedIssue(null)} title={selectedIssue?.category || ''}>
        {selectedIssue && (() => {
          const cfg = severityConfig[selectedIssue.severity];
          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{selectedIssue.count}</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: cfg.bg, color: cfg.color }}>
                  {selectedIssue.severity}
                </span>
              </div>
              <div>
                <h4 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Détail des éléments</h4>
                <div className="space-y-3">
                  {selectedIssue.items.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg border flex items-center gap-3" style={{ borderColor: FEPEM.colors.border }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium" style={{ background: `${FEPEM.colors.purple}10`, color: FEPEM.colors.purple }}>{i + 1}</div>
                      <span style={{ color: FEPEM.colors.text }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </AppleModal>

      <AppleModal isOpen={!!selectedStat} onClose={() => setSelectedStat(null)} title={
        selectedStat === 'participants' ? 'Participants testés' :
        selectedStat === 'hypotheses' ? 'Hypothèses testées' :
        selectedStat === 'duree' ? 'Durée des sessions' :
        selectedStat === 'problemes' ? 'Problèmes critiques' : ''
      }>
        {selectedStat === 'participants' && (
          <div className="space-y-4">
            <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>7 personnes testées du 29 janvier au 4 février 2026.</p>
            <div className="space-y-2">
              {panelData.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg" style={{ background: FEPEM.colors.background }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${FEPEM.colors.purple}15`, color: FEPEM.colors.purple }}>{p.segment}</span>
                    <span className="font-medium text-sm" style={{ color: FEPEM.colors.purpleDark }}>{p.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs" style={{ color: FEPEM.colors.textMuted }}>{p.duration} min</span>
                    {p.status === 'complete' ? (
                      <CheckCircle size={14} className="text-green-500" />
                    ) : (
                      <XCircle size={14} className="text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedStat === 'hypotheses' && (
          <div className="space-y-4">
            <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>11 hypothèses testées lors des sessions modérées.</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl text-center" style={{ background: '#DCFCE7' }}>
                <div className="text-2xl font-bold" style={{ color: '#166534' }}>2</div>
                <div className="text-xs font-medium" style={{ color: '#166534' }}>Validées</div>
              </div>
              <div className="p-4 rounded-xl text-center" style={{ background: '#FEF3C7' }}>
                <div className="text-2xl font-bold" style={{ color: '#92400E' }}>4</div>
                <div className="text-xs font-medium" style={{ color: '#92400E' }}>Partielles</div>
              </div>
              <div className="p-4 rounded-xl text-center" style={{ background: '#FEE2E2' }}>
                <div className="text-2xl font-bold" style={{ color: '#991B1B' }}>5</div>
                <div className="text-xs font-medium" style={{ color: '#991B1B' }}>Invalidées</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Les hypothèses les plus critiques (parcours PE rapide, prise de contact fluide, distinction Suggestions/Candidats) ont été invalidées, ce qui met en évidence des écarts entre la vision produit et les comportements observés sur le terrain.
            </p>
          </div>
        )}
        {selectedStat === 'duree' && (
          <div className="space-y-4">
            <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>Durée individuelle de chaque session de test.</p>
            <div className="space-y-2">
              {panelData.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <span className="text-sm w-24 font-medium" style={{ color: FEPEM.colors.purpleDark }}>{p.name}</span>
                  <div className="flex-1 h-6 rounded-full overflow-hidden" style={{ background: FEPEM.colors.border }}>
                    <div
                      className="h-full rounded-full flex items-center justify-end pr-2"
                      style={{
                        width: `${Math.min((p.duration / 130) * 100, 100)}%`,
                        background: p.duration > 90 ? FEPEM.colors.error : p.duration > 60 ? FEPEM.colors.warning : FEPEM.colors.success,
                      }}
                    >
                      <span className="text-xs font-bold text-white">{p.duration} min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Prévision initiale : 60 minutes par session. Moyenne observée : 77 minutes.</p>
          </div>
        )}
        {selectedStat === 'problemes' && (
          <div className="space-y-4">
            <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>6 problèmes UX structurels identifiés lors des tests.</p>
            <div className="space-y-2">
              {['Terminologie métier incompréhensible', 'Interface de planification bloquante', 'Confusion Suggestions/Candidats', 'Confusion offres/profils (SPE)', 'Parcours aidant familial absent', 'Format mobile-only inadapté pour le recrutement'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: '#FEE2E2' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: FEPEM.colors.error }}>{i + 1}</div>
                  <span className="text-sm" style={{ color: '#991B1B' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </AppleModal>
    </PageLayout>
  );
};

export default Level2aModeratedTests;
