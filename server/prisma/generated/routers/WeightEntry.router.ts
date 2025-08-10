import { t, publicProcedure } from "./helpers/createRouter";
import { WeightEntryAggregateSchema } from "../schemas/aggregateWeightEntry.schema";
import { WeightEntryCreateManySchema } from "../schemas/createManyWeightEntry.schema";
import { WeightEntryCreateOneSchema } from "../schemas/createOneWeightEntry.schema";
import { WeightEntryDeleteManySchema } from "../schemas/deleteManyWeightEntry.schema";
import { WeightEntryDeleteOneSchema } from "../schemas/deleteOneWeightEntry.schema";
import { WeightEntryFindFirstSchema } from "../schemas/findFirstWeightEntry.schema";
import { WeightEntryFindManySchema } from "../schemas/findManyWeightEntry.schema";
import { WeightEntryFindUniqueSchema } from "../schemas/findUniqueWeightEntry.schema";
import { WeightEntryGroupBySchema } from "../schemas/groupByWeightEntry.schema";
import { WeightEntryUpdateManySchema } from "../schemas/updateManyWeightEntry.schema";
import { WeightEntryUpdateOneSchema } from "../schemas/updateOneWeightEntry.schema";
import { WeightEntryUpsertSchema } from "../schemas/upsertOneWeightEntry.schema";

export const weightentriesRouter = t.router({
  aggregateWeightEntry: publicProcedure
    .input(WeightEntryAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateWeightEntry = await ctx.prisma.weightEntry.aggregate(input);
      return aggregateWeightEntry;
    }),
  createManyWeightEntry: publicProcedure
    .input(WeightEntryCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyWeightEntry = await ctx.prisma.weightEntry.createMany(input);
      return createManyWeightEntry;
    }),
  createOneWeightEntry: publicProcedure
    .input(WeightEntryCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneWeightEntry = await ctx.prisma.weightEntry.create(input);
      return createOneWeightEntry;
    }),
  deleteManyWeightEntry: publicProcedure
    .input(WeightEntryDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyWeightEntry = await ctx.prisma.weightEntry.deleteMany(input);
      return deleteManyWeightEntry;
    }),
  deleteOneWeightEntry: publicProcedure
    .input(WeightEntryDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneWeightEntry = await ctx.prisma.weightEntry.delete(input);
      return deleteOneWeightEntry;
    }),
  findFirstWeightEntry: publicProcedure
    .input(WeightEntryFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstWeightEntry = await ctx.prisma.weightEntry.findFirst(input);
      return findFirstWeightEntry;
    }),
  findFirstWeightEntryOrThrow: publicProcedure
    .input(WeightEntryFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstWeightEntryOrThrow = await ctx.prisma.weightEntry.findFirstOrThrow(input);
      return findFirstWeightEntryOrThrow;
    }),
  findManyWeightEntry: publicProcedure
    .input(WeightEntryFindManySchema).query(async ({ ctx, input }) => {
      const findManyWeightEntry = await ctx.prisma.weightEntry.findMany(input);
      return findManyWeightEntry;
    }),
  findUniqueWeightEntry: publicProcedure
    .input(WeightEntryFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueWeightEntry = await ctx.prisma.weightEntry.findUnique(input);
      return findUniqueWeightEntry;
    }),
  findUniqueWeightEntryOrThrow: publicProcedure
    .input(WeightEntryFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueWeightEntryOrThrow = await ctx.prisma.weightEntry.findUniqueOrThrow(input);
      return findUniqueWeightEntryOrThrow;
    }),
  groupByWeightEntry: publicProcedure
    .input(WeightEntryGroupBySchema).query(async ({ ctx, input }) => {
      const groupByWeightEntry = await ctx.prisma.weightEntry.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByWeightEntry;
    }),
  updateManyWeightEntry: publicProcedure
    .input(WeightEntryUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyWeightEntry = await ctx.prisma.weightEntry.updateMany(input);
      return updateManyWeightEntry;
    }),
  updateOneWeightEntry: publicProcedure
    .input(WeightEntryUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneWeightEntry = await ctx.prisma.weightEntry.update(input);
      return updateOneWeightEntry;
    }),
  upsertOneWeightEntry: publicProcedure
    .input(WeightEntryUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneWeightEntry = await ctx.prisma.weightEntry.upsert(input);
      return upsertOneWeightEntry;
    }),

}) 
