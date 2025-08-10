import { z } from 'zod';
import { WeightEntrySelectObjectSchema } from './objects/WeightEntrySelect.schema.js';
import { WeightEntryWhereUniqueInputObjectSchema } from './objects/WeightEntryWhereUniqueInput.schema';
import { WeightEntryCreateInputObjectSchema } from './objects/WeightEntryCreateInput.schema';
import { WeightEntryUncheckedCreateInputObjectSchema } from './objects/WeightEntryUncheckedCreateInput.schema';
import { WeightEntryUpdateInputObjectSchema } from './objects/WeightEntryUpdateInput.schema';
import { WeightEntryUncheckedUpdateInputObjectSchema } from './objects/WeightEntryUncheckedUpdateInput.schema'

export const WeightEntryUpsertSchema = z.object({ select: WeightEntrySelectObjectSchema.optional(),  where: WeightEntryWhereUniqueInputObjectSchema, create: z.union([ WeightEntryCreateInputObjectSchema, WeightEntryUncheckedCreateInputObjectSchema ]), update: z.union([ WeightEntryUpdateInputObjectSchema, WeightEntryUncheckedUpdateInputObjectSchema ])  })