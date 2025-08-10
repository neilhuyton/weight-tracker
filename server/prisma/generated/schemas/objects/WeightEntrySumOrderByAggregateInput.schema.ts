import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const WeightEntrySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntrySumOrderByAggregateInput, Prisma.WeightEntrySumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional()
}).strict();
export const WeightEntrySumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional()
}).strict();
