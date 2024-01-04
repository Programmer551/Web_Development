import prisma from "@/utils/db";
import React from "react";
const handlers = async (content) => {
  // await prisma.task.create({ data: { content: content } });
  return await prisma.task.findMany({});
};
const Prisma = async () => {
  const tasks = await handlers("React js");
  return (
    <div>
      {tasks.map((task) => {
        return (
          <h1
            className='text-xl py-2'
            key={task.id}>
            {task.content}
          </h1>
        );
      })}
    </div>
  );
};

export default Prisma;
