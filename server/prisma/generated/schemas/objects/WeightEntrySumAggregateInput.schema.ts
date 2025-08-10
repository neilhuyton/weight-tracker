import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const WeightEntrySumAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntrySumAggregateInputType, Prisma.WeightEntrySumAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  weightKg: z.literal(true).optional(),
  stones: z.literal(true).optional(),
  pounds: z.literal(true).optional(),
  ounces: z.literal(true).optional()
}).strict();
export const WeightEntrySumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  weightKg: z.literal(true).optional(),
  stones: z.literal(true).optional(),
  pounds: z.literal(true).optional(),
  ounces: z.literal(true).optional()
}).strict();
