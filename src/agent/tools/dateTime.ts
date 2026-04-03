import { tool } from "ai";
import { z } from "zod";

export const dateTimeTool = tool({
  name: "dateTime",
  description:
    "Returns the current date and time. Use this tool before any time related task",
  inputSchema: z.object({}),
  async execute() {
    return new Date().toISOString();
  },
});
