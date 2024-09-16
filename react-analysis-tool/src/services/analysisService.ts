interface AnalysisResults {
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

export const analyzeFiles = (files: { [filename: string]: string }): AnalysisResults => {
  const results: AnalysisResults = {};
  let basePath: string | undefined;

  // Determine the base path from the first filename
  for (const filename in files) {
    if (!basePath) {
      // Extract base path (e.g., 'react-test-app' from 'react-test-app/src/components/App.tsx')
      const parts = filename.split('/');
      basePath = parts[0];
      break;
    }
  }

  if (!basePath) {
    throw new Error('Base path could not be determined.');
  }

  // Function to check for state management techniques
  const checkStateManagement = (content: string) => {
    if (content.includes('useState')) {
      results['state-management'] = { ...results['state-management'], useState: 'Good' };
    }
    if (content.includes('useReducer')) {
      results['state-management'] = { ...results['state-management'], useReducer: 'Excellent' };
    }
    if (content.includes('redux')) {
      results['state-management'] = { ...results['state-management'], redux: 'Fair' };
    }
    if (content.includes('mobx')) {
      results['state-management'] = { ...results['state-management'], mobx: 'Good' };
    }
  };

  // Check all files in src/components/* and src/index.tsx
  for (const filename in files) {
    const fileContent = files[filename];

    // Adjust paths by removing the basePath
    const adjustedFilename = filename.replace(`${basePath}/`, '');

    // Check for memoization techniques
    if (fileContent.includes('React.memo')) {
      results.memoization = { ...results.memoization, 'react-memo': 'Good' };
    }
    if (fileContent.includes('useMemo')) {
      results.memoization = { ...results.memoization, useMemo: 'Moderate' };
    }

    // Check for state management techniques in src/components/* and src/index.tsx
    if (adjustedFilename.startsWith('src/components/') || adjustedFilename === 'src/index.tsx') {
      checkStateManagement(fileContent);
    }

     
  }

  // Always add SSR vs CSR information
  results['ssr-vs-csr'] = {
    ssr: 'Faster initial load',
    csr: 'Faster interactions'
  };

  

  console.log(results); // For debugging

  return results;
};
