import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Level0MissionLanding from './pages/Level0MissionLanding';
import Level1GlobalStudy from './pages/Level1GlobalStudy';
import Level2aModeratedTests from './pages/Level2aModeratedTests';
import Level2bUnmoderatedTests from './pages/Level2bUnmoderatedTests';
import ArchetypeArticle from './pages/ArchetypeArticle';
import TesterProfilesAnalysis from './pages/TesterProfilesAnalysis';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Level0MissionLanding />} />
      <Route path="/etude-globale" element={<Level1GlobalStudy />} />
      <Route path="/tests-moderes" element={<Level2aModeratedTests />} />
      <Route path="/tests-moderes/archetypes/:archetypeId" element={<ArchetypeArticle />} />
      <Route path="/tests-moderes/analyse-profils" element={<TesterProfilesAnalysis />} />
      <Route path="/tests-non-moderes" element={<Level2bUnmoderatedTests />} />
    </Routes>
  );
}
