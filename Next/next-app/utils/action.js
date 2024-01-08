"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const deleteTask = async (formData) => {
  // "use server";
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });
  revalidatePath("/tasks");
};
export const updateTask = async (formData) => {
  // "use server";
  const id = formData.get("id");
  const updated = formData.get("updated");
  const completed = formData.get("completed");
  await prisma.task.update({
    where: { id },
    data: { content: updated, completed: completed === "on" ? true : false },
  });
  redirect("/tasks");
};
export const getTask = async (id) => {
  return await prisma.task.findUnique({ where: { id } });
};
export const createTask = async (formData) => {
  // "use server";

  const content = formData.get("content");
  await prisma.task.create({ data: { content } });
  revalidatePath("/tasks");
};
