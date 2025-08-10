import { z } from 'zod';

export const WeightEntryScalarFieldEnumSchema = z.enum(['id', 'date', 'weightKg', 'stones', 'pounds', 'ounces', 'unit'])