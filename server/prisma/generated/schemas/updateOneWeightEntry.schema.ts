import { z } from 'zod';
import { WeightEntrySelectObjectSchema } from './objects/WeightEntrySelect.schema.js';
import { WeightEntryUpdateInputObjectSchema } from './objects/WeightEntryUpdateInput.schema';
import { WeightEntryUncheckedUpdateInputObjectSchema } from './objects/WeightEntryUncheckedUpdateInput.schema';
import { WeightEntryWhereUniqueInputObjectSchema } from './objects/WeightEntryWhereUniqueInput.schema'

export const WeightEntryUpdateOneSchema = z.object({ select: WeightEntrySelectObjectSchema.optional(),  data: z.union([WeightEntryUpdateInputObjectSchema, WeightEntryUncheckedUpdateInputObjectSchema]), where: WeightEntryWhereUniqueInputObjectSchema  })