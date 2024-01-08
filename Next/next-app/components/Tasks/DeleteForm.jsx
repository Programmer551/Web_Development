// "use server";
import { deleteTask } from "@/utils/action";
import React from "react";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input
        type='hidden'
        value={id}
        name='id'
      />
      <button className='btn btn-xs btn-error'>delete</button>
    </form>
  );
};

export default DeleteForm;
