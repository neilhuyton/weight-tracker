import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const WeightEntryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntryMaxOrderByAggregateInput, Prisma.WeightEntryMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional()
}).strict();
export const WeightEntryMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional()
}).strict();
