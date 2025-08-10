import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema'

// prettier-ignore
const Schema = z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const SortOrderInputObjectSchema = Schema
