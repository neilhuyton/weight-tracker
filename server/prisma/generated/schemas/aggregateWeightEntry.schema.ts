import { z } from 'zod';
import { WeightEntryOrderByWithRelationInputObjectSchema } from './objects/WeightEntryOrderByWithRelationInput.schema';
import { WeightEntryWhereInputObjectSchema } from './objects/WeightEntryWhereInput.schema';
import { WeightEntryWhereUniqueInputObjectSchema } from './objects/WeightEntryWhereUniqueInput.schema';
import { WeightEntryCountAggregateInputObjectSchema } from './objects/WeightEntryCountAggregateInput.schema';
import { WeightEntryMinAggregateInputObjectSchema } from './objects/WeightEntryMinAggregateInput.schema';
import { WeightEntryMaxAggregateInputObjectSchema } from './objects/WeightEntryMaxAggregateInput.schema';
import { WeightEntryAvgAggregateInputObjectSchema } from './objects/WeightEntryAvgAggregateInput.schema';
import { WeightEntrySumAggregateInputObjectSchema } from './objects/WeightEntrySumAggregateInput.schema'

export const WeightEntryAggregateSchema = z.object({ orderBy: z.union([WeightEntryOrderByWithRelationInputObjectSchema, WeightEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeightEntryWhereInputObjectSchema.optional(), cursor: WeightEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WeightEntryCountAggregateInputObjectSchema ]).optional(), _min: WeightEntryMinAggregateInputObjectSchema.optional(), _max: WeightEntryMaxAggregateInputObjectSchema.optional(), _avg: WeightEntryAvgAggregateInputObjectSchema.optional(), _sum: WeightEntrySumAggregateInputObjectSchema.optional() })