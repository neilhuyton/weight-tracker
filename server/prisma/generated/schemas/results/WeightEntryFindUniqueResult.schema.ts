import { z } from 'zod';
export const WeightEntryFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  date: z.date(),
  weightKg: z.number().optional(),
  stones: z.number().int().optional(),
  pounds: z.number().optional(),
  ounces: z.number().optional(),
  unit: z.unknown()
}));