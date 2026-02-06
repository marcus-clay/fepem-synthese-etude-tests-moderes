import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronRight, User, Clock, AlertTriangle, Eye, Zap,
  MessageSquareQuote, ArrowRight, ChevronDown, ChevronUp,
  TrendingUp, Radio, Target
} from 'lucide-react';
import { FEPEM } from '../design/tokens';
import { testerProfiles, crossAnalysis } from '../data/tester-profiles';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/ui/HeroSection';

const segmentColor = (segment) => segment === 'SPE' ? FEPEM.colors.error : FEPEM.colors.purple;

const TesterProfilesAnalysis = () => {
  const location = useLocation();
  const [expandedProfile, setExpandedProfile] = useState(null);
  const [expandedSignal, setExpandedSignal] = useState(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash && hash.startsWith('#profile-')) {
      const profileId = hash.replace('#profile-', '');
      setExpandedProfile(profileId);
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [location.hash]);

  return (
    <PageLayout>
      <HeroSection
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=600&fit=crop&crop=faces&q=80"
        imageAlt="Analyse des profils de testeurs"
        badge={{ text: 'Analyse approfondie', color: FEPEM.colors.gold }}
        title="Analyse des profils de testeurs"
        subtitle="7 participants, 7 situations. Analyse individuelle et croisée des tests modérés."
        author="Par Victor Soussan (Cocolabs) pour la FEPEM, février 2026"
      >
        <nav className="flex items-center gap-2 text-sm text-white/60 mt-4">
          <Link to="/" className="hover:underline text-white/80">Accueil</Link>
          <ChevronRight size={14} />
          <Link to="/tests-moderes" className="hover:underline text-white/80">Tests Modérés</Link>
          <ChevronRight size={14} />
          <span className="text-white">Analyse des profils</span>
        </nav>
      </HeroSection>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="max-w-3xl">
          <p className="prose-narrative text-xl leading-relaxed mb-6" style={{ color: FEPEM.colors.text }}>
            Les 7 personnes qui ont testé l'application Mon Emploi Direct expriment des besoins qui divergent de ce que le produit propose. Kidisti cherche avant tout un contrat pour France Travail. Daniel cherche à comprendre sa place dans le dispositif. Véronique évalue si la FEPEM peut se permettre de lancer l'outil en l'état. Chaque participant aborde l'application avec ses propres enjeux.
          </p>
          <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.textMuted }}>
            Cette analyse restitue les observations recueillies lors des 7 sessions de tests modérés. Chaque profil est présenté avec son contexte, ses comportements observés, ses frustrations exprimées et non exprimées, et les signaux identifiés.
          </p>
        </div>
      </div>

      {/* Données factuelles du panel */}
      <div className="py-12" style={{ background: FEPEM.colors.backgroundAlt }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Le panel</h2>
          <div className="max-w-3xl mb-8">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              7 personnes testées sur la période du 29 janvier au 4 février 2026. 4 Particuliers Employeurs (PE), 3 Salariés du Particulier Employeur (SPE). Tests en visioconférence, protocole Think Aloud, durée moyenne de 77 minutes (prévision initiale : 60 minutes). Une session interrompue (Daniel).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {testerProfiles.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setExpandedProfile(expandedProfile === p.id ? null : p.id);
                  if (expandedProfile !== p.id) {
                    setTimeout(() => {
                      document.getElementById(`profile-${p.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }
                }}
                className="p-4 rounded-xl text-left transition-all card-hover"
                style={{
                  background: expandedProfile === p.id ? `${segmentColor(p.segment)}08` : FEPEM.colors.cardBg,
                  border: `1.5px solid ${expandedProfile === p.id ? segmentColor(p.segment) : FEPEM.colors.cardBorder}`,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${segmentColor(p.segment)}15`, color: segmentColor(p.segment) }}>
                    {p.segment}
                  </span>
                  {p.status === 'interrupted' && <AlertTriangle size={12} style={{ color: FEPEM.colors.error }} />}
                </div>
                <p className="font-semibold text-sm" style={{ color: FEPEM.colors.purpleDark }}>{p.name}</p>
                <p className="text-xs mt-1" style={{ color: FEPEM.colors.textMuted }}>{p.duration} min</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profils individuels */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-2xl font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>Les 7 profils</h2>
        <p className="text-lg mb-12" style={{ color: FEPEM.colors.textMuted }}>
          Cliquez sur un profil pour lire l'analyse complète.
        </p>

        <div className="space-y-6">
          {testerProfiles.map((p) => {
            const isExpanded = expandedProfile === p.id;
            const color = segmentColor(p.segment);

            return (
              <div
                key={p.id}
                id={`profile-${p.id}`}
                className="rounded-2xl border overflow-hidden scroll-mt-24 transition-all"
                style={{
                  background: FEPEM.colors.cardBg,
                  borderColor: isExpanded ? color : FEPEM.colors.cardBorder,
                  boxShadow: isExpanded ? `0 8px 30px ${color}12` : 'none',
                }}
              >
                {/* Header cliquable */}
                <button
                  onClick={() => setExpandedProfile(isExpanded ? null : p.id)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${color}15`, color }}>
                        {p.segment} · {p.archetype}
                      </span>
                      <span className="text-xs flex items-center gap-1" style={{ color: FEPEM.colors.textMuted }}>
                        <Clock size={12} /> {p.duration} min · {p.date}
                      </span>
                      {p.status === 'interrupted' && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: '#FEE2E2', color: FEPEM.colors.error }}>
                          Session interrompue
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{p.name}</h3>
                    <p className="text-base mt-1" style={{ color: FEPEM.colors.text }}>{p.profile}</p>
                    <p className="text-sm mt-2 italic" style={{ color: FEPEM.colors.textMuted }}>
                      "{p.verbatims[0]?.text}"
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={20} className="flex-shrink-0 mt-1" style={{ color }} />
                  ) : (
                    <ChevronDown size={20} className="flex-shrink-0 mt-1" style={{ color: FEPEM.colors.textLight }} />
                  )}
                </button>

                {/* Contenu déplié */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                    <hr style={{ borderColor: FEPEM.colors.border }} className="mb-8" />

                    {/* Contexte */}
                    <div className="max-w-3xl mb-10">
                      <h4 className="text-lg font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Contexte</h4>
                      <p className="prose-narrative text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>
                        {p.context}
                      </p>
                    </div>

                    {/* Objectif réel */}
                    <div className="max-w-3xl mb-10">
                      <h4 className="text-lg font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Objectif réel</h4>
                      <p className="prose-narrative text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>
                        {p.objectifReel}
                      </p>
                    </div>

                    {/* Modèle mental */}
                    <div className="max-w-3xl mb-10 p-6 rounded-xl border-l-4" style={{ background: `${color}06`, borderLeftColor: color }}>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color }}>Modèle mental</h4>
                      <p className="text-base italic leading-relaxed" style={{ color: FEPEM.colors.text }}>
                        "{p.mentalModel}"
                      </p>
                    </div>

                    {/* Comportements clés */}
                    <div className="max-w-3xl mb-10">
                      <h4 className="text-lg font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Comportements observés</h4>
                      <div className="space-y-3">
                        {p.keyBehaviors.map((b, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white" style={{ background: color }}>
                              {i + 1}
                            </div>
                            <p className="text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>{b}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Écart de modèle mental */}
                    <div className="mb-10">
                      <h4 className="text-lg font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Écart de modèle mental</h4>
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="p-5 rounded-xl flex-1" style={{ background: '#F0FFF0', border: `1px solid ${FEPEM.colors.success}30` }}>
                          <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.success }}>Attente</span>
                          <p className="text-sm mt-2" style={{ color: FEPEM.colors.text }}>{p.gapAttente}</p>
                        </div>
                        <ArrowRight size={16} className="hidden md:block self-center flex-shrink-0" style={{ color: FEPEM.colors.textLight }} />
                        <div className="p-5 rounded-xl flex-1" style={{ background: FEPEM.colors.background, border: `1px solid ${FEPEM.colors.border}` }}>
                          <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.textMuted }}>Réalité</span>
                          <p className="text-sm mt-2" style={{ color: FEPEM.colors.text }}>{p.gapRealite}</p>
                        </div>
                        <ArrowRight size={16} className="hidden md:block self-center flex-shrink-0" style={{ color: FEPEM.colors.textLight }} />
                        <div className="p-5 rounded-xl flex-1" style={{ background: '#FFF0F0', border: `1px solid ${FEPEM.colors.error}30` }}>
                          <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.error }}>Impact</span>
                          <p className="text-sm mt-2 font-medium" style={{ color: FEPEM.colors.error }}>{p.gapImpact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Frustrations */}
                    <div className="max-w-3xl mb-10">
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-4" style={{ color: FEPEM.colors.warning }}>
                        <AlertTriangle size={18} /> Frustrations de surface
                      </h4>
                      <ul className="space-y-2 mb-8">
                        {p.surfaceFrustrations.map((f, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-sm font-medium" style={{ color: FEPEM.colors.warning }}>•</span>
                            <span className="text-base" style={{ color: FEPEM.colors.text }}>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-4" style={{ color: FEPEM.colors.error }}>
                        <Eye size={18} /> Frustrations profondes
                      </h4>
                      <div className="space-y-4">
                        {p.deepFrustrations.map((f, i) => (
                          <p key={i} className="prose-narrative text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>{f}</p>
                        ))}
                      </div>
                    </div>

                    {/* Verbatims */}
                    <div className="max-w-3xl mb-10">
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-4" style={{ color: FEPEM.colors.purple }}>
                        <MessageSquareQuote size={18} /> Verbatims clés
                      </h4>
                      <div className="space-y-4">
                        {p.verbatims.map((v, i) => (
                          <blockquote key={i} className="p-5 rounded-xl" style={{ background: `${FEPEM.colors.purple}06` }}>
                            <p className="text-base italic leading-relaxed" style={{ color: FEPEM.colors.text }}>"{v.text}"</p>
                            <p className="text-xs mt-2 font-medium" style={{ color: FEPEM.colors.purple }}>Contexte : {v.context}</p>
                          </blockquote>
                        ))}
                      </div>
                    </div>

                    {/* Signaux */}
                    <div className="max-w-3xl">
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>
                        <Zap size={18} style={{ color: FEPEM.colors.purple }} /> Signaux
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: FEPEM.colors.error }}>Signaux forts</p>
                          <div className="space-y-2">
                            {p.signalsForts.map((s, i) => (
                              <div key={i} className="flex gap-2">
                                <Radio size={12} className="flex-shrink-0 mt-1.5" style={{ color: FEPEM.colors.error }} />
                                <p className="text-sm leading-relaxed" style={{ color: FEPEM.colors.text }}>{s}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: FEPEM.colors.textMuted }}>Signaux faibles</p>
                          <div className="space-y-2">
                            {p.signauxFaibles.map((s, i) => (
                              <div key={i} className="flex gap-2">
                                <Radio size={12} className="flex-shrink-0 mt-1.5" style={{ color: FEPEM.colors.textMuted }} />
                                <p className="text-sm leading-relaxed" style={{ color: FEPEM.colors.text }}>{s}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Analyse croisée */}
      <div className="py-16" style={{ background: FEPEM.colors.backgroundAlt }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>Analyse croisée</h2>
          <p className="text-lg mb-4 max-w-3xl" style={{ color: FEPEM.colors.textMuted }}>
            Ce que les 7 profils révèlent quand on croise les signaux.
          </p>
          <div className="max-w-3xl mb-12">
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Les signaux individuels, pris isolément, peuvent sembler être des cas particuliers. Mais quand Kidisti, Daniel, Véronique et Isabelle expriment des frustrations convergentes depuis des situations très différentes, on observe un pattern. Ces récurrences indiquent des problèmes structurels qui appellent une réponse au niveau du produit, pas au niveau de l'interface.
            </p>
          </div>

          <h3 className="flex items-center gap-2 text-xl font-bold mb-8" style={{ color: FEPEM.colors.error }}>
            <TrendingUp size={20} /> Signaux forts
          </h3>
          <div className="space-y-6 mb-16">
            {crossAnalysis.signalsForts.map((signal, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden"
                style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
              >
                <button
                  onClick={() => setExpandedSignal(expandedSignal === `fort-${i}` ? null : `fort-${i}`)}
                  className="w-full p-6 text-left flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white" style={{ background: FEPEM.colors.error }}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base" style={{ color: FEPEM.colors.purpleDark }}>{signal.title}</h4>
                    <p className="text-sm mt-1" style={{ color: FEPEM.colors.textMuted }}>
                      Participants : {signal.participants.join(', ')}
                    </p>
                  </div>
                  {expandedSignal === `fort-${i}` ? (
                    <ChevronUp size={18} className="flex-shrink-0 mt-1" style={{ color: FEPEM.colors.textLight }} />
                  ) : (
                    <ChevronDown size={18} className="flex-shrink-0 mt-1" style={{ color: FEPEM.colors.textLight }} />
                  )}
                </button>
                {expandedSignal === `fort-${i}` && (
                  <div className="px-6 pb-6" style={{ animation: 'fadeIn 0.25s ease-out' }}>
                    <div className="ml-12 space-y-4">
                      <p className="prose-narrative text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>
                        {signal.description}
                      </p>
                      <div className="p-4 rounded-xl border-l-4" style={{ background: `${FEPEM.colors.purple}06`, borderLeftColor: FEPEM.colors.purple }}>
                        <p className="text-sm leading-relaxed italic" style={{ color: FEPEM.colors.text }}>
                          {signal.framework}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="flex items-center gap-2 text-xl font-bold mb-8" style={{ color: FEPEM.colors.textMuted }}>
            <Target size={20} /> Signaux faibles
          </h3>
          <div className="space-y-6 mb-16">
            {crossAnalysis.signauxFaibles.map((signal, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden"
                style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
              >
                <button
                  onClick={() => setExpandedSignal(expandedSignal === `faible-${i}` ? null : `faible-${i}`)}
                  className="w-full p-6 text-left flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: FEPEM.colors.background, color: FEPEM.colors.textMuted, border: `1px solid ${FEPEM.colors.border}` }}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base" style={{ color: FEPEM.colors.purpleDark }}>{signal.title}</h4>
                  </div>
                  {expandedSignal === `faible-${i}` ? (
                    <ChevronUp size={18} className="flex-shrink-0 mt-1" style={{ color: FEPEM.colors.textLight }} />
                  ) : (
                    <ChevronDown size={18} className="flex-shrink-0 mt-1" style={{ color: FEPEM.colors.textLight }} />
                  )}
                </button>
                {expandedSignal === `faible-${i}` && (
                  <div className="px-6 pb-6" style={{ animation: 'fadeIn 0.25s ease-out' }}>
                    <div className="ml-12 space-y-4">
                      <p className="prose-narrative text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>
                        {signal.description}
                      </p>
                      <p className="text-sm font-medium leading-relaxed" style={{ color: FEPEM.colors.purple }}>
                        Implication : {signal.implication}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Conclusion</h3>
            <p className="prose-narrative text-lg leading-relaxed mb-6" style={{ color: FEPEM.colors.text }}>
              {crossAnalysis.conclusion}
            </p>
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              Le besoin réel des utilisateurs porte sur la <strong>sécurisation</strong> : sécurisation d'un emploi, d'un proche, d'une réputation institutionnelle. La réponse produit gagne à partir de ce constat.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex items-center justify-between">
          <Link
            to="/tests-moderes"
            className="flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: FEPEM.colors.purple }}
          >
            <ChevronRight size={16} className="rotate-180" /> Retour aux résultats
          </Link>
          <Link
            to="/etude-globale"
            className="flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: FEPEM.colors.purple }}
          >
            Étude globale <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default TesterProfilesAnalysis;
