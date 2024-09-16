// src/components/AnalysisResults.tsx
import React from 'react';

// Define and export the type
export interface AnalysisResultsType {
  memoization?: {
    'react-memo'?: string;
    'useMemo'?: string;
  };
  'state-management'?: {
    useState?: string;
    useReducer?: string;
    redux?: string;
    mobx?: string;
  };
  'ssr-vs-csr'?: {
    ssr?: string;
    csr?: string;
  };
}

interface AnalysisResultsProps {
  results: AnalysisResultsType | null;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  //my code
  console.log(results);
  
  //my code
  return (
    <div className="results">
      {results ? (
        <div>
          <h3 className="text-lg font-semibold mt-4">Analysis Results</h3>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      ) : (
        <p>No results available.</p>
      )}
    </div>
  );
};

export default AnalysisResults;
