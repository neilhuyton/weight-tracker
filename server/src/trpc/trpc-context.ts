import { getAllWeights } from '@/client.js';

import { PrismaClient } from '@prisma/client';

export async function createContext() {
  const tasks = getAllWeights;
  const prisma = new PrismaClient();

  return { tasks, prisma };
}

export type Context = Awaited<ReturnType<typeof createContext>>
