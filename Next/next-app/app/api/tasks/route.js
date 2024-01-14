import prisma from "../../../utils/db";
export const GET = async (request) => {
  const tasks = await prisma.task.findMany();
  return Response.json({ data: tasks });
};
export const POST = async (request) => {
  const task = await request.json();
  const data = await prisma.task.create({ data: { content: task.content } });
  return Response.json({ data });
};
