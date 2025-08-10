import { z } from 'zod';
export const WeightEntryGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  date: z.date(),
  weightKg: z.number().int(),
  stones: z.number().int(),
  pounds: z.number().int(),
  ounces: z.number().int(),
  _count: z.object({
    id: z.number(),
    date: z.number(),
    weightKg: z.number(),
    stones: z.number(),
    pounds: z.number(),
    ounces: z.number(),
    unit: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    weightKg: z.number().nullable(),
    stones: z.number().nullable(),
    pounds: z.number().nullable(),
    ounces: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    weightKg: z.number().nullable(),
    stones: z.number().nullable(),
    pounds: z.number().nullable(),
    ounces: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    date: z.date().nullable(),
    weightKg: z.number().int().nullable(),
    stones: z.number().int().nullable(),
    pounds: z.number().int().nullable(),
    ounces: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    date: z.date().nullable(),
    weightKg: z.number().int().nullable(),
    stones: z.number().int().nullable(),
    pounds: z.number().int().nullable(),
    ounces: z.number().int().nullable()
  }).nullable().optional()
}));