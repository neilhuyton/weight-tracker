import { z } from 'zod';

export const WeightUnitSchema = z.enum(['kg', 'stones', 'pounds'])