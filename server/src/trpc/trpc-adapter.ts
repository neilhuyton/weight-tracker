import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { Router } from 'express';
import { createContext } from './trpc-context';
import { weightRouter } from './trpc';

export function createTrpcAdapter() {
  const router = Router();

  router.use('/trpc', createExpressMiddleware({ router: weightRouter, createContext }));

  return router;
}
