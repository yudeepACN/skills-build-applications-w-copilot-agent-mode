import dotenv from 'dotenv';

dotenv.config();

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

console.log(`Starting OctoFit backend on ${baseUrl}`);

import('./src/index').catch((error) => {
  console.error('Failed to start OctoFit backend:', error);
  process.exit(1);
});

export { baseUrl, codespaceName };
