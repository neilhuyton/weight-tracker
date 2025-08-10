import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const WeightEntryMaxAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntryMaxAggregateInputType, Prisma.WeightEntryMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  date: z.literal(true).optional(),
  weightKg: z.literal(true).optional(),
  stones: z.literal(true).optional(),
  pounds: z.literal(true).optional(),
  ounces: z.literal(true).optional(),
  unit: z.literal(true).optional()
}).strict();
export const WeightEntryMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  date: z.literal(true).optional(),
  weightKg: z.literal(true).optional(),
  stones: z.literal(true).optional(),
  pounds: z.literal(true).optional(),
  ounces: z.literal(true).optional(),
  unit: z.literal(true).optional()
}).strict();
