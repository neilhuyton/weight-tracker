import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumWeightUnitWithAggregatesFilterObjectSchema } from './EnumWeightUnitWithAggregatesFilter.schema';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

export const WeightEntryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WeightEntryScalarWhereWithAggregatesInput, Prisma.WeightEntryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.union([z.date(), z.iso.datetime()])]).optional(),
  weightKg: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  stones: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  pounds: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  ounces: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  unit: z.union([z.lazy(() => EnumWeightUnitWithAggregatesFilterObjectSchema), WeightUnitSchema]).optional()
}).strict();
export const WeightEntryScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WeightEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.union([z.date(), z.iso.datetime()])]).optional(),
  weightKg: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  stones: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  pounds: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  ounces: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  unit: z.union([z.lazy(() => EnumWeightUnitWithAggregatesFilterObjectSchema), WeightUnitSchema]).optional()
}).strict();
