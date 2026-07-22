import dotenv from 'dotenv';

dotenv.config();

import('./src/index').catch((error) => {
  console.error('Failed to start OctoFit backend:', error);
  process.exit(1);
});

const CODESPACE_NAME = process.env.CODESPACE_NAME;
const baseUrl = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

export { baseUrl, CODESPACE_NAME };
