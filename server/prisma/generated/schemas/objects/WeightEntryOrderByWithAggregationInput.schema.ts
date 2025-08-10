import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WeightEntryCountOrderByAggregateInputObjectSchema } from './WeightEntryCountOrderByAggregateInput.schema';
import { WeightEntryAvgOrderByAggregateInputObjectSchema } from './WeightEntryAvgOrderByAggregateInput.schema';
import { WeightEntryMaxOrderByAggregateInputObjectSchema } from './WeightEntryMaxOrderByAggregateInput.schema';
import { WeightEntryMinOrderByAggregateInputObjectSchema } from './WeightEntryMinOrderByAggregateInput.schema';
import { WeightEntrySumOrderByAggregateInputObjectSchema } from './WeightEntrySumOrderByAggregateInput.schema'

export const WeightEntryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WeightEntryOrderByWithAggregationInput, Prisma.WeightEntryOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stones: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pounds: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ounces: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unit: SortOrderSchema.optional(),
  _count: z.lazy(() => WeightEntryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WeightEntryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WeightEntryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WeightEntryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WeightEntrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WeightEntryOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stones: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pounds: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ounces: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unit: SortOrderSchema.optional(),
  _count: z.lazy(() => WeightEntryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WeightEntryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WeightEntryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WeightEntryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WeightEntrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
