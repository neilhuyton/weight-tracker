import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const WeightEntryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntryAvgOrderByAggregateInput, Prisma.WeightEntryAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional()
}).strict();
export const WeightEntryAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional()
}).strict();
