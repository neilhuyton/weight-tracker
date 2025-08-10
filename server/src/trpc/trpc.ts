import { initTRPC } from '@trpc/server';
import { CreateWeightSchema, WeightListQuerySchema, UpdateWeightSchema } from 'weight-tracker-schema';
import { z } from 'zod';
import type { Context } from './trpc-context.js';

const t = initTRPC.context<Context>().create();

const UpdateSchema = z.object({
  id: z.coerce.number(),
  weight: UpdateWeightSchema,
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const weightRouter = router({
  getWeights: publicProcedure.input(WeightListQuerySchema).query(async ({ input, ctx }) => {
    const { prisma } = ctx;
    return prisma.weight.findMany({
      where: { completed: !!input.completed },
    });
  }),
  createWeight: publicProcedure.input(CreateWeightSchema).mutation(async ({ input, ctx }) => {
    const { prisma } = ctx;
    return prisma.weight.create({
      data: input,
    });
  }),
  // updateWeight: publicProcedure.input(UpdateSchema).mutation(async ({ input, ctx }) => {
  //   const weights = ctx.weights;
  //   const { id, weight } = input;
  //   return weights.updateWeight(id, weight);
  // }),
  // deleteWeight: publicProcedure.input(z.coerce.number()).mutation(async ({ input, ctx }) => {
  //   const weights = ctx.weights;
  //   return weights.deleteWeight(input);
  // }),
});
