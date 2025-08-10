import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryWhereInputObjectSchema } from './WeightEntryWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumWeightUnitFilterObjectSchema } from './EnumWeightUnitFilter.schema';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

// prettier-ignore
const Schema = z.object({
  AND: z.union([z.lazy(() => WeightEntryWhereInputObjectSchema), z.lazy(() => WeightEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeightEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeightEntryWhereInputObjectSchema), z.lazy(() => WeightEntryWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  weightKg: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  stones: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pounds: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  ounces: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  unit: z.union([z.lazy(() => EnumWeightUnitFilterObjectSchema), WeightUnitSchema]).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const WeightEntryWhereUniqueInputObjectSchema = Schema
