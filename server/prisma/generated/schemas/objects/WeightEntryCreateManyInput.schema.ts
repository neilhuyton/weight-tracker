import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

// prettier-ignore
const Schema = z.object({
  date: z.coerce.date().optional(),
  weightKg: z.number().optional().nullable(),
  stones: z.number().int().optional().nullable(),
  pounds: z.number().optional().nullable(),
  ounces: z.number().optional().nullable(),
  unit: WeightUnitSchema.optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const WeightEntryCreateManyInputObjectSchema = Schema
