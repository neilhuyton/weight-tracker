import { z } from 'zod';
import { WeightEntrySelectObjectSchema } from './objects/WeightEntrySelect.schema.js';
import { WeightEntryWhereUniqueInputObjectSchema } from './objects/WeightEntryWhereUniqueInput.schema'

export const WeightEntryFindUniqueSchema = z.object({ select: WeightEntrySelectObjectSchema.optional(),  where: WeightEntryWhereUniqueInputObjectSchema })