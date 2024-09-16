export const analyzeContent = (files: string[]): any => {
    const results: any = {
      memoization: {
        'react-memo': 'Not Analyzed',
        'useMemo': 'Not Analyzed',
      },
      'state-management': {
        useState: 'Not Analyzed',
        useReducer: 'Not Analyzed',
        redux: 'Not Analyzed',
        mobx: 'Not Analyzed',
      },
      'ssr-vs-csr': {
        ssr: 'Not Analyzed',
        csr: 'Not Analyzed',
      },
    };
  
    if (files.includes('index.tsx')) {
      results['memoization']['react-memo'] = 'Good';
      results['memoization']['useMemo'] = 'Moderate';
    }
    if (files.includes('store.ts')) {
      results['state-management']['redux'] = 'Fair';
    }
  
    return results;
  };
  