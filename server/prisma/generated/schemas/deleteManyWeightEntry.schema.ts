import { z } from 'zod';
import { WeightEntryWhereInputObjectSchema } from './objects/WeightEntryWhereInput.schema'

export const WeightEntryDeleteManySchema = z.object({ where: WeightEntryWhereInputObjectSchema.optional()  })