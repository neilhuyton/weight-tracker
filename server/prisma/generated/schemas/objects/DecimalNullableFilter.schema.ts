import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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
  not: z.union([z.number(), z.lazy(() => NestedDecimalNullableFilterObjectSchema)]).optional().nullable()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const DecimalNullableFilterObjectSchema = Schema
