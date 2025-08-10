import { z } from 'zod';
import { WeightUnit } from '@prisma/client';


// prettier-ignore
export const WeightEntryInputSchema = z.object({
    date: z.date(),
    weightKg: z.number().int().optional(),
    stones: z.number().int().optional(),
    pounds: z.number().int().optional(),
    ounces: z.number().int().optional(),
    unit: z.enum(WeightUnit)
}).strict();

export type WeightEntryInputType = z.infer<typeof WeightEntryInputSchema>;
