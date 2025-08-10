import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedDecimalNullableWithAggregatesFilterObjectSchema } from './NestedDecimalNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedDecimalNullableFilterObjectSchema } from './NestedDecimalNullableFilter.schema'

// prettier-ignore
const Schema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedDecimalNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedDecimalNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedDecimalNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDecimalNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDecimalNullableFilterObjectSchema).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const DecimalNullableWithAggregatesFilterObjectSchema = Schema
