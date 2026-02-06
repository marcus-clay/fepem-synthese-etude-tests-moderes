import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, AlertTriangle, Eye, Zap, ArrowRight, ChevronLeft } from 'lucide-react';
import { FEPEM } from '../design/tokens';
import { archetypes, archetypesDetailData } from '../data/archetypes';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/ui/HeroSection';

const ArchetypeArticle = () => {
  const { archetypeId } = useParams();
  const archetype = archetypes.find(a => a.id === archetypeId);
  const detail = archetypesDetailData[archetypeId];

  if (!archetype || !detail) return <Navigate to="/tests-moderes" replace />;

  const currentIndex = archetypes.findIndex(a => a.id === archetypeId);
  const prev = currentIndex > 0 ? archetypes[currentIndex - 1] : null;
  const next = currentIndex < archetypes.length - 1 ? archetypes[currentIndex + 1] : null;

  return (
    <PageLayout>
      {/* Hero with archetype image */}
      <HeroSection
        image={detail.testImage || undefined}
        imageAlt={`Session de test, ${archetype.name}`}
        badge={{ text: detail.segment, color: archetype.color }}
        title={archetype.name}
        subtitle={archetype.subtitle}
        author={detail.participants}
      >
        <nav className="flex items-center gap-2 text-sm text-white/60 mt-4">
          <Link to="/" className="hover:underline text-white/80">Accueil</Link>
          <ChevronRight size={14} />
          <Link to="/tests-moderes" className="hover:underline text-white/80">Tests Modérés</Link>
          <ChevronRight size={14} />
          <span className="text-white">{archetype.name}</span>
        </nav>
      </HeroSection>

      {/* Pull-quote */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <blockquote
          className="max-w-3xl p-8 rounded-2xl text-xl md:text-2xl italic border-l-4 prose-narrative leading-relaxed"
          style={{ background: `${archetype.color}08`, borderLeftColor: archetype.color, color: FEPEM.colors.text }}
        >
          "{archetype.quote}"
          <cite className="block text-base mt-3 not-italic font-medium" style={{ color: archetype.color }}>
            {archetype.subtitle}
          </cite>
        </blockquote>
      </div>

      {/* Narrative zone: Presentation */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <div className="max-w-3xl">
          <p className="prose-narrative text-lg leading-relaxed mb-8" style={{ color: FEPEM.colors.text }}>
            {detail.profileDescription}
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Objectif réel</h2>
          <p className="prose-narrative text-lg leading-relaxed mb-8" style={{ color: FEPEM.colors.text }}>
            {detail.objectifReel}
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Modèle mental</h2>
          <p className="prose-narrative text-lg italic leading-relaxed" style={{ color: FEPEM.colors.text }}>
            "{detail.modeleMental}"
          </p>
        </div>
      </div>

      {/* Narrative zone: Parcours type */}
      <div className="py-12" style={{ background: FEPEM.colors.backgroundAlt }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Parcours type</h2>
            <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
              {detail.parcoursType}
            </p>
          </div>
        </div>
      </div>

      {/* Data zone: Hierarchie des besoins */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Hiérarchie des besoins</h2>
        <div
          className="p-6 md:p-8 rounded-2xl border"
          style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
        >
          <div className="space-y-5">
            {detail.needsHierarchy.map((need, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-base font-medium" style={{ color: FEPEM.colors.text }}>
                    <span className="font-bold" style={{ color: FEPEM.colors.purple }}>{i + 1}.</span> {need.label}
                  </span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: FEPEM.colors.border }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${need.level}%`, background: `linear-gradient(90deg, ${FEPEM.colors.purple}, ${archetype.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative zone: Frustrations */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>Analyse des frustrations</h2>

          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4" style={{ color: FEPEM.colors.warning }}>
            <AlertTriangle size={18} /> Frustrations de surface
          </h3>
          <div className="space-y-4 mb-10">
            {detail.surfaceFrustrations.map((f, i) => (
              <div key={i}>
                <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
                  "{f.text}"
                </p>
                <p className="text-sm mt-1 font-medium" style={{ color: FEPEM.colors.warning }}>{f.participant}</p>
              </div>
            ))}
          </div>

          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4" style={{ color: FEPEM.colors.error }}>
            <Eye size={18} /> Frustrations profondes (non-dits)
          </h3>
          <div className="space-y-6">
            {detail.deepFrustrations.map((f, i) => (
              <div key={i}>
                <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
                  {f.text}
                </p>
                <p className="text-sm mt-2 font-medium" style={{ color: FEPEM.colors.error }}>{f.participant}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data zone: Ecart de modele mental */}
      <div className="py-12" style={{ background: FEPEM.colors.backgroundAlt }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Écart de modèle mental</h2>
          <div className="space-y-4">
            {detail.mentalModelGap.map((gap, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                  style={{ background: `${archetype.color}15`, color: archetype.color }}
                >
                  {gap.participant}
                </span>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 flex-1">
                  <div className="p-4 rounded-xl flex-1" style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}` }}>
                    <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.success }}>Attente</span>
                    <p className="text-sm mt-1" style={{ color: FEPEM.colors.text }}>{gap.attente}</p>
                  </div>
                  <ArrowRight size={16} className="hidden md:block flex-shrink-0" style={{ color: FEPEM.colors.textLight }} />
                  <div className="p-4 rounded-xl flex-1" style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}` }}>
                    <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.textMuted }}>Réalité</span>
                    <p className="text-sm mt-1" style={{ color: FEPEM.colors.text }}>{gap.realite}</p>
                  </div>
                  <ArrowRight size={16} className="hidden md:block flex-shrink-0" style={{ color: FEPEM.colors.textLight }} />
                  <div className="p-4 rounded-xl flex-1" style={{ background: '#FFF0F0', border: `1px solid ${FEPEM.colors.error}30` }}>
                    <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.error }}>Impact</span>
                    <p className="text-sm mt-1 font-medium" style={{ color: FEPEM.colors.error }}>{gap.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative zone: Verbatims cles */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Verbatims clés</h2>
        <div className="max-w-3xl space-y-6">
          {detail.verbatims.map((v, i) => (
            <blockquote
              key={i}
              className="p-6 rounded-2xl text-lg italic prose-narrative leading-relaxed"
              style={{ background: `${FEPEM.colors.purple}06`, color: FEPEM.colors.text }}
            >
              "{v.text}"
              <cite className="block text-sm mt-2 not-italic font-medium" style={{ color: FEPEM.colors.purple }}>
                {v.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Full-width image */}
      {detail.testImage && (
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: FEPEM.colors.cardBorder }}>
            <img
              src={detail.testImage}
              alt={`Session de test, ${archetype.subtitle}`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Narrative zone: Signaux a creuser */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>
          <Zap size={22} style={{ color: FEPEM.colors.purple }} /> Signaux à creuser
        </h2>
        <div className="max-w-3xl space-y-4">
          {detail.signalsToExplore.map((signal, i) => (
            <div key={i} className="flex gap-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                style={{ background: FEPEM.colors.purple }}
              >
                {i + 1}
              </div>
              <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
                {signal}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative zone: Perspectives */}
      <div className="py-12" style={{ background: FEPEM.colors.backgroundAlt }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Perspectives</h2>
          <div className="max-w-3xl prose-narrative text-lg leading-relaxed space-y-4" style={{ color: FEPEM.colors.text }}>
            <p>
              <strong>Pour la FEPEM :</strong> Ce profil met en évidence un écart entre le modèle produit actuel et les besoins observés pour ce segment. Les attentes identifiées lors des tests suggèrent des axes d'évolution possibles pour mieux couvrir cette cible.
            </p>
            <p>
              <strong>Pour les utilisateurs :</strong> Les frustrations exprimées portent à la fois sur des éléments d'interface et sur des dimensions plus larges liées à la confiance, la sécurité et la considération. Les pistes d'amélioration concernent aussi bien l'ergonomie que la conception globale de l'expérience.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation prev/next */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              to={`/tests-moderes/archetypes/${prev.id}`}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: FEPEM.colors.purple }}
            >
              <ChevronLeft size={16} /> {prev.name}
            </Link>
          ) : <div />}
          <Link
            to="/tests-moderes"
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-md btn-press"
            style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}`, color: FEPEM.colors.purple }}
          >
            Retour aux résultats
          </Link>
          {next ? (
            <Link
              to={`/tests-moderes/archetypes/${next.id}`}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: FEPEM.colors.purple }}
            >
              {next.name} <ChevronRight size={16} />
            </Link>
          ) : <div />}
        </div>
      </div>
    </PageLayout>
  );
};

export default ArchetypeArticle;
