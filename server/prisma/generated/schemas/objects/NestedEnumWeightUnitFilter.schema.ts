import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

export const NestedEnumWeightUnitFilterObjectSchema: z.ZodType<Prisma.NestedEnumWeightUnitFilter, Prisma.NestedEnumWeightUnitFilter> = z.object({
  equals: WeightUnitSchema.optional(),
  in: WeightUnitSchema.array().optional(),
  notIn: WeightUnitSchema.array().optional(),
  not: z.union([WeightUnitSchema, z.lazy(() => NestedEnumWeightUnitFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumWeightUnitFilterObjectZodSchema = z.object({
  equals: WeightUnitSchema.optional(),
  in: WeightUnitSchema.array().optional(),
  notIn: WeightUnitSchema.array().optional(),
  not: z.union([WeightUnitSchema, z.lazy(() => NestedEnumWeightUnitFilterObjectSchema)]).optional()
}).strict();
