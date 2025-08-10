import { z } from 'zod';
export const WeightEntryDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  date: z.date(),
  weightKg: z.number().int().optional(),
  stones: z.number().int().optional(),
  pounds: z.number().int().optional(),
  ounces: z.number().int().optional(),
  unit: z.unknown()
}));