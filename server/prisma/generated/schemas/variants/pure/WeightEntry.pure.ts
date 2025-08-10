import { z } from 'zod';
import { WeightUnit } from '@prisma/client';


// prettier-ignore
export const WeightEntryModelSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    weightKg: z.number().int(),
    stones: z.number().int(),
    pounds: z.number().int(),
    ounces: z.number().int(),
    unit: z.enum(WeightUnit)
}).strict();

export type WeightEntryModelType = z.infer<typeof WeightEntryModelSchema>;
