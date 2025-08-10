const API_URL = 'http://localhost:4001';

import type { CreateWeight, Weight, UpdateWeight } from 'weight-tracker-schema';

import type { weightRouter } from '@server/src/trpc/trpc';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const client = createTRPCProxyClient<typeof weightRouter>({
  links: [
    httpBatchLink({
      url: `${API_URL}/api/trpc`,
    }),
  ],
});

export const fetchWeights = async (showCompleted: boolean): Promise<Weight[]> => {
  return client.getWeights.query({ completed: showCompleted });
};

export const createWeight = async (weight: CreateWeight): Promise<void> => {
  return client.createWeight.mutate(weight);
};

export const updateWeight = async (id: string, weight: UpdateWeight): Promise<void> => {
  return client.updateWeight.mutate({ id: Number(id), weight });
};

export const deleteWeight = async (id: string): Promise<void> => {
  return client.deleteWeight.mutate(Number(id));
};
