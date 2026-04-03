import { tools } from "./tools";

export const executeTools = async (name: string, args: any) => {
  const tool = tools[name as keyof typeof tools];
  if (!tool) {
    throw new Error(`Tool "${name}" not found`);
  }

  const excute = tool.execute;
  if (!excute) {
    throw new Error(`Tool "${name}" does not have an execute method`);
  }

  const result = await excute(args, { toolCallId: "", messages: [] });
  return String(result);
};
