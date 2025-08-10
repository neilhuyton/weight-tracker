import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const WeightEntryWhereUniqueInputObjectSchema: z.ZodType<Prisma.WeightEntryWhereUniqueInput, Prisma.WeightEntryWhereUniqueInput> = z.object({
  id: z.number().int()
}).strict();
export const WeightEntryWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int()
}).strict();
