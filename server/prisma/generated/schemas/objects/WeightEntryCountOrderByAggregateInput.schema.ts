import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const WeightEntryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WeightEntryCountOrderByAggregateInput, Prisma.WeightEntryCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional()
}).strict();
export const WeightEntryCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: SortOrderSchema.optional(),
  stones: SortOrderSchema.optional(),
  pounds: SortOrderSchema.optional(),
  ounces: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional()
}).strict();
