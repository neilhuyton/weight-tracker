import cors from 'cors';
import express from 'express';

import { createTrpcAdapter } from './trpc/trpc-adapter.js';

export async function createServer() {
  const app = express();
  app.use(cors());
  app.use('/api', createTrpcAdapter());

  return app;
}
