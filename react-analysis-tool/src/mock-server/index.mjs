import express from 'express';
import cors from 'cors';


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/analyze', (req, res) => {
  console.log('Received file for analysis');
  // Simulate analysis
  setTimeout(() => {
    res.json({
      memoization: {
        'react-memo': 'Good',
        'useMemo': 'Moderate',
      },
      'state-management': {
        useState: 'Good',
        useReducer: 'Excellent',
        redux: 'Fair',
        mobx: 'Good',
      },
      'ssr-vs-csr': {
        ssr: 'Faster initial load',
        csr: 'Faster interactions',
      },
    });
  }, 1000);
});

app.get('/results', (req, res) => {
  res.json({
    memoization: {
      'react-memo': 'Good',
      'useMemo': 'Moderate',
    },
    'state-management': {
      useState: 'Good',
      useReducer: 'Excellent',
      redux: 'Fair',
      mobx: 'Good',
    },
    'ssr-vs-csr': {
      ssr: 'Faster initial load',
      csr: 'Faster interactions',
    },
  });
});

app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});
