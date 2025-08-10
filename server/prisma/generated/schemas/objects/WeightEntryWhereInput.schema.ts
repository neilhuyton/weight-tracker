import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumWeightUnitFilterObjectSchema } from './EnumWeightUnitFilter.schema';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

export const WeightEntryWhereInputObjectSchema: z.ZodType<Prisma.WeightEntryWhereInput, Prisma.WeightEntryWhereInput> = z.object({
  AND: z.union([z.lazy(() => WeightEntryWhereInputObjectSchema), z.lazy(() => WeightEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeightEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeightEntryWhereInputObjectSchema), z.lazy(() => WeightEntryWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.iso.datetime()])]).optional(),
  weightKg: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  stones: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pounds: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ounces: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  unit: z.union([z.lazy(() => EnumWeightUnitFilterObjectSchema), WeightUnitSchema]).optional()
}).strict();
export const WeightEntryWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => WeightEntryWhereInputObjectSchema), z.lazy(() => WeightEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeightEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeightEntryWhereInputObjectSchema), z.lazy(() => WeightEntryWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.iso.datetime()])]).optional(),
  weightKg: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  stones: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pounds: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ounces: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  unit: z.union([z.lazy(() => EnumWeightUnitFilterObjectSchema), WeightUnitSchema]).optional()
}).strict();
