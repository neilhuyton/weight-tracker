// server/src/trpc/trpc-context.ts
import { getAllWeights } from '@/client.js';

import { PrismaClient } from '@prisma/client';

export async function createContext() {
  const weights = getAllWeights;
  const prisma = new PrismaClient();

  return { weights, prisma };
}

export type Context = Awaited<ReturnType<typeof createContext>>
