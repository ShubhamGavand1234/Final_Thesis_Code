// src/App.tsx
import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import AnalysisResults, { AnalysisResultsType } from './components/AnalysisResults'; // Use named import for the type

const App: React.FC = () => {
  const [results, setResults] = useState<AnalysisResultsType | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React Analysis Tool</h1>
      <UploadForm setResults={setResults} />
      <AnalysisResults results={results} />
    </div>
  );
};

export default App;
