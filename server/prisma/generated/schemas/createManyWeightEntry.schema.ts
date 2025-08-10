import { z } from 'zod';
import { WeightEntryCreateManyInputObjectSchema } from './objects/WeightEntryCreateManyInput.schema'

export const WeightEntryCreateManySchema = z.object({ data: z.union([ WeightEntryCreateManyInputObjectSchema, z.array(WeightEntryCreateManyInputObjectSchema) ]),  })