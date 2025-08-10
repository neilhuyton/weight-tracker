import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema';
import { NestedEnumWeightUnitFilterObjectSchema } from './NestedEnumWeightUnitFilter.schema'

export const EnumWeightUnitFilterObjectSchema: z.ZodType<Prisma.EnumWeightUnitFilter, Prisma.EnumWeightUnitFilter> = z.object({
  equals: WeightUnitSchema.optional(),
  in: WeightUnitSchema.array().optional(),
  notIn: WeightUnitSchema.array().optional(),
  not: z.union([WeightUnitSchema, z.lazy(() => NestedEnumWeightUnitFilterObjectSchema)]).optional()
}).strict();
export const EnumWeightUnitFilterObjectZodSchema = z.object({
  equals: WeightUnitSchema.optional(),
  in: WeightUnitSchema.array().optional(),
  notIn: WeightUnitSchema.array().optional(),
  not: z.union([WeightUnitSchema, z.lazy(() => NestedEnumWeightUnitFilterObjectSchema)]).optional()
}).strict();
