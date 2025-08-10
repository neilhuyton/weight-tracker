import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightUnitSchema } from '../enums/WeightUnit.schema'

export const EnumWeightUnitFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumWeightUnitFieldUpdateOperationsInput, Prisma.EnumWeightUnitFieldUpdateOperationsInput> = z.object({
  set: WeightUnitSchema.optional()
}).strict();
export const EnumWeightUnitFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: WeightUnitSchema.optional()
}).strict();
