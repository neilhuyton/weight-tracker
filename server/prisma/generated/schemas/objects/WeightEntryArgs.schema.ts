import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntrySelectObjectSchema } from './WeightEntrySelect.schema'

export const WeightEntryArgsObjectSchema = z.object({
  select: z.lazy(() => WeightEntrySelectObjectSchema).optional()
}).strict();
export const WeightEntryArgsObjectZodSchema = z.object({
  select: z.lazy(() => WeightEntrySelectObjectSchema).optional()
}).strict();
