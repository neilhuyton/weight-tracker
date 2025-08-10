import { z } from 'zod';
import type { Prisma } from '@prisma/client';


// prettier-ignore
const Schema = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  weightKg: z.boolean().optional(),
  stones: z.boolean().optional(),
  pounds: z.boolean().optional(),
  ounces: z.boolean().optional(),
  unit: z.boolean().optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const WeightEntrySelectObjectSchema = Schema
