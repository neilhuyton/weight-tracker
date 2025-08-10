import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

// prettier-ignore
const Schema = z.object({
  equals: WeightUnitSchema.optional(),
  in: WeightUnitSchema.array().optional(),
  notIn: WeightUnitSchema.array().optional(),
  not: z.union([WeightUnitSchema, z.lazy(() => NestedEnumWeightUnitFilterObjectSchema)]).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const NestedEnumWeightUnitFilterObjectSchema = Schema
