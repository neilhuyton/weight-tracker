// client/src/api.ts
import type {  Weight } from 'shared';
import type { weightRouter } from 'server/src/trpc/trpc';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const API_URL = 'http://localhost:4001';

const client = createTRPCProxyClient<typeof weightRouter>({
  links: [
    httpBatchLink({
      url: `${API_URL}/api/trpc`,
    }),
  ],
});

export const fetchWeights = async (): Promise<Weight[]> => {
  console.log('fetchWeights');
  return client.getWeights.query({});
};
// export const createWeight = async (weight: CreateWeight): Promise<void> => {
//   return client.createWeight.mutate(weight);
// };

// export const updateWeight = async (id: string, weight: UpdateWeight): Promise<void> => {
//   return client.updateWeight.mutate({ id: Number(id), weight });
// };

// export const deleteWeight = async (id: string): Promise<void> => {
//   return client.deleteWeight.mutate(Number(id));
// };
