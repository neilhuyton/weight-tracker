import { z } from 'zod';
import { WeightEntryUpdateManyMutationInputObjectSchema } from './objects/WeightEntryUpdateManyMutationInput.schema';
import { WeightEntryWhereInputObjectSchema } from './objects/WeightEntryWhereInput.schema'

export const WeightEntryUpdateManySchema = z.object({ data: WeightEntryUpdateManyMutationInputObjectSchema, where: WeightEntryWhereInputObjectSchema.optional()  })