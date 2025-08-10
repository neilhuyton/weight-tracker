import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const WeightEntryAvgAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntryAvgAggregateInputType, Prisma.WeightEntryAvgAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  weightKg: z.literal(true).optional(),
  stones: z.literal(true).optional(),
  pounds: z.literal(true).optional(),
  ounces: z.literal(true).optional()
}).strict();
export const WeightEntryAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  weightKg: z.literal(true).optional(),
  stones: z.literal(true).optional(),
  pounds: z.literal(true).optional(),
  ounces: z.literal(true).optional()
}).strict();
