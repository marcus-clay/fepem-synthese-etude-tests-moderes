import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Users, BarChart2, Target } from 'lucide-react';
import { FEPEM } from '../design/tokens';
import { unmoderatedData } from '../data/unmoderated';
import PageLayout from '../components/layout/PageLayout';
import StatCard from '../components/ui/StatCard';
import HeroSection from '../components/ui/HeroSection';

const Level2bUnmoderatedTests = () => (
  <PageLayout>
    <HeroSection
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&h=600&fit=crop&crop=faces&q=80"
      imageAlt="Personne utilisant un écran digital"
      badge={{ text: 'Campagne en cours', color: FEPEM.colors.warning }}
      title={unmoderatedData.title}
      subtitle={unmoderatedData.subtitle}
      stats={[
        { value: '30', label: 'participants cibles' },
        { value: '3', label: 'segments' },
        { value: '20-25 min', label: 'durée session' },
      ]}
    >
      <nav className="flex items-center gap-2 text-sm text-white/60">
        <Link to="/" className="hover:underline text-white/80">Accueil</Link>
        <ChevronRight size={14} />
        <Link to="/etude-globale" className="hover:underline text-white/80">Étude Globale</Link>
        <ChevronRight size={14} />
        <span className="text-white">Tests Non-Modérés</span>
      </nav>
    </HeroSection>

    {/* Narrative zone: Context */}
    <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Contexte</h2>
      <p className="prose-narrative text-lg leading-relaxed mb-6" style={{ color: FEPEM.colors.text }}>
        {unmoderatedData.context}
      </p>
      <h3 className="text-xl font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Complémentarité avec les tests modérés</h3>
      <p className="prose-narrative text-lg leading-relaxed" style={{ color: FEPEM.colors.text }}>
        {unmoderatedData.complementarite}
      </p>
    </div>

    {/* Data zone: Methodologie */}
    <div style={{ background: FEPEM.colors.backgroundAlt }} className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>Méthodologie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard label="Plateforme" value={unmoderatedData.methodologie.plateforme} icon={BarChart2} />
          <StatCard label="Durée session" value={unmoderatedData.methodologie.duree} icon={Clock} />
          <StatCard label="Participants cibles" value="30" icon={Users} />
          <StatCard label="Segments" value="3" icon={Target} />
        </div>
        <div
          className="p-6 rounded-2xl"
          style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}` }}
        >
          <h3 className="text-base font-semibold mb-2" style={{ color: FEPEM.colors.purpleDark }}>Protocole</h3>
          <p className="text-base leading-relaxed" style={{ color: FEPEM.colors.text }}>
            {unmoderatedData.methodologie.protocole}
          </p>
        </div>
      </div>
    </div>

    {/* Data zone: Tasks */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Structure du test</h2>
      <p className="text-lg mb-8 max-w-3xl prose-narrative leading-relaxed" style={{ color: FEPEM.colors.textMuted }}>
        5 tâches séquentielles couvrant l'ensemble du parcours utilisateur.
      </p>
      <div className="space-y-4">
        {unmoderatedData.tasks.map((task) => (
          <div
            key={task.id}
            className="p-6 rounded-2xl border flex flex-col md:flex-row md:items-start gap-4"
            style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
              style={{ background: FEPEM.colors.purple }}
            >
              {task.id}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold mb-1" style={{ color: FEPEM.colors.purpleDark }}>{task.label}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: FEPEM.colors.text }}>{task.description}</p>
              <div className="flex flex-wrap gap-2">
                {task.metriques.map((m, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: `${FEPEM.colors.purple}10`, color: FEPEM.colors.purple }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Data zone: Metriques */}
    <div style={{ background: FEPEM.colors.backgroundAlt }} className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>Métriques cibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {unmoderatedData.metriques.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border"
              style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{m.label}</h3>
                <span
                  className="text-sm font-bold px-3 py-1 rounded-full"
                  style={{ background: `${FEPEM.colors.purple}10`, color: FEPEM.colors.purple }}
                >
                  {m.cible}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: FEPEM.colors.text }}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Data zone: Panel */}
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: FEPEM.colors.purpleDark }}>Panel et segments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {unmoderatedData.panel.segments.map((seg, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border"
            style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: FEPEM.colors.purple }}>{seg.count}</div>
            <h3 className="text-base font-semibold mb-1" style={{ color: FEPEM.colors.purpleDark }}>{seg.label}</h3>
            <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{seg.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Planning des rounds</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {unmoderatedData.panel.rounds.map((round, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border"
            style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
          >
            <h4 className="text-sm font-bold mb-1" style={{ color: FEPEM.colors.purple }}>{round.label}</h4>
            <p className="text-sm" style={{ color: FEPEM.colors.text }}>{round.participants} participants · {round.dates}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Resultats placeholder */}
    <div
      className="py-16"
      style={{ background: FEPEM.colors.backgroundAlt }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: FEPEM.colors.purpleDark }}>
          Résultats
        </h2>
        <div
          className="p-8 rounded-2xl border"
          style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
        >
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${FEPEM.colors.warning}15` }}>
            <Clock size={28} style={{ color: FEPEM.colors.warning }} />
          </div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: FEPEM.colors.purpleDark }}>Campagne en cours</h3>
          <p className="text-base leading-relaxed prose-narrative" style={{ color: FEPEM.colors.textMuted }}>
            Les résultats seront publiés à l'issue de la campagne de tests non-modérés. Les données quantitatives viendront compléter les insights qualitatifs des tests modérés.
          </p>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Level2bUnmoderatedTests;
