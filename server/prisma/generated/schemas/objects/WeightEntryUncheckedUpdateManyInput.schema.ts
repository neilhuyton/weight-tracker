import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { WeightUnitSchema } from '../enums/WeightUnit.schema';
import { EnumWeightUnitFieldUpdateOperationsInputObjectSchema } from './EnumWeightUnitFieldUpdateOperationsInput.schema'

export const WeightEntryUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.WeightEntryUncheckedUpdateManyInput, Prisma.WeightEntryUncheckedUpdateManyInput> = z.object({
  date: z.union([z.union([z.date(), z.iso.datetime()]), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  weightKg: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stones: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pounds: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ounces: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  unit: z.union([WeightUnitSchema, z.lazy(() => EnumWeightUnitFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WeightEntryUncheckedUpdateManyInputObjectZodSchema = z.object({
  date: z.union([z.union([z.date(), z.iso.datetime()]), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  weightKg: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stones: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pounds: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ounces: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  unit: z.union([WeightUnitSchema, z.lazy(() => EnumWeightUnitFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
