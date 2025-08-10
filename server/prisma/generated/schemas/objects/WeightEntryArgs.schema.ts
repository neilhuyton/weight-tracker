import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntrySelectObjectSchema } from './WeightEntrySelect.schema'

// prettier-ignore
const Schema = z.object({
  select: z.lazy(() => WeightEntrySelectObjectSchema).optional()
}).strict();

 export const WeightEntryArgsObjectSchema = Schema
