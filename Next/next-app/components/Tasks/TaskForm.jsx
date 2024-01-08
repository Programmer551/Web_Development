"use client";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { useFormStatus } from "react-dom";
import { createTask } from "@/utils/action";
function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}>
      {pending ? "Please wait..." : "create task"}
    </button>
  );
}
const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
