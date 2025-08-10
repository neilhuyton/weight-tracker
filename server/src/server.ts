import cors from 'cors';
import express, { type Request, type Response } from 'express';
import { z } from 'zod';
// import { handleError } from './handle-error.js';

// import swaggerUi from 'swagger-ui-express';
// import openApi from '../openapi.json' with { type: 'json' };

import { CreateWeightSchema, UpdateWeightSchema } from 'weight-tracker-schema';
import { getAllWeights } from './client.js';
import { createTrpcAdapter } from './trpc/trpc-adapter.js';

export async function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api', createTrpcAdapter());

  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApi, { explorer: true }));

  // const client = new WeightClient(database);

  app.get('/weights',async (req: Request, res: Response) => {
    const { completed } = req.query;

    console.log('HERE');

    try {
      const tasks = await getAllWeights({ completed: completed === 'true' });
      return res.json(tasks || []);
    } catch (error) {
      return;
    }
  });

  // Get a specific task
  // app.get('/tasks/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const task = await client.getWeight(Number(id));

  //     if (!task) return res.status(404).json({ message: 'Weight not found' });

  //     return res.json(task);
  //   } catch (error) {
  //     return handleError(req, res, error);
  //   }
  // });

  // app.post('/tasks', async (req, res) => {
  //   try {
  //     const task = CreateWeightSchema.parse(req.body);
  //     if (!task.title) return res.status(400).json({ message: 'Title is required' });

  //     await client.createWeight(task);
  //     const tasks = await client.getAllWeights({ completed: false });
  //     return res.status(201).json(tasks[0]);
  //   } catch (error) {
  //     return handleError(req, res, error);
  //   }
  // });

  // Update a task
  // app.put('/tasks/:id', async (req, res) => {
  //   try {
  //     const { id } = z.object({ id: z.coerce.number() }).parse(req.params);

  //     const previous = await client.getWeight(id);
  //     if (!previous) return res.status(404).json({ message: 'Weight not found' });

  //     const updates = UpdateWeightSchema.parse(req.body);
  //     const task = { ...previous, ...updates };

  //     await client.updateWeight(id, task);
  //     const updated = await client.getWeight(id);
  //     return res.status(200).json(updated);
  //   } catch (error) {
  //     return handleError(req, res, error);
  //   }
  // });

  // Delete a task
  // app.delete('/tasks/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const task = await client.getWeight(Number(id));
  //     if (!task) return res.status(404).json({ message: 'Weight not found' });

  //     await client.deleteWeight(Number(id));
  //     return res.status(200).json({ message: 'Weight deleted successfully' });
  //   } catch (error) {
  //     return handleError(req, res, error);
  //   }
  // });

  return app;
}
