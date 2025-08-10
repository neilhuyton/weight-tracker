import { z } from 'zod';
import { WeightUnit } from '../../node_modules/.prisma/client'; // Adjust path as needed

export const WeightSchema = z.object({
  id: z.coerce.number(),
  date: z.string().datetime(), // Matches Prisma DateTime serialized as string
  ounces: z.number().nullable().optional(), // Allow null or undefined
  pounds: z.number().nullable().optional(), // Allow null or undefined
  stones: z.number().nullable().optional(), // Allow null or undefined
  unit: z.nativeEnum(WeightUnit), // Use Prisma's WeightUnit enum
  weightKg: z.number().nullable().optional(), // Allow null or undefined
});

export const CreateWeightSchema = WeightSchema.omit({ id: true });
export const UpdateWeightSchema = WeightSchema.partial().omit({ id: true });
export const WeightListSchema = z.array(WeightSchema);
export const WeightListQuerySchema = z.object({});

export type Weight = z.infer<typeof WeightSchema>;
export type CreateWeight = z.infer<typeof CreateWeightSchema>;
export type UpdateWeight = z.infer<typeof UpdateWeightSchema>;
export type WeightList = z.infer<typeof WeightListSchema>;
