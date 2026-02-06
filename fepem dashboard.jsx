import React, { useState, useRef, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, Legend, Area, AreaChart
} from 'recharts';
import { 
  X, Menu, ChevronRight, ChevronDown, Users, AlertTriangle, CheckCircle, 
  XCircle, Clock, Target, Heart, Brain, Eye, MessageSquare, Zap, 
  TrendingUp, TrendingDown, Minus, ArrowRight, FileText, BarChart2,
  Grid, List, Filter, Search, ExternalLink, Bookmark, Share2
} from 'lucide-react';

// ============================================
// FEPEM DESIGN SYSTEM TOKENS
// ============================================
const FEPEM = {
  colors: {
    cream: '#FAF7F0',
    creamLight: '#FAF4EB',
    purple: '#4917E6',
    purpleLight: '#6B3FF5',
    purpleDark: '#170845',
    gold: '#FDCF7E',
    goldLight: '#FEE4B3',
    text: '#262624',
    textMuted: '#403F3C',
    textLight: '#6B6B68',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    border: '#E5E2DB'
  }
};

// ============================================
// DATA
// ============================================
const hypothesesData = [
  { id: 'H1', name: 'Onboarding clair', status: 'partial', score: 60 },
  { id: 'H2', name: 'Parcours PE (<5min)', status: 'invalid', score: 20 },
  { id: 'H3', name: 'Parcours SPE (<5min)', status: 'partial', score: 50 },
  { id: 'H4', name: 'Prise de contact fluide', status: 'invalid', score: 25 },
  { id: 'H5', name: 'Infos profil justifiées', status: 'valid', score: 85 },
  { id: 'H6', name: 'Suggestions/Candidats compris', status: 'invalid', score: 15 },
  { id: 'H7', name: 'Obligatoire/plus tard compris', status: 'valid', score: 90 },
  { id: 'H8', name: 'Confiance annonce SPE', status: 'partial', score: 45 },
  { id: 'H9', name: 'Confiance profil candidat', status: 'invalid', score: 30 },
  { id: 'H10', name: 'Conformité annonce PE', status: 'partial', score: 55 },
  { id: 'H11', name: 'Critères filtre suffisants', status: 'invalid', score: 20 },
];

const panelData = [
  { id: '01', name: 'Kidisti', profile: 'Aide ménagère, arrivée récente', segment: 'SPE', duration: 127, status: 'complete' },
  { id: '02', name: 'Séverine', profile: 'Bénéficiaire PCH, maladie de Lyme', segment: 'PE', duration: 68, status: 'complete' },
  { id: '03', name: 'Daniel', profile: 'Aide-soignant en alternance', segment: 'SPE', duration: 67, status: 'interrupted' },
  { id: '04', name: 'Isabelle', profile: 'Ingénieur, aidante parents', segment: 'PE', duration: 60, status: 'complete' },
  { id: '05', name: 'Véronique', profile: 'Ancienne VP FEPEM', segment: 'PE', duration: 110, status: 'complete' },
  { id: '06', name: 'Mégane', profile: 'Aide ménagère, 8 ans exp.', segment: 'SPE', duration: 56, status: 'complete' },
  { id: '07', name: 'Anne-Sophie', profile: 'Responsable régionale FEPEM', segment: 'PE', duration: 54, status: 'complete' },
];

const issuesData = [
  { category: 'Bugs techniques', count: 4, severity: 'high', items: ['Exigences MDP masquées', 'Checkboxes ambiguës', 'Clavier numérique', 'Créneaux par défaut'] },
  { category: 'Quick wins', count: 5, severity: 'medium', items: ['Message automatique', 'Exigences MDP', 'Courriel → Email', 'Salaire brut/net', 'Bouton Postuler'] },
  { category: 'Problèmes UX', count: 6, severity: 'critical', items: ['Terminologie métier', 'Interface planification', 'Suggestions/Candidats', 'Confusion offres/profils', 'Aidants familiaux', 'Mobile-only'] },
  { category: 'Points positifs', count: 3, severity: 'positive', items: ['Interface agréable', 'Onboarding compris', 'Messagerie sécurisante'] },
];

const archetypes = [
  {
    id: 'spe-precaire',
    name: 'SPE Précaire',
    subtitle: 'Kidisti',
    description: 'Cherche la stabilité et la sécurité administrative. A besoin de documentation officielle pour France Travail.',
    need: 'Certitude et structure',
    frustration: 'Incertitude sur les engagements',
    quote: 'Je reste là-bas ou je rentre chez moi ? J\'ai besoin du contrat pour France Travail.',
    color: FEPEM.colors.error
  },
  {
    id: 'spe-multi',
    name: 'SPE Multi-clients',
    subtitle: 'Mégane',
    description: 'Enchaîne les missions courtes, optimise son planning. Fonctionne sans contrat formel.',
    need: 'Flexibilité et volume',
    frustration: 'Peu de frustrations majeures',
    quote: 'L\'application est très bien développée, elle est claire.',
    color: FEPEM.colors.success
  },
  {
    id: 'pe-aidant',
    name: 'PE Aidant familial',
    subtitle: 'Isabelle',
    description: 'Cherche pour un proche vulnérable, pas pour soi. Approche méthodique et prudente.',
    need: 'Confiance et vérification',
    frustration: 'Absence de parcours dédié',
    quote: 'Ce n\'est pas pour moi, c\'est pour mes parents.',
    color: FEPEM.colors.gold
  },
  {
    id: 'pe-expert',
    name: 'PE Expert',
    subtitle: 'Véronique',
    description: 'Connaît le secteur, a des exigences élevées. Refuse les outils simplifiés.',
    need: 'Outils complets de recrutement',
    frustration: 'Format mobile-only rédhibitoire',
    quote: 'On ne recrute pas sur un portable la personne qui va s\'occuper de la prunelle de leurs yeux.',
    color: FEPEM.colors.purple
  }
];

const signals = [
  { name: 'Checkboxes pré-cochées', count: 5, type: 'bug', impact: 'high' },
  { name: 'Mot de passe masqué', count: 5, type: 'bug', impact: 'high' },
  { name: 'Géolocalisation demandée', count: 5, type: 'feature', impact: 'high' },
  { name: 'Vérification profils', count: 3, type: 'trust', impact: 'critical' },
  { name: 'Contact direct', count: 3, type: 'feature', impact: 'high' },
  { name: 'CV/Lettre motivation', count: 2, type: 'feature', impact: 'medium' },
];

const verbatims = [
  { author: 'Véronique', segment: 'PE', theme: 'Mobile', text: 'C\'est rédhibitoire si c\'est sur application mobile seulement.', impact: 'critical' },
  { author: 'Daniel', segment: 'SPE', theme: 'Confusion', text: 'Selon moi les personnes comme Jean Martin c\'est comme moi. Je me sens mal à l\'aise.', impact: 'critical' },
  { author: 'Kidisti', segment: 'SPE', theme: 'Sécurité', text: 'Je reste là-bas ou je rentre chez moi ? C\'est pas clair.', impact: 'high' },
  { author: 'Séverine', segment: 'PE', theme: 'Terminologie', text: 'C\'est trop vague, ça veut tout et rien dire.', impact: 'high' },
  { author: 'Anne-Sophie', segment: 'PE', theme: 'UX', text: 'J\'ai pas compris ce que c\'était mes suggestions.', impact: 'medium' },
  { author: 'Mégane', segment: 'SPE', theme: 'Positif', text: 'L\'application est très bien développée, elle est claire.', impact: 'positive' },
];

// ============================================
// COMPONENTS
// ============================================

// Side Panel for editorial content
const SidePanel = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div 
        className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden"
        style={{ animation: 'slideIn 0.3s ease-out' }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: FEPEM.colors.border, background: FEPEM.colors.cream }}>
          <h2 className="text-xl font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <X size={20} style={{ color: FEPEM.colors.textMuted }} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-88px)] px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Stat Card
const StatCard = ({ label, value, subtext, trend, icon: Icon }) => (
  <div 
    className="p-6 rounded-2xl border"
    style={{ background: 'white', borderColor: FEPEM.colors.border }}
  >
    <div className="flex items-start justify-between mb-4">
      <div 
        className="p-3 rounded-xl"
        style={{ background: `${FEPEM.colors.purple}10` }}
      >
        <Icon size={20} style={{ color: FEPEM.colors.purple }} />
      </div>
      {trend && (
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          trend === 'up' ? 'bg-green-50 text-green-600' :
          trend === 'down' ? 'bg-red-50 text-red-600' :
          'bg-gray-50 text-gray-600'
        }`}>
          {trend === 'up' ? <TrendingUp size={14} className="inline mr-1" /> :
           trend === 'down' ? <TrendingDown size={14} className="inline mr-1" /> :
           <Minus size={14} className="inline mr-1" />}
          {trend}
        </span>
      )}
    </div>
    <div className="text-3xl font-bold mb-1" style={{ color: FEPEM.colors.purpleDark }}>{value}</div>
    <div className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{label}</div>
    {subtext && <div className="text-xs mt-2" style={{ color: FEPEM.colors.textLight }}>{subtext}</div>}
  </div>
);

// Hypothesis Badge
const HypothesisBadge = ({ status }) => {
  const config = {
    valid: { bg: '#DCFCE7', color: '#166534', label: 'Validée', icon: CheckCircle },
    partial: { bg: '#FEF3C7', color: '#92400E', label: 'Partielle', icon: AlertTriangle },
    invalid: { bg: '#FEE2E2', color: '#991B1B', label: 'Invalidée', icon: XCircle }
  };
  const { bg, color, label, icon: Icon } = config[status];
  
  return (
    <span 
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: bg, color }}
    >
      <Icon size={12} />
      {label}
    </span>
  );
};

// Archetype Card
const ArchetypeCard = ({ archetype, onClick }) => (
  <div 
    className="p-6 rounded-2xl border cursor-pointer hover:shadow-lg transition-all group"
    style={{ background: 'white', borderColor: FEPEM.colors.border }}
    onClick={onClick}
  >
    <div className="flex items-start gap-4 mb-4">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
        style={{ background: archetype.color }}
      >
        {archetype.name.charAt(0)}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{archetype.name}</h4>
        <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{archetype.subtitle}</p>
      </div>
      <ChevronRight 
        size={20} 
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: FEPEM.colors.textLight }}
      />
    </div>
    <p className="text-sm mb-4" style={{ color: FEPEM.colors.text }}>{archetype.description}</p>
    <div className="flex gap-2">
      <span 
        className="text-xs px-2 py-1 rounded-full"
        style={{ background: `${archetype.color}15`, color: archetype.color }}
      >
        {archetype.need}
      </span>
    </div>
  </div>
);

// Verbatim Card
const VerbatimCard = ({ verbatim }) => {
  const impactColors = {
    critical: FEPEM.colors.error,
    high: FEPEM.colors.warning,
    medium: FEPEM.colors.gold,
    positive: FEPEM.colors.success
  };
  
  return (
    <div 
      className="p-5 rounded-xl border-l-4"
      style={{ 
        background: 'white', 
        borderLeftColor: impactColors[verbatim.impact],
        borderTop: `1px solid ${FEPEM.colors.border}`,
        borderRight: `1px solid ${FEPEM.colors.border}`,
        borderBottom: `1px solid ${FEPEM.colors.border}`
      }}
    >
      <p className="text-sm italic mb-3" style={{ color: FEPEM.colors.text }}>
        "{verbatim.text}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span 
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ 
              background: verbatim.segment === 'PE' ? `${FEPEM.colors.purple}15` : `${FEPEM.colors.gold}30`,
              color: verbatim.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleDark
            }}
          >
            {verbatim.segment}
          </span>
          <span className="text-xs" style={{ color: FEPEM.colors.textMuted }}>{verbatim.author}</span>
        </div>
        <span 
          className="text-xs px-2 py-0.5 rounded-full"
          style={{ background: `${impactColors[verbatim.impact]}15`, color: impactColors[verbatim.impact] }}
        >
          {verbatim.theme}
        </span>
      </div>
    </div>
  );
};

// Issue Category Card
const IssueCategoryCard = ({ issue, onClick }) => {
  const severityConfig = {
    critical: { bg: '#FEE2E2', border: '#EF4444', icon: AlertTriangle },
    high: { bg: '#FEF3C7', border: '#F59E0B', icon: AlertTriangle },
    medium: { bg: '#E0F2FE', border: '#0EA5E9', icon: Zap },
    positive: { bg: '#DCFCE7', border: '#22C55E', icon: CheckCircle }
  };
  const config = severityConfig[issue.severity];
  const Icon = config.icon;
  
  return (
    <div 
      className="p-5 rounded-xl border cursor-pointer hover:shadow-md transition-all"
      style={{ background: config.bg, borderColor: config.border }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={18} style={{ color: config.border }} />
          <span className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{issue.category}</span>
        </div>
        <span 
          className="text-2xl font-bold"
          style={{ color: config.border }}
        >
          {issue.count}
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {issue.items.slice(0, 3).map((item, i) => (
          <span 
            key={i}
            className="text-xs px-2 py-0.5 rounded-full bg-white/60"
            style={{ color: FEPEM.colors.text }}
          >
            {item}
          </span>
        ))}
        {issue.items.length > 3 && (
          <span className="text-xs px-2 py-0.5" style={{ color: FEPEM.colors.textMuted }}>
            +{issue.items.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

// Navigation
const Navigation = ({ activeSection, onNavigate, sections }) => (
  <nav 
    className="sticky top-0 z-40 border-b backdrop-blur-md"
    style={{ background: `${FEPEM.colors.cream}E6`, borderColor: FEPEM.colors.border }}
  >
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
            style={{ background: FEPEM.colors.purple }}
          >
            F
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: FEPEM.colors.purpleDark }}>FEPEM</div>
            <div className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Tests Modérés</div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === section.id 
                  ? 'text-white' 
                  : 'hover:bg-white/50'
              }`}
              style={{ 
                background: activeSection === section.id ? FEPEM.colors.purple : 'transparent',
                color: activeSection === section.id ? 'white' : FEPEM.colors.text
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
            style={{ color: FEPEM.colors.textMuted }}
          >
            <Share2 size={18} />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
            style={{ color: FEPEM.colors.textMuted }}
          >
            <Bookmark size={18} />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// Section Header
const SectionHeader = ({ title, subtitle, action }) => (
  <div className="flex items-end justify-between mb-8">
    <div>
      <h2 
        className="text-2xl font-bold mb-2"
        style={{ color: FEPEM.colors.purpleDark }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{subtitle}</p>
      )}
    </div>
    {action}
  </div>
);

// Charts Components
const HypothesesChart = () => {
  const chartData = hypothesesData.map(h => ({
    ...h,
    fill: h.status === 'valid' ? FEPEM.colors.success : 
          h.status === 'partial' ? FEPEM.colors.warning : 
          FEPEM.colors.error
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={FEPEM.colors.border} />
        <XAxis type="number" domain={[0, 100]} tick={{ fill: FEPEM.colors.textMuted, fontSize: 12 }} />
        <YAxis 
          type="category" 
          dataKey="name" 
          tick={{ fill: FEPEM.colors.text, fontSize: 12 }}
          width={110}
        />
        <Tooltip 
          contentStyle={{ 
            background: 'white', 
            border: `1px solid ${FEPEM.colors.border}`,
            borderRadius: 8
          }}
        />
        <Bar dataKey="score" radius={[0, 4, 4, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const ValidationPieChart = () => {
  const data = [
    { name: 'Validées', value: 2, color: FEPEM.colors.success },
    { name: 'Partielles', value: 5, color: FEPEM.colors.warning },
    { name: 'Invalidées', value: 4, color: FEPEM.colors.error },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
          verticalAlign="bottom"
          formatter={(value) => <span style={{ color: FEPEM.colors.text, fontSize: 12 }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const SignalRadarChart = () => {
  const data = [
    { subject: 'Checkboxes', A: 5, fullMark: 7 },
    { subject: 'MDP', A: 5, fullMark: 7 },
    { subject: 'Géoloc', A: 5, fullMark: 7 },
    { subject: 'Vérification', A: 3, fullMark: 7 },
    { subject: 'Contact', A: 3, fullMark: 7 },
    { subject: 'CV', A: 2, fullMark: 7 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke={FEPEM.colors.border} />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: FEPEM.colors.text, fontSize: 11 }}
        />
        <PolarRadiusAxis tick={{ fill: FEPEM.colors.textMuted, fontSize: 10 }} />
        <Radar
          name="Mentions"
          dataKey="A"
          stroke={FEPEM.colors.purple}
          fill={FEPEM.colors.purple}
          fillOpacity={0.3}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const DurationChart = () => {
  const data = panelData.map(p => ({
    name: p.name,
    duration: p.duration,
    fill: p.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.gold
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={FEPEM.colors.border} />
        <XAxis dataKey="name" tick={{ fill: FEPEM.colors.text, fontSize: 11 }} />
        <YAxis tick={{ fill: FEPEM.colors.textMuted, fontSize: 11 }} />
        <Tooltip 
          contentStyle={{ 
            background: 'white', 
            border: `1px solid ${FEPEM.colors.border}`,
            borderRadius: 8
          }}
        />
        <Bar dataKey="duration" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function FEPEMSynthesisDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidePanel, setSidePanel] = useState({ open: false, title: '', content: null });
  
  const sections = [
    { id: 'overview', label: 'Vue d\'ensemble' },
    { id: 'panel', label: 'Panel' },
    { id: 'hypotheses', label: 'Hypothèses' },
    { id: 'findings', label: 'Constats' },
    { id: 'archetypes', label: 'Archétypes' },
    { id: 'signals', label: 'Signaux' },
    { id: 'recommendations', label: 'Actions' },
  ];

  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openArchetypePanel = (archetype) => {
    setSidePanel({
      open: true,
      title: archetype.name,
      content: (
        <div className="space-y-6">
          <div 
            className="p-6 rounded-xl"
            style={{ background: `${archetype.color}10` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: archetype.color }}
              >
                {archetype.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{archetype.name}</h3>
                <p style={{ color: FEPEM.colors.textMuted }}>{archetype.subtitle}</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: FEPEM.colors.text }}>{archetype.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Besoin fondamental</h4>
            <div 
              className="p-4 rounded-lg border"
              style={{ borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart size={16} style={{ color: archetype.color }} />
                <span className="font-medium" style={{ color: FEPEM.colors.text }}>{archetype.need}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Frustration principale</h4>
            <div 
              className="p-4 rounded-lg border"
              style={{ borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} style={{ color: FEPEM.colors.error }} />
                <span className="font-medium" style={{ color: FEPEM.colors.text }}>{archetype.frustration}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Verbatim clé</h4>
            <blockquote 
              className="p-4 rounded-lg border-l-4 italic"
              style={{ 
                background: FEPEM.colors.creamLight, 
                borderLeftColor: archetype.color,
                color: FEPEM.colors.text
              }}
            >
              "{archetype.quote}"
            </blockquote>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Modèle mental</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-24 text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>Attente</div>
                <div className="flex-1 h-2 rounded-full" style={{ background: `${archetype.color}30` }}>
                  <div className="h-full rounded-full" style={{ width: '80%', background: archetype.color }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>Réalité app</div>
                <div className="flex-1 h-2 rounded-full" style={{ background: `${FEPEM.colors.error}30` }}>
                  <div className="h-full rounded-full" style={{ width: '30%', background: FEPEM.colors.error }} />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Recommandations</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: FEPEM.colors.success }} />
                Adapter le parcours aux besoins spécifiques
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: FEPEM.colors.success }} />
                Renforcer les éléments de confiance
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: FEPEM.colors.success }} />
                Proposer des options adaptées au contexte
              </li>
            </ul>
          </div>
        </div>
      )
    });
  };

  const openIssuePanel = (issue) => {
    setSidePanel({
      open: true,
      title: issue.category,
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{issue.count}</span>
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ 
                background: issue.severity === 'critical' ? '#FEE2E2' : 
                           issue.severity === 'high' ? '#FEF3C7' :
                           issue.severity === 'positive' ? '#DCFCE7' : '#E0F2FE',
                color: issue.severity === 'critical' ? '#991B1B' :
                       issue.severity === 'high' ? '#92400E' :
                       issue.severity === 'positive' ? '#166534' : '#0369A1'
              }}
            >
              {issue.severity}
            </span>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Détail des éléments</h4>
            <div className="space-y-3">
              {issue.items.map((item, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-lg border flex items-center gap-3"
                  style={{ borderColor: FEPEM.colors.border }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ background: `${FEPEM.colors.purple}10`, color: FEPEM.colors.purple }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ color: FEPEM.colors.text }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="min-h-screen" style={{ background: FEPEM.colors.cream, fontFamily: 'Montserrat, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
        sections={sections}
      />
      
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${FEPEM.colors.purpleDark} 0%, ${FEPEM.colors.purple} 100%)` }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: FEPEM.colors.gold, filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: FEPEM.colors.purpleLight, filter: 'blur(80px)' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-16 relative">
          <div className="max-w-3xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: FEPEM.colors.gold }} />
              <span className="text-sm text-white/80">Synthèse Recherche Utilisateur</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tests Utilisateurs Modérés
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Application FEPEM - Mise en relation PE/SPE
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-sm text-white/60">participants</div>
              </div>
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold text-white">11</div>
                <div className="text-sm text-white/60">hypothèses testées</div>
              </div>
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold" style={{ color: FEPEM.colors.gold }}>4</div>
                <div className="text-sm text-white/60">invalidées</div>
              </div>
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-sm text-white/60">session interrompue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Overview Section */}
        <section 
          ref={el => sectionRefs.current['overview'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Vue d'ensemble"
            subtitle="Synthèse des tests utilisateurs conduits du 29 janvier au 4 février 2026"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Participants testés"
              value="7"
              subtext="4 PE, 3 SPE"
              icon={Users}
            />
            <StatCard 
              label="Hypothèses validées"
              value="2/11"
              subtext="18% de validation"
              trend="down"
              icon={Target}
            />
            <StatCard 
              label="Durée moyenne"
              value="77 min"
              subtext="Prévu: 60 min"
              icon={Clock}
            />
            <StatCard 
              label="Problèmes critiques"
              value="6"
              subtext="UX structurels"
              trend="critical"
              icon={AlertTriangle}
            />
          </div>
          
          {/* Key Insight Banner */}
          <div 
            className="p-8 rounded-2xl mb-12"
            style={{ background: `linear-gradient(135deg, ${FEPEM.colors.purpleDark} 0%, ${FEPEM.colors.purple} 100%)` }}
          >
            <div className="flex items-start gap-6">
              <div 
                className="p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <Brain size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Constat principal</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Le modèle marketplace transactionnel est inadapté aux relations d'emploi longues 
                  caractéristiques du secteur (5-7 ans en moyenne). Les utilisateurs en situation précaire 
                  cherchent la <strong className="text-white">sécurité</strong>, pas le choix.
                </p>
              </div>
            </div>
          </div>
          
          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Validation des hypothèses</h3>
              <ValidationPieChart />
            </div>
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Signaux récurrents</h3>
              <SignalRadarChart />
            </div>
          </div>
        </section>

        {/* Panel Section */}
        <section 
          ref={el => sectionRefs.current['panel'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Panel de participants"
            subtitle="7 utilisateurs testés sur 2 segments distincts"
          />
          
          <div 
            className="rounded-2xl border overflow-hidden"
            style={{ background: 'white', borderColor: FEPEM.colors.border }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: FEPEM.colors.creamLight }}>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>#</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Participant</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Profil</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Segment</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Durée</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {panelData.map((participant, i) => (
                    <tr 
                      key={participant.id}
                      className="border-t hover:bg-gray-50 transition-colors"
                      style={{ borderColor: FEPEM.colors.border }}
                    >
                      <td className="px-6 py-4 text-sm" style={{ color: FEPEM.colors.textMuted }}>{participant.id}</td>
                      <td className="px-6 py-4">
                        <span className="font-medium" style={{ color: FEPEM.colors.purpleDark }}>{participant.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: FEPEM.colors.text }}>{participant.profile}</td>
                      <td className="px-6 py-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            background: participant.segment === 'PE' ? `${FEPEM.colors.purple}15` : `${FEPEM.colors.gold}30`,
                            color: participant.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleDark
                          }}
                        >
                          {participant.segment}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: FEPEM.colors.text }}>{participant.duration} min</td>
                      <td className="px-6 py-4">
                        {participant.status === 'complete' ? (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600">
                            <CheckCircle size={14} /> Complète
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-red-600">
                            <XCircle size={14} /> Interrompue
                          </span>
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
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <DurationChart />
            </div>
          </div>
        </section>

        {/* Hypotheses Section */}
        <section 
          ref={el => sectionRefs.current['hypotheses'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Validation des hypothèses"
            subtitle="11 hypothèses testées, 2 validées, 5 partiellement validées, 4 invalidées"
          />
          
          <div 
            className="p-6 rounded-2xl border mb-8"
            style={{ background: 'white', borderColor: FEPEM.colors.border }}
          >
            <HypothesesChart />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hypothesesData.map((h) => (
              <div 
                key={h.id}
                className="p-5 rounded-xl border hover:shadow-md transition-all cursor-pointer"
                style={{ background: 'white', borderColor: FEPEM.colors.border }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-sm font-bold"
                    style={{ color: FEPEM.colors.purple }}
                  >
                    {h.id}
                  </span>
                  <HypothesisBadge status={h.status} />
                </div>
                <p className="text-sm" style={{ color: FEPEM.colors.text }}>{h.name}</p>
                <div className="mt-3 h-2 rounded-full" style={{ background: FEPEM.colors.border }}>
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${h.score}%`,
                      background: h.status === 'valid' ? FEPEM.colors.success : 
                                 h.status === 'partial' ? FEPEM.colors.warning : 
                                 FEPEM.colors.error
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Findings Section */}
        <section 
          ref={el => sectionRefs.current['findings'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Constats et problèmes"
            subtitle="Classification des insights par catégorie et sévérité"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {issuesData.map((issue) => (
              <IssueCategoryCard 
                key={issue.category}
                issue={issue}
                onClick={() => openIssuePanel(issue)}
              />
            ))}
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Verbatims significatifs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verbatims.map((v, i) => (
                <VerbatimCard key={i} verbatim={v} />
              ))}
            </div>
          </div>
        </section>

        {/* Archetypes Section */}
        <section 
          ref={el => sectionRefs.current['archetypes'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Archétypes utilisateurs"
            subtitle="4 profils types identifiés à partir des comportements observés"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {archetypes.map((archetype) => (
              <ArchetypeCard 
                key={archetype.id}
                archetype={archetype}
                onClick={() => openArchetypePanel(archetype)}
              />
            ))}
          </div>
        </section>

        {/* Signals Section */}
        <section 
          ref={el => sectionRefs.current['signals'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Signaux récurrents"
            subtitle="Patterns identifiés à travers les sessions de test"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
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
                          background: signal.impact === 'critical' ? FEPEM.colors.error :
                                     signal.impact === 'high' ? FEPEM.colors.warning :
                                     FEPEM.colors.purple
                        }}
                      >
                        <span className="text-xs font-bold text-white">{signal.count}/7</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Distribution par type</h3>
              <SignalRadarChart />
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section 
          ref={el => sectionRefs.current['recommendations'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Recommandations"
            subtitle="Actions priorisées par horizon temporel"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Court terme */}
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${FEPEM.colors.error}15` }}
                >
                  <Zap size={20} style={{ color: FEPEM.colors.error }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>Court terme</h3>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Avant lancement</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Bug MDP', 'Checkboxes', 'Message auto', 'Label EMPLOYEUR'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${FEPEM.colors.error}15`, color: FEPEM.colors.error }}
                    >
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Moyen terme */}
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${FEPEM.colors.warning}15` }}
                >
                  <Target size={20} style={{ color: FEPEM.colors.warning }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>Moyen terme</h3>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Q2 2026</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Filtres avancés', 'Contact direct', 'CV/LM', 'Planification', 'Carte trajets'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${FEPEM.colors.warning}15`, color: FEPEM.colors.warning }}
                    >
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Long terme */}
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${FEPEM.colors.purple}15` }}
                >
                  <TrendingUp size={20} style={{ color: FEPEM.colors.purple }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>Long terme</h3>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Évolutions stratégiques</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Version desktop', 'Vérification profils', 'Parcours aidants', 'Modes d\'usage'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${FEPEM.colors.purple}15`, color: FEPEM.colors.purple }}
                    >
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="mt-20 pt-8 border-t text-center"
          style={{ borderColor: FEPEM.colors.border }}
        >
          <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>
            Synthèse réalisée par Victor Soussan (Cocolabs) - Février 2026
          </p>
          <p className="text-xs mt-2" style={{ color: FEPEM.colors.textLight }}>
            Tests modérés - 7 participants - Application FEPEM
          </p>
        </footer>
      </div>
      
      {/* Side Panel */}
      <SidePanel 
        isOpen={sidePanel.open}
        onClose={() => setSidePanel({ ...sidePanel, open: false })}
        title={sidePanel.title}
      >
        {sidePanel.content}
      </SidePanel>
    </div>
  );
}