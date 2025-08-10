import { z } from 'zod';
import { WeightEntrySelectObjectSchema } from './objects/WeightEntrySelect.schema.js';
import { WeightEntryCreateInputObjectSchema } from './objects/WeightEntryCreateInput.schema';
import { WeightEntryUncheckedCreateInputObjectSchema } from './objects/WeightEntryUncheckedCreateInput.schema'

export const WeightEntryCreateOneSchema = z.object({ select: WeightEntrySelectObjectSchema.optional(),  data: z.union([WeightEntryCreateInputObjectSchema, WeightEntryUncheckedCreateInputObjectSchema])  })