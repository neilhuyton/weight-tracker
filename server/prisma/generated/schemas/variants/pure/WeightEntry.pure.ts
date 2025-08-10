import { z } from 'zod';

// prettier-ignore
export const WeightEntryModelSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    weightKg: z.number(),
    stones: z.number().int(),
    pounds: z.number(),
    ounces: z.number(),
    unit: z.enum(WeightUnit)
}).strict();

export type WeightEntryModelType = z.infer<typeof WeightEntryModelSchema>;
