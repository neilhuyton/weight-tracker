import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumWeightUnitWithAggregatesFilterObjectSchema } from './EnumWeightUnitWithAggregatesFilter.schema';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

// prettier-ignore
const Schema = z.object({
  AND: z.union([z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  weightKg: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  stones: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  pounds: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  ounces: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  unit: z.union([z.lazy(() => EnumWeightUnitWithAggregatesFilterObjectSchema), WeightUnitSchema]).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const WeightEntryScalarWhereWithAggregatesInputObjectSchema = Schema
