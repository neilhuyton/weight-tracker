import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

// prettier-ignore
const Schema = z.object({
  set: WeightUnitSchema.optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const EnumWeightUnitFieldUpdateOperationsInputObjectSchema = Schema
