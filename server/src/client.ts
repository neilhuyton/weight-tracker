// src/tasks.ts
import { PrismaClient } from '../generated/prisma'; // Extensionless import
import { z } from 'zod';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the schema for WeightEntry
const WeightEntrySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  completed: z.boolean(),
  date: z.date(),
  weightKg: z.number().nullable(),
  stones: z.number().nullable(),
  pounds: z.number().nullable(),
  ounces: z.number().nullable(),
  unit: z.enum(['kg', 'stones', 'pounds']),
});

// Schema for a list of WeightEntry records
const WeightEntryListSchema = z.array(WeightEntrySchema);

async function getAllWeights({ completed }: { completed: boolean }) {
  try {
    const weightEntries = await prisma.weightEntry.findMany();

    return WeightEntryListSchema.parse(weightEntries);
  } catch (error) {
    console.error('Error fetching weight entries:', error);
    throw new Error('Failed to fetch weight entries');
  } finally {
    await prisma.$disconnect(); // Disconnect after query
  }
}

export { getAllWeights };
