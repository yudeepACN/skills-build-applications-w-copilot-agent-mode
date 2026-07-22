import dotenv from 'dotenv';

dotenv.config();

import('./src/index').catch((error) => {
  console.error('Failed to start OctoFit backend:', error);
  process.exit(1);
});

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export { baseUrl, codespaceName };
