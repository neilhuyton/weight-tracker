import { z } from 'zod';

// prettier-ignore
export const WeightEntryInputSchema = z.object({
    date: z.date(),
    weightKg: z.number().optional(),
    stones: z.number().int().optional(),
    pounds: z.number().optional(),
    ounces: z.number().optional(),
    unit: z.enum(WeightUnit)
}).strict();

export type WeightEntryInputType = z.infer<typeof WeightEntryInputSchema>;
