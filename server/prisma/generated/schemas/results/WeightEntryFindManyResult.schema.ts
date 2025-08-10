import { z } from 'zod';
export const WeightEntryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  date: z.date(),
  weightKg: z.number().int().optional(),
  stones: z.number().int().optional(),
  pounds: z.number().int().optional(),
  ounces: z.number().int().optional(),
  unit: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});