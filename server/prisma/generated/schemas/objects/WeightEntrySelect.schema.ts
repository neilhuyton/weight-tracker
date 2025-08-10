import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const WeightEntrySelectObjectSchema: z.ZodType<Prisma.WeightEntrySelect, Prisma.WeightEntrySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  weightKg: z.boolean().optional(),
  stones: z.boolean().optional(),
  pounds: z.boolean().optional(),
  ounces: z.boolean().optional(),
  unit: z.boolean().optional()
}).strict();
export const WeightEntrySelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  weightKg: z.boolean().optional(),
  stones: z.boolean().optional(),
  pounds: z.boolean().optional(),
  ounces: z.boolean().optional(),
  unit: z.boolean().optional()
}).strict();
