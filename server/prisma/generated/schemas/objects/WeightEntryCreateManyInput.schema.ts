import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

export const WeightEntryCreateManyInputObjectSchema: z.ZodType<Prisma.WeightEntryCreateManyInput, Prisma.WeightEntryCreateManyInput> = z.object({
  date: z.union([z.date(), z.iso.datetime()]).optional(),
  weightKg: z.number().int().optional().nullable(),
  stones: z.number().int().optional().nullable(),
  pounds: z.number().int().optional().nullable(),
  ounces: z.number().int().optional().nullable(),
  unit: WeightUnitSchema.optional()
}).strict();
export const WeightEntryCreateManyInputObjectZodSchema = z.object({
  date: z.union([z.date(), z.iso.datetime()]).optional(),
  weightKg: z.number().int().optional().nullable(),
  stones: z.number().int().optional().nullable(),
  pounds: z.number().int().optional().nullable(),
  ounces: z.number().int().optional().nullable(),
  unit: WeightUnitSchema.optional()
}).strict();
