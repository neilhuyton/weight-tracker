import { z } from 'zod';

export const WeightSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.coerce.boolean().default(false),
});

export const CreateWeightSchema = WeightSchema.omit({ id: true });
export const UpdateWeightSchema = WeightSchema.partial().omit({ id: true });

export const WeightListSchema = z.array(WeightSchema);

export const WeightListQuerySchema = z.object({
  completed: z.coerce.boolean().optional(),
});

export type Weight = z.infer<typeof WeightSchema>;
export type CreateWeight = z.infer<typeof CreateWeightSchema>;
export type UpdateWeight = z.infer<typeof UpdateWeightSchema>;
export type WeightList = z.infer<typeof WeightListSchema>;

export {};
