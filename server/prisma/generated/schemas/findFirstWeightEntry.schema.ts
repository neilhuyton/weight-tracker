import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WeightEntryOrderByWithRelationInputObjectSchema } from './objects/WeightEntryOrderByWithRelationInput.schema';
import { WeightEntryWhereInputObjectSchema } from './objects/WeightEntryWhereInput.schema';
import { WeightEntryWhereUniqueInputObjectSchema } from './objects/WeightEntryWhereUniqueInput.schema';
import { WeightEntryScalarFieldEnumSchema } from './enums/WeightEntryScalarFieldEnum.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WeightEntryFindFirstSelectSchema: z.ZodType<Prisma.WeightEntrySelect, Prisma.WeightEntrySelect> = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    weightKg: z.boolean().optional(),
    stones: z.boolean().optional(),
    pounds: z.boolean().optional(),
    ounces: z.boolean().optional(),
    unit: z.boolean().optional()
  }).strict();

export const WeightEntryFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    weightKg: z.boolean().optional(),
    stones: z.boolean().optional(),
    pounds: z.boolean().optional(),
    ounces: z.boolean().optional(),
    unit: z.boolean().optional()
  }).strict();

export const WeightEntryFindFirstSchema: z.ZodType<Prisma.WeightEntryFindFirstArgs, Prisma.WeightEntryFindFirstArgs> = z.object({ select: WeightEntryFindFirstSelectSchema.optional(),  orderBy: z.union([WeightEntryOrderByWithRelationInputObjectSchema, WeightEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeightEntryWhereInputObjectSchema.optional(), cursor: WeightEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WeightEntryScalarFieldEnumSchema, WeightEntryScalarFieldEnumSchema.array()]).optional() }).strict();

export const WeightEntryFindFirstZodSchema = z.object({ select: WeightEntryFindFirstSelectSchema.optional(),  orderBy: z.union([WeightEntryOrderByWithRelationInputObjectSchema, WeightEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeightEntryWhereInputObjectSchema.optional(), cursor: WeightEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WeightEntryScalarFieldEnumSchema, WeightEntryScalarFieldEnumSchema.array()]).optional() }).strict();