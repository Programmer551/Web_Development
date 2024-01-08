// "use client";
import { getTask, updateTask } from "@/utils/action";
import React from "react";
import Link from "next/link";
const EditForm = async ({ id }) => {
  const { content, completed } = await getTask(id);
  //   const isChecked = false;
  return (
    <form action={updateTask}>
      <Link
        href='/tasks'
        className='btn btn-accent'>
        Back to Tasks
      </Link>

      <input
        type='checkbox'
        className='checkbox checkbox-accent mx-2 mt-2'
        // value={isChecked}
        defaultChecked={completed}
        name='completed'
      />
      <input
        className='input input-bordered join-item '
        placeholder='Type Here'
        type='text'
        value={content}
        name='updated'
        required
      />
      <input
        type='hidden'
        value={id}
        name='id'
      />
      <button className='btn btn-primary mx-4 p-4'>update</button>
    </form>
  );
};

export default EditForm;
