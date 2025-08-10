import { z } from 'zod';
import { WeightEntryWhereInputObjectSchema } from './objects/WeightEntryWhereInput.schema';
import { WeightEntryOrderByWithAggregationInputObjectSchema } from './objects/WeightEntryOrderByWithAggregationInput.schema';
import { WeightEntryScalarWhereWithAggregatesInputObjectSchema } from './objects/WeightEntryScalarWhereWithAggregatesInput.schema';
import { WeightEntryScalarFieldEnumSchema } from './enums/WeightEntryScalarFieldEnum.schema'

export const WeightEntryGroupBySchema = z.object({ where: WeightEntryWhereInputObjectSchema.optional(), orderBy: z.union([WeightEntryOrderByWithAggregationInputObjectSchema, WeightEntryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: WeightEntryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(WeightEntryScalarFieldEnumSchema)  })