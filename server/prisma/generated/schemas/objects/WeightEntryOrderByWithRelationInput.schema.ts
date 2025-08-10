import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'

export const WeightEntryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WeightEntryOrderByWithRelationInput, Prisma.WeightEntryOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stones: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pounds: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ounces: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unit: SortOrderSchema.optional()
}).strict();
export const WeightEntryOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  weightKg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stones: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pounds: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ounces: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unit: SortOrderSchema.optional()
}).strict();
