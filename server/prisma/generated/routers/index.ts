import { t } from "./helpers/createRouter";
import { weightentriesRouter } from "./WeightEntry.router";

export const appRouter = t.router({
  weightentry: weightentriesRouter
})

